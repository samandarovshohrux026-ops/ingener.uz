import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState('user'); // 'user' yoki 'admin'

    const register = async (email, password, name) => {
        try {
            console.log("Registering user with email:", email);
            // 1. Auth da foydalanuvchi yaratish
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created in Firebase Auth:", userCredential.user.uid);

            // 2. Ismini qo'shish
            await updateProfile(userCredential.user, { displayName: name });
            console.log("User profile updated with name:", name);

            // 3. Firestore bazasiga saqlash (qoshimcha ma'lumotlar bilan)
            console.log("Saving user data to Firestore...");
            await setDoc(doc(db, "users", userCredential.user.uid), {
                uid: userCredential.user.uid,
                email: email,
                name: name,
                role: "user", // Default rol
                createdAt: new Date(),
                subscription: "Oddiy",
                aiGenerationsLeft: 5
            });
            console.log("User data saved to Firestore successfully.");

            return userCredential.user;
        } catch (error) {
            console.error("AuthContext Register Error:", error);
            throw error;
        }
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        if (!auth) {
            console.error("Auth is not initialized! Check firebase.js logs.");
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                setCurrentUser(user);
                if (user) {
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        setUserRole(userDoc.data().role || 'user');
                    }
                } else {
                    setUserRole('user');
                }
            } catch (error) {
                console.error("Auth observer error:", error);
            } finally {
                setLoading(false);
            }
        }, (error) => {
            console.error("Firebase auth error:", error);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userRole,
        login,
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <div className="min-h-screen bg-background flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                        <p className="text-gray-400 animate-pulse">Yuklanmoqda...</p>
                    </div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

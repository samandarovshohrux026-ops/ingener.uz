import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Users, DollarSign, Activity, Settings, TrendingUp, Search } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const AdminPanel = () => {
    const { currentUser, userRole } = useAuth();
    const navigate = useNavigate();

    // Stats state
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalRevenue: 0,
        activeGenerations: 0,
        growth: '+12%'
    });

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Faqat admin kura oladi
        if (!currentUser || userRole !== 'admin') {
            navigate('/');
            return;
        }

        const fetchAdminData = async () => {
            try {
                // Foydalanuvchilarni bazadan olish
                const querySnapshot = await getDocs(collection(db, "users"));
                const usersList = [];
                let revenue = 0;

                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    usersList.push(userData);

                    // Vaqtincha hisob kitob
                    if (userData.subscription === 'Professional') revenue += 29;
                    if (userData.subscription === 'Korporativ') revenue += 99;
                });

                setUsers(usersList);
                setStats({
                    totalUsers: usersList.length,
                    totalRevenue: revenue,
                    activeGenerations: usersList.reduce((acc, curr) => acc + (curr.aiGenerationsLeft || 0), 0),
                    growth: '+24%'
                });
            } catch (error) {
                console.error("Admin data error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAdminData();
    }, [currentUser, userRole, navigate]);

    if (isLoading) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    const StatCard = ({ title, value, icon: Icon, trend }) => (
        <div className="glass p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-primary/20" />
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary-light">
                    <Icon size={24} />
                </div>
                <span className="text-emerald-400 text-sm font-medium flex items-center bg-emerald-400/10 px-2 py-1 rounded-lg">
                    {trend}
                </span>
            </div>
            <div>
                <p className="text-gray-400 text-sm mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-white">{value}</h3>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Boshqaruv Paneli</h1>
                        <p className="text-gray-400">Tizimning umumiy holati va foydalanuvchilar statistikasi</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="glass py-2 px-4 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
                            <Settings size={18} className="text-gray-400" />
                            Sozlamalar
                        </button>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        title="Jami Foydalanuvchilar"
                        value={stats.totalUsers}
                        icon={Users}
                        trend={stats.growth}
                    />
                    <StatCard
                        title="Tushumlar ($)"
                        value={`$${stats.totalRevenue}`}
                        icon={DollarSign}
                        trend="+15%"
                    />
                    <StatCard
                        title="Qolgan Generatsiyalar"
                        value={stats.activeGenerations}
                        icon={Activity}
                        trend="+5%"
                    />
                    <StatCard
                        title="Faollik Darajasi"
                        value="98.2%"
                        icon={TrendingUp}
                        trend="+1.2%"
                    />
                </div>

                {/* Users Table */}
                <div className="glass rounded-2xl overflow-hidden border border-white/10">
                    <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h2 className="text-xl font-bold text-white">So'nggi Foydalanuvchilar</h2>

                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Qidirish..."
                                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 w-full sm:w-64"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="py-4 px-6 text-sm font-medium text-gray-400">Foydalanuvchi</th>
                                    <th className="py-4 px-6 text-sm font-medium text-gray-400">Email</th>
                                    <th className="py-4 px-6 text-sm font-medium text-gray-400">Rol</th>
                                    <th className="py-4 px-6 text-sm font-medium text-gray-400">Obuna Turi</th>
                                    <th className="py-4 px-6 text-sm font-medium text-gray-400 text-right">Sanasi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-8 text-center text-gray-400">Hozircha foydalanuvchilar yo'q</td>
                                    </tr>
                                ) : (
                                    users.map((user, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light font-bold text-sm">
                                                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                                    </div>
                                                    <span className="font-medium text-white">{user.name || 'Nomsiz'}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-gray-300">{user.email}</td>
                                            <td className="py-4 px-6">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.role === 'admin' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'
                                                    }`}>
                                                    {user.role || 'user'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.subscription === 'Professional' ? 'bg-primary/20 text-primary-light' :
                                                        user.subscription === 'Korporativ' ? 'bg-emerald-500/20 text-emerald-400' :
                                                            'bg-gray-500/20 text-gray-300'
                                                    }`}>
                                                    {user.subscription || 'Oddiy'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-right text-gray-400 text-sm">
                                                {user.createdAt ? new Date(user.createdAt.seconds * 1000).toLocaleDateString() : 'Bugun'}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminPanel;

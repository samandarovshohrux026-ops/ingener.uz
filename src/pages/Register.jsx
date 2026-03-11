import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md px-4 relative z-10"
            >
                <div className="glass-card p-8 border-t-2 border-t-primary/50">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Yangi Hisob</h2>
                        <p className="text-sm text-gray-400 text-center">
                            AI yordamida loyihalashni boshlash uchun ro'yxatdan o'ting
                        </p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">To'liq ismingiz</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    className="w-full pl-10 pr-4 py-3 bg-surface border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all outline-none"
                                    placeholder="Masalan: Alisher Navoiy"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email manzili</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-10 pr-4 py-3 bg-surface border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all outline-none"
                                    placeholder="nom@mail.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Parol</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 bg-surface border border-white/10 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-white transition-all outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button type="button" className="w-full btn-primary flex justify-center py-3 mt-6 text-lg font-semibold">
                            Ro'yxatdan O'tish
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        Allaqachon hisobingiz bormi?{' '}
                        <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                            Tizimga kirish
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;

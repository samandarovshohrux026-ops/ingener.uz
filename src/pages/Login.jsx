import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Hexagon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[30%] h-[30%] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30%] h-[30%] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md px-4 relative z-10"
            >
                <div className="glass-card p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
                            <Hexagon className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Xush Kelibsiz</h2>
                        <p className="text-sm text-gray-400 text-center">
                            Ingener.uz tizimiga kirish uchun ma'lumotlaringizni kiriting
                        </p>
                    </div>

                    <form className="space-y-4">
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
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-gray-300">Parol</label>
                                <a href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">Parolni unutdingizmi?</a>
                            </div>
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

                        <button type="button" className="w-full btn-primary flex justify-center py-3 mt-6">
                            Tizimga Kirish
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        Hisobingiz yo'qmi?{' '}
                        <Link to="/register" className="text-primary hover:text-primary/80 font-medium transition-colors">
                            Ro'yxatdan o'tish
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

import React from 'react';
import { ArrowRight, Sparkles, Building2, PaintBucket, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary w-fit text-sm font-medium mb-2">
                            <Sparkles className="w-4 h-4" />
                            <span>AI Versiya 2.0 ishga tushirildi</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            Kelajak binosini <br />
                            <span className="text-gradient">AI yordamida</span> <br />
                            yaratamiz
                        </h1>

                        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                            O'z g'oyangizni bir necha soniyada professional arxitektura rejalari va 3D dizaynlariga aylantiring. Ingener.uz — qurilish bozorining raqamli inqilobi.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Link to="/generator" className="btn-primary flex items-center justify-center gap-2 text-lg">
                                Generatsiya Qilish
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/portfolio" className="btn-secondary flex items-center justify-center gap-2 text-lg">
                                Loyihalarni Ko'rish
                            </Link>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">10K+</span>
                                <span className="text-sm text-gray-500">Yaratilgan loyihalar</span>
                            </div>
                            <div className="w-px h-12 bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-white">99%</span>
                                <span className="text-sm text-gray-500">Mijozlar mamnuniyati</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Showcase / Floating elements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Base Image Container Placeholder */}
                        <div className="absolute inset-0 bg-surfaceLight/40 rounded-3xl border border-white/5 overflow-hidden ring-1 ring-white/10 glass">
                            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-surfaceLight opacity-90" />

                            {/* Inner content abstract visual */}
                            <div className="w-full h-full relative p-8 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 border border-white/10 rounded-2xl relative">
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 rounded-full blur-[60px]" />
                                    <div className="absolute w-full h-full p-4 grid grid-cols-2 gap-4">
                                        {/* Skeleton of a blueprint */}
                                        <div className="border border-primary/20 bg-primary/5 rounded-xl col-span-2 h-1/2 flex items-center justify-center">
                                            <Building2 className="w-16 h-16 text-primary/40" />
                                        </div>
                                        <div className="border border-secondary/20 bg-secondary/5 rounded-xl flex items-center justify-center">
                                            <PaintBucket className="w-8 h-8 text-secondary/40" />
                                        </div>
                                        <div className="border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
                                            <Layers className="w-8 h-8 text-gray-400/40" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 lg:top-12 lg:-left-12 glass-card p-4 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Arxitektura</p>
                                <p className="font-semibold text-white">Chizmalar Tayyor</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 glass-card p-4 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">AI Render</p>
                                <p className="font-semibold text-white">Yuqori Aniqlikda</p>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Landing;

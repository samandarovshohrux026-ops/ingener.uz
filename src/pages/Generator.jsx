import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Wand2, Download, Maximize, Settings2, Sparkles, Image as ImageIcon } from 'lucide-react';

const Generator = () => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen pt-24 pb-16 flex flex-col relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col z-10">
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-primary" />
                        AI Arxitektura Generatori
                    </h1>
                    <p className="text-gray-400">Parametrlarni kiriting va AI yordamida mukammal dizaynni yarating</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 flex-grow">

                    {/* Controls Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="glass-card p-6 border-t-2 border-t-primary/50">
                            <div className="flex items-center gap-2 mb-6">
                                <Settings2 className="w-5 h-5 text-gray-400" />
                                <h3 className="text-lg font-semibold text-white">Sozlamalar</h3>
                            </div>

                            <div className="space-y-5">
                                {/* Bino Turi */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Bino turi</label>
                                    <select className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                                        <option>Zamonaviy Villa</option>
                                        <option>Ko'p Qavatli Bino</option>
                                        <option>Savdo Markazi</option>
                                        <option>Kottej</option>
                                    </select>
                                </div>

                                {/* Dizayn Stili */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Arxitektura stili</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['Zamonaviy', 'Klassik', 'Minimalist', 'High-Tech', 'Loft', 'Eko'].map((style, i) => (
                                            <button
                                                key={style}
                                                className={`py-2 px-3 text-sm rounded-lg border transition-all ${i === 0
                                                        ? 'bg-primary/20 border-primary text-primary font-medium'
                                                        : 'bg-surface/30 border-white/5 text-gray-400 hover:bg-white/5'
                                                    }`}
                                            >
                                                {style}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Eskiz Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Boshlang'ich eskiz yoki rasm (ixtiyoriy)</label>
                                    <div className="border-2 border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group">
                                        <div className="w-12 h-12 rounded-full bg-surfaceLight flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <Upload className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="text-sm text-gray-400 drop-shadow-md">Faylni shu yerga tashlang yoki tanlang</span>
                                        <span className="text-xs text-gray-500 mt-1">PNG, JPG, max 5MB</span>
                                    </div>
                                </div>

                                {/* Prompt textarea */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Qo'shimcha tavsif</label>
                                    <textarea
                                        rows="3"
                                        className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="Masalan: Katta derazali, quyosh botish vaqtidagi yoritish..."
                                    ></textarea>
                                </div>

                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating}
                                    className="w-full btn-primary text-lg font-semibold flex items-center justify-center gap-2 mt-4"
                                >
                                    {isGenerating ? (
                                        <>
                                            <Wand2 className="w-5 h-5 animate-pulse" />
                                            Yaratilmoqda...
                                        </>
                                    ) : (
                                        <>
                                            <Wand2 className="w-5 h-5" />
                                            Generatsiya Qilish
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Canvas / Output Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8 flex flex-col h-[600px] lg:h-auto"
                    >
                        <div className="glass-card flex-grow relative flex items-center justify-center overflow-hidden border-2 border-white/5">

                            {isGenerating ? (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-sm">
                                    <div className="w-16 h-16 relative mb-6 text-primary">
                                        <span className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary w-full h-full animate-spin"></span>
                                        <Sparkles className="absolute inset-0 m-auto w-6 h-6 animate-pulse" />
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-2">AI Dizayn Ustida Ishlamoqda</h3>
                                    <p className="text-sm text-gray-400 text-center max-w-sm">
                                        Siz kiritgan parametrlar asosida noyob arxitektura vizualizatsiyasi yaratilmoqda.
                                    </p>
                                </div>
                            ) : null}

                            {/* Placeholder Content Result */}
                            <div className="absolute inset-0 w-full h-full bg-surfaceLight flex flex-col items-center justify-center text-center p-8">
                                <ImageIcon className="w-20 h-20 text-white/5 mb-4" />
                                <p className="text-gray-500 max-w-sm">
                                    Generatsiya natijasi shu yerda ko'rinadi. Sifatli 3D va loyiha hujjatlarini shu yerdan yuklab olishingiz mumkin.
                                </p>
                            </div>

                            {/* Action Bar (shown when has result) */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 p-2 glass rounded-2xl opacity-50 pointer-events-none hover:opacity-100 transition-opacity">
                                <button className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-all pointer-events-auto">
                                    <Maximize className="w-5 h-5" />
                                </button>
                                <div className="w-px h-8 bg-white/10"></div>
                                <button className="px-6 py-2 rounded-xl bg-primary text-white font-medium flex items-center gap-2 hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 pointer-events-auto">
                                    <Download className="w-4 h-4" />
                                    Saqlash
                                </button>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Generator;

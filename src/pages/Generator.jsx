import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Download, Maximize, Settings2, Sparkles, Image as ImageIcon, Loader } from 'lucide-react';

const Generator = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [buildingType, setBuildingType] = useState('Zamonaviy Villa');
    const [selectedStyle, setSelectedStyle] = useState('Zamonaviy');
    const [prompt, setPrompt] = useState('');
    const [generatedVariants, setGeneratedVariants] = useState(null);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [viewMode, setViewMode] = useState('image'); // 'image', 'video', 'dimensions'

    const handleGenerate = () => {
        if (isGenerating) return;

        setIsGenerating(true);
        setGeneratedVariants(null);
        setSelectedVariantIndex(0);
        setViewMode('image');

        setTimeout(() => {
            setIsGenerating(false);

            const mockData = {
                'Zamonaviy': [
                    {
                        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-under-a-clear-sky-40232-large.mp4',
                        details: { area: '320 m²', height: '11m', floors: '2', rooms: '6', time: '5-7 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-40228-large.mp4',
                        details: { area: '280 m²', height: '9m', floors: '2', rooms: '5', time: '4-6 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-glass-building-exterior-40230-large.mp4',
                        details: { area: '450 m²', height: '14m', floors: '3', rooms: '8', time: '8-10 oy' }
                    }
                ],
                'Klassik': [
                    {
                        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-under-a-clear-sky-40232-large.mp4',
                        details: { area: '500 m²', height: '15m', floors: '3', rooms: '10', time: '12-18 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-40228-large.mp4',
                        details: { area: '420 m²', height: '12m', floors: '2', rooms: '7', time: '10-12 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-glass-building-exterior-40230-large.mp4',
                        details: { area: '600 m²', height: '18m', floors: '3', rooms: '12', time: '15-24 oy' }
                    }
                ],
                'Minimalist': [
                    {
                        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-under-a-clear-sky-40232-large.mp4',
                        details: { area: '180 m²', height: '7m', floors: '1', rooms: '3', time: '3-4 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-40228-large.mp4',
                        details: { area: '210 m²', height: '8m', floors: '2', rooms: '4', time: '4-5 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-glass-building-exterior-40230-large.mp4',
                        details: { area: '150 m²', height: '6m', floors: '1', rooms: '2', time: '2-3 oy' }
                    }
                ],
                'High-Tech': [
                    {
                        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-under-a-clear-sky-40232-large.mp4',
                        details: { area: '400 m²', height: '16m', floors: '3', rooms: '7', time: '8-12 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-40228-large.mp4',
                        details: { area: '350 m²', height: '14m', floors: '2', rooms: '6', time: '7-10 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-glass-building-exterior-40230-large.mp4',
                        details: { area: '550 m²', height: '20m', floors: '4', rooms: '9', time: '12-15 oy' }
                    }
                ],
                'Loft': [
                    {
                        image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-under-a-clear-sky-40232-large.mp4',
                        details: { area: '200 m²', height: '9m', floors: '2', rooms: '4', time: '6-8 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-40228-large.mp4',
                        details: { area: '180 m²', height: '8m', floors: '1', rooms: '3', time: '5-7 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1536376074402-2912e0427630?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-glass-building-exterior-40230-large.mp4',
                        details: { area: '250 m²', height: '10m', floors: '2', rooms: '5', time: '7-9 oy' }
                    }
                ],
                'Eko': [
                    {
                        image: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-with-large-windows-under-a-clear-sky-40232-large.mp4',
                        details: { area: '240 m²', height: '10m', floors: '2', rooms: '5', time: '6-9 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-40228-large.mp4',
                        details: { area: '200 m²', height: '9m', floors: '1', rooms: '4', time: '5-8 oy' }
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1449156001437-3a1621dfbe28?auto=format&fit=crop&q=80&w=1200',
                        video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-glass-building-exterior-40230-large.mp4',
                        details: { area: '310 m²', height: '11m', floors: '2', rooms: '6', time: '7-10 oy' }
                    }
                ]
            };

            const currentVariants = mockData[selectedStyle] || mockData['Zamonaviy'];
            setGeneratedVariants(currentVariants);
        }, 3000);
    };

    const styles = ['Zamonaviy', 'Klassik', 'Minimalist', 'High-Tech', 'Loft', 'Eko'];
    const currentVariant = generatedVariants ? generatedVariants[selectedVariantIndex] : null;

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
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Bino turi</label>
                                    <select
                                        value={buildingType}
                                        onChange={(e) => setBuildingType(e.target.value)}
                                        className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                                    >
                                        <option>Zamonaviy Villa</option>
                                        <option>Ko'p Qavatli Bino</option>
                                        <option>Savdo Markazi</option>
                                        <option>Kottej</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Arxitektura stili</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {styles.map((style) => (
                                            <button
                                                key={style}
                                                type="button"
                                                onClick={() => setSelectedStyle(style)}
                                                className={`py-2 px-3 text-sm rounded-lg border transition-all ${selectedStyle === style
                                                    ? 'bg-primary/20 border-primary text-primary font-medium'
                                                    : 'bg-surface/30 border-white/5 text-gray-400 hover:bg-white/5'
                                                    }`}
                                            >
                                                {style}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Qo'shimcha tavsif</label>
                                    <textarea
                                        rows="3"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
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
                                        <Loader className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            <Wand2 className="w-5 h-5" />
                                            Generatsiya Qilish
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {generatedVariants && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-card p-6"
                            >
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Variantni tanlang</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {generatedVariants.map((v, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedVariantIndex(idx)}
                                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedVariantIndex === idx ? 'border-primary scale-105 shadow-lg shadow-primary/20' : 'border-white/5 opacity-60 hover:opacity-100'}`}
                                        >
                                            <img src={v.image} alt={`Variant ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Canvas / Output Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8 flex flex-col h-[600px] lg:min-h-[700px]"
                    >
                        <div className="glass-card flex-grow relative flex flex-col overflow-hidden border-2 border-white/5">
                            {/* View Mode Toggle */}
                            {currentVariant && (
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 p-1">
                                    {[
                                        { id: 'image', label: 'Rasm', icon: ImageIcon },
                                        { id: 'video', label: 'Video', icon: Maximize },
                                        { id: 'dimensions', label: "O'lchamlar", icon: Settings2 }
                                    ].map((mode) => (
                                        <button
                                            key={mode.id}
                                            onClick={() => setViewMode(mode.id)}
                                            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${viewMode === mode.id ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            <mode.icon className="w-4 h-4" />
                                            {mode.label}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {isGenerating ? (
                                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-sm">
                                    <div className="w-16 h-16 relative mb-6 text-primary">
                                        <span className="absolute inset-0 rounded-full border-t-2 border-r-2 border-primary w-full h-full animate-spin"></span>
                                        <Sparkles className="absolute inset-0 m-auto w-6 h-6 animate-pulse" />
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-2">3 ta variant yaratilmoqda...</h3>
                                    <p className="text-sm text-gray-400 text-center max-w-sm">
                                        {selectedStyle} stilidagi {buildingType} uchun eng yaxshi dizaynlar tayyorlanmoqda.
                                    </p>
                                </div>
                            ) : null}

                            <div className="flex-grow flex items-center justify-center bg-surfaceLight/30">
                                {currentVariant ? (
                                    <div className="w-full h-full relative">
                                        {viewMode === 'image' && (
                                            <motion.img
                                                key={`img-${selectedVariantIndex}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                src={currentVariant.image}
                                                alt="Generated design"
                                                className="w-full h-full object-cover"
                                            />
                                        )}

                                        {viewMode === 'video' && (
                                            <motion.div
                                                key={`vid-${selectedVariantIndex}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="w-full h-full bg-black flex items-center justify-center relative"
                                            >
                                                <video
                                                    key={currentVariant.video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    poster={currentVariant.image}
                                                    className="w-full h-full object-cover"
                                                >
                                                    <source src={currentVariant.video} type="video/mp4" />
                                                    Brauzeringiz videoni qo'llab-quvvatlamaydi.
                                                </video>
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                                                    <span className="px-4 py-2 border border-white/20 rounded-lg bg-black/40 backdrop-blur-md">360° Ko'rinish</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        {viewMode === 'dimensions' && (
                                            <motion.div
                                                key={`dim-${selectedVariantIndex}`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-surface to-surfaceLight"
                                            >
                                                <div className="w-full max-w-2xl grid sm:grid-cols-2 gap-6">
                                                    {[
                                                        { label: "Umumiy Maydon", value: currentVariant.details.area, icon: "📐" },
                                                        { label: "Balandlik", value: currentVariant.details.height, icon: "⬆️" },
                                                        { label: "Qavatlar", value: currentVariant.details.floors, icon: "🏢" },
                                                        { label: "Xonalar Soni", value: currentVariant.details.rooms, icon: "🚪" },
                                                        { label: "Qurilish Muddaati", value: currentVariant.details.time, icon: "⏱️" },
                                                        { label: "Stil", value: selectedStyle, icon: "✨" }
                                                    ].map((item, i) => (
                                                        <div key={i} className="glass-card p-6 border-l-4 border-l-primary flex items-center gap-4">
                                                            <span className="text-3xl">{item.icon}</span>
                                                            <div>
                                                                <p className="text-xs text-gray-500 font-bold uppercase">{item.label}</p>
                                                                <p className="text-xl font-bold text-white">{item.value}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <div className="sm:col-span-2 mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm text-center">
                                                        Ushbu o'lchamlar AI tomonidan taxminiy hisoblangan. To'liq chizmalarni yuklab olishingiz mumkin.
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center text-center p-8">
                                        <ImageIcon className="w-20 h-20 text-white/5 mb-4" />
                                        <p className="text-gray-500 max-w-sm">
                                            Variantlar, videolar va o'lchamlar generatsiya natijasida shu yerda paydo bo'ladi.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Action Bar */}
                            {currentVariant && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 p-2 glass rounded-2xl shadow-2xl border border-white/10 scale-90 sm:scale-100 mb-2">
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                                        <Maximize className="w-5 h-5" />
                                    </button>
                                    <div className="w-px h-8 bg-white/10"></div>
                                    <button className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl bg-primary text-white text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
                                        <Download className="w-4 h-4" />
                                        Loyihani Yuklab Olish (PDF/DWG)
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Generator;

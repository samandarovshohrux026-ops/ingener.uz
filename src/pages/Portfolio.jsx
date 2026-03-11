import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ArrowRight } from 'lucide-react';

const projects = [
    { id: 1, title: 'Zamonaviy Eko Villa', style: 'Eko', views: '2.4k', likes: 145 },
    { id: 2, title: 'Shisha Qavatli Ofis', style: 'High-Tech', views: '1.8k', likes: 89 },
    { id: 3, title: 'Premium Kottej', style: 'Klassik', views: '3.1k', likes: 324 },
    { id: 4, title: 'Dengiz Bo\'yi Uyi', style: 'Minimalist', views: '1.2k', likes: 67 },
    { id: 5, title: 'Shahar Savdo Markazi', style: 'Futuristik', views: '5k+', likes: 892 },
    { id: 6, title: 'Tog\' Bag\'ridagi Uy', style: 'Loft', views: '3.7k', likes: 451 },
];

const Portfolio = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">AI tomonidan yaratilgan <br /><span className="text-gradient">eng sara loyihalar</span></h1>
                        <p className="text-gray-400 max-w-xl text-lg">Platformamiz obunachilari tomonidan generatsiya qilingan g'aroyib arxitektura namunalari va interior dizaynlar.</p>
                    </div>

                    <div className="mt-8 md:mt-0 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {['Barchasi', 'Villalar', 'Ofislar', 'Interyer', 'Tijorat'].map((cat, i) => (
                            <button
                                key={cat}
                                className={`flex-shrink-0 px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${i === 0 ? 'bg-white text-black' : 'glass text-gray-300 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden glass aspect-[4/3] cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-surfaceLight group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                                <div className="absolute w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                                {/* Abstract visualizer for empty image */}
                                <div className="w-1/2 h-1/2 border border-white/5 rounded-xl rotate-3 opacity-20"></div>
                                <div className="absolute w-1/3 h-2/3 border border-white/5 rounded-xl -rotate-6 opacity-20 bg-black/20"></div>
                            </div>

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            {/* Content Box */}
                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/5 rounded-full text-xs font-medium text-white mb-3">
                                        {project.style}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                </div>

                                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                                            <Eye className="w-4 h-4" />
                                            {project.views}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                                            <Heart className="w-4 h-4 text-primary" />
                                            {project.likes}
                                        </div>
                                    </div>

                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                        <ArrowRight className="w-5 h-5 -rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center flex justify-center">
                    <button className="btn-secondary px-8">Ko'proq Yuklash</button>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;

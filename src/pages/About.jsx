import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Hexagon } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* About Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                                <Hexagon className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Biz haqimizda
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Ingener.uz — bu sun'iy intellekt va an'anaviy arxitekturani birlashtirgan innovatsion platformadir. Bizning maqsadimiz qurilish sohasida dizayn va rejalashtirish jarayonlarini maksimal darajada tezlashtirish va sifatini oshirishdir.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            <div>
                                <h4 className="text-3xl font-bold text-white">50K+</h4>
                                <p className="text-sm text-gray-500">Generatsiyalar</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">12M+</h4>
                                <p className="text-sm text-gray-500">M2 maydon dizayni</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">24/7</h4>
                                <p className="text-sm text-gray-500">Qo'llab-quvvatlash</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mt-20">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Biz bilan bog'laning</h2>
                        <p className="text-gray-400 mb-10">
                            Savollaringiz bormi yoki hamkorlik qilmoqchimisiz? Formani to'ldiring va biz siz bilan tez orada bog'lanamiz.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Manzil</h4>
                                    <p className="text-gray-400 text-sm">Toshkent shahri, Yunusobod tumani, <br />Amir Temur shox ko'chasi, 107-B</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Telefon</h4>
                                    <p className="text-gray-400 text-sm">+998 71 200 00 00</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email</h4>
                                    <p className="text-gray-400 text-sm">info@ingener.uz</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Ismingiz</label>
                                    <input type="text" className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Alisher" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Telefon / Email</label>
                                    <input type="text" className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+998 90 123 45 67" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Xabar mavzusi</label>
                                <input type="text" className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Hamkorlik haqida" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Xabaringiz</label>
                                <textarea rows="4" className="w-full bg-surface/50 border border-white/10 rounded-xl py-3 px-4 text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Salom, men platformangizdan kompaniyamiz uchun foydalanmoqchiman..."></textarea>
                            </div>

                            <button type="button" className="w-full btn-primary py-4 font-semibold text-lg flex justify-center items-center gap-2">
                                <Send className="w-5 h-5" />
                                Xabarni Yuborish
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;

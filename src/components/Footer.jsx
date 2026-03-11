import React from 'react';
import { Hexagon, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Hexagon className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-white">Ingener.uz</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            AI yordamida kelajak arxitekturasini loyihalashtiring. Tez, sifatli va innovatsion yechimlar.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full glass shrink-0 flex items-center justify-center hover:bg-primary/20 transition-colors text-gray-300 hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass shrink-0 flex items-center justify-center hover:bg-primary/20 transition-colors text-gray-300 hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass shrink-0 flex items-center justify-center hover:bg-primary/20 transition-colors text-gray-300 hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Platforma</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Loyiha Generator</a></li>
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Portfel</a></li>
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Narxlar</a></li>
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Kompaniya</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Biz haqimizda</a></li>
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Foydalanish shartlari</a></li>
                            <li><a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Maxfiylik siyosati</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Aloqa</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Toshkent sh., Yunusobod tumani, Amir Temur shox ko'chasi, 107-B</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@ingener.uz</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+998 71 200 00 00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Ingener.uz. Barcha huquqlar himoyalangan.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

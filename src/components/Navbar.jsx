import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, User, LogOut, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { currentUser, logout, userRole } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Asosiy', path: '/' },
        { name: 'Xizmatlar', path: '/services' },
        { name: 'Portfel', path: '/portfolio' },
        { name: 'Biz haqimizda', path: '/about' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                            <Hexagon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                            Ingener.uz
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        {currentUser ? (
                            <div className="flex items-center gap-6">
                                {userRole === 'admin' && (
                                    <Link to="/admin" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 text-sm font-medium">
                                        <ShieldCheck className="w-4 h-4" />
                                        Admin Panel
                                    </Link>
                                )}
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Xush kelibsiz,</p>
                                        <p className="text-sm font-semibold text-white">{currentUser.displayName || 'Foydalanuvchi'}</p>
                                    </div>
                                    <button
                                        onClick={async () => {
                                            await logout();
                                            toast.success("Tizimdan chiqdingiz");
                                        }}
                                        className="p-2 rounded-xl bg-white/5 hover:bg-red-500/10 hover:text-red-400 transition-all text-gray-400"
                                        title="Chiqish"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                    Kirish
                                </Link>
                                <Link to="/register" className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Boshlash
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full animate-fade-in border-t border-white/5">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block text-base font-medium text-gray-300 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
                            {currentUser ? (
                                <>
                                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
                                        <span className="text-sm text-gray-400">{currentUser.displayName || 'Foydalanuvchi'}</span>
                                        {userRole === 'admin' && <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Admin</span>}
                                    </div>
                                    {userRole === 'admin' && (
                                        <Link to="/admin" className="w-full text-center py-3 rounded-xl glass text-amber-400 font-medium" onClick={() => setMobileMenuOpen(false)}>Admin Panel</Link>
                                    )}
                                    <button
                                        onClick={async () => {
                                            await logout();
                                            setMobileMenuOpen(false);
                                            toast.success("Tizimdan chiqdingiz");
                                        }}
                                        className="w-full text-center py-3 rounded-xl bg-red-500/10 text-red-400 font-medium"
                                    >
                                        Chiqishdan
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="w-full text-center py-3 rounded-xl glass text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Kirish</Link>
                                    <Link to="/register" className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Ro'yxatdan o'tish</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

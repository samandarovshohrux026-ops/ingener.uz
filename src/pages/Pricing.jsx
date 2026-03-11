import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building2, Crown } from 'lucide-react';

const plans = [
    {
        name: "Oddiy",
        price: "Bepul",
        description: "AI imkoniyatlari bilan tanishish uchun",
        icon: <Building2 className="w-8 h-8 text-gray-400" />,
        features: [
            "Oyiga 5 ta bepul AI generatsiya",
            "Standart sifatli 2D chizmalar",
            "Bitta asosiy stil tanlovi",
            "Eksport (faqat JPG)"
        ],
        buttonText: "Boshlash",
        popular: false
    },
    {
        name: "Professional",
        price: "199,000 so'm/oy",
        description: "Haqiqiy arxitektor va dizaynerlar uchun",
        icon: <Zap className="w-8 h-8 text-accent" />,
        features: [
            "Cheksiz AI generatsiyalar",
            "Yuqori sifatli 3D va 4K renderlar",
            "Barcha interyer/eksteryer stillari",
            "CAD, PDF formatlarda eksport",
            "Ustuvor mijozlarni qo'llab-quvvatlash"
        ],
        buttonText: "Pro Versiyaga O'tish",
        popular: true
    },
    {
        name: "Korporativ",
        price: "Kelishuv asosida",
        description: "Qurilish kompaniyalari uchun maxsus",
        icon: <Crown className="w-8 h-8 text-primary" />,
        features: [
            "Barcha Pro imkoniyatlari",
            "API orqali ulanish",
            "Maxsus AI modelni o'qitish",
            "Jamoaviy ishlash funksiyalari",
            "Shaxsiy menejer"
        ],
        buttonText: "Biz bilan bog'laning",
        popular: false
    }
];

const Pricing = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
                    >
                        Sizga mos <span className="text-gradient"> тариф rejasini</span> tanlang
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-400"
                    >
                        Loyihalaringiz ko'lamiga qarab eng yaxshi shartlarni taklif etamiz. Istalgan vaqtda bekor qilishingiz mumkin.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative ${plan.popular ? 'transform md:-translate-y-4' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <span className="bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-accent/20">
                                        Eng Mashhur
                                    </span>
                                </div>
                            )}

                            <div className={`glass-card p-8 h-full flex flex-col ${plan.popular ? 'border-accent/50 ring-1 ring-accent/20 bg-surface/90' : 'border-white/10'}`}>
                                <div className="mb-6 flex justify-center">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-accent/10' : 'bg-surfaceLight'}`}>
                                        {plan.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
                                <p className="text-center text-gray-400 text-sm mb-6 h-10">{plan.description}</p>

                                <div className="text-center mb-8">
                                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0">
                                                <Check className={`w-5 h-5 ${plan.popular ? 'text-accent' : 'text-primary'}`} />
                                            </div>
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${plan.popular
                                        ? 'bg-gradient-to-r from-accent to-orange-500 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-95'
                                        : 'glass text-white hover:bg-white/10 active:scale-95'
                                    }`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;

import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ArrowUpRight, CreditCard, Wallet, Activity, Zap } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 font-sans">
        {/* Dashboard Container */}
        <div className="bg-[#0f1115] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 opacity-50" />
            
            <div className="flex flex-col lg:flex-row h-full">
                {/* Sidebar Mockup */}
                <div className="hidden lg:flex w-20 flex-col items-center py-8 border-r border-white/5 gap-8">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500"><Zap size={20} /></div>
                    <div className="flex flex-col gap-6 text-gray-500">
                        <div className="p-2 bg-white/10 rounded-lg text-white"><Wallet size={20} /></div>
                        <div className="p-2 hover:text-white transition-colors"><Activity size={20} /></div>
                        <div className="p-2 hover:text-white transition-colors"><CreditCard size={20} /></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-10 bg-gradient-to-br from-[#0f1115] to-[#16181d]">
                    {/* Dash Header */}
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-1">Dashboard</h2>
                            <p className="text-gray-500 text-sm">Overview of your design assets</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-full text-black font-medium hover:bg-gray-200 transition-colors">
                            <span>Customize</span>
                            <Zap size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Chart Section */}
                        <div className="lg:col-span-2 p-6 rounded-3xl bg-[#1c1e24] border border-white/5 relative overflow-hidden group">
                             <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                             
                             <div className="flex justify-between items-start mb-8 relative z-10">
                                <div>
                                    <p className="text-gray-400 text-sm mb-2">Total Valuation</p>
                                    <h3 className="text-4xl font-bold text-white">$8,780.90</h3>
                                    <span className="flex items-center gap-1 text-green-400 text-sm mt-2">
                                        <ArrowUpRight size={14} /> +12.5% this month
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    {['1w', '1m', '3m', '1y'].map((period, i) => (
                                        <button key={period} className={`px-3 py-1 rounded-full text-xs ${i === 1 ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                                            {period}
                                        </button>
                                    ))}
                                </div>
                             </div>

                             {/* Abstract Chart */}
                             <div className="h-48 w-full flex items-end justify-between gap-2 px-2">
                                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 50, 60, 40, 70].map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        className="w-full bg-gradient-to-t from-rose-500/20 to-rose-500 rounded-t-sm hover:from-rose-400/40 hover:to-rose-400 transition-colors cursor-pointer"
                                    />
                                ))}
                             </div>
                        </div>

                        {/* Card Section */}
                        <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 text-white relative overflow-hidden shadow-lg">
                            <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 p-20 bg-rose-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                            
                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[250px]">
                                <div className="flex justify-between items-start">
                                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">Active</div>
                                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                                        <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.5"/>
                                        <circle cx="28" cy="12" r="12" fill="white" fillOpacity="0.5"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-mono text-lg tracking-widest opacity-80 mb-6">**** **** **** 4920</p>
                                    <p className="text-blue-100 text-sm">Balance</p>
                                    <h3 className="text-3xl font-bold">$12,850.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                        {/* Recent Transactions */}
                        <div className="lg:col-span-2 p-6 rounded-3xl bg-[#1c1e24] border border-white/5">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-bold">Recent Transactions</h3>
                                <button className="text-sm text-rose-400 hover:text-rose-300">See all</button>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { name: "Spotify Premium", date: "Jan 12, 2024", amount: "-$14.99", icon: "🎵", status: "Completed" },
                                    { name: "Apple Store", date: "Jan 10, 2024", amount: "-$249.00", icon: "🍎", status: "Processing" },
                                    { name: "Design Assets", date: "Jan 08, 2024", amount: "-$49.50", icon: "🎨", status: "Completed" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{item.name}</p>
                                                <p className="text-xs text-gray-500">{item.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-medium">{item.amount}</p>
                                            <p className={`text-xs ${item.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>{item.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="p-6 rounded-3xl bg-[#1c1e24] border border-white/5">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-bold">Categories</h3>
                                <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"/> Services</span>
                                        <span className="text-white">$450</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-blue-500 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-400"/> Shopping</span>
                                        <span className="text-white">$1,200</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-1/2 bg-rose-500 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-400"/> Beauty</span>
                                        <span className="text-white">$80</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-1/5 bg-yellow-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
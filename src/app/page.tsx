'use client'
import React from 'react'
import { CheckCircle, Star, Users, TrendingUp, Shield, Zap, Clock, DollarSign, Target, Award, Phone, ArrowRight, ChevronRight, Home as HomeIcon, Gift, CheckSquare, MessageCircle } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js'
import { Bar, Pie, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
)

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden pb-16 md:pb-0">
      {/* Header */}
      <header className="bg-brand-dark-blue text-white py-4 sticky top-0 z-50 shadow-lg backdrop-blur-md">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in">
              Super Seven Distribution
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#benefits" className="text-gray-200 hover:text-brand-orange transition-colors duration-300 font-medium">
                Benefits
              </a>
              <a href="#features" className="text-gray-200 hover:text-brand-orange transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#proof" className="text-gray-200 hover:text-brand-orange transition-colors duration-300 font-medium">
                Proof
              </a>
              <a href="#pricing" className="text-gray-200 hover:text-brand-orange transition-colors duration-300 font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-200 hover:text-brand-orange transition-colors duration-300 font-medium">
                Contact
              </a>
            </nav>
            
            {/* Desktop CTA */}
            <button className="hidden md:flex btn-secondary animate-fade-in">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            
            {/* Mobile CTA */}
            <button className="md:hidden btn-secondary text-sm px-4 py-2">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden w-full">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg">
          <div className="absolute inset-0 pattern-bg opacity-30"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-20" style={{animationDelay: '0s'}}>💤</div>
          <div className="absolute top-40 right-20 text-3xl animate-float opacity-15" style={{animationDelay: '2s'}}>😴</div>
          <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-10" style={{animationDelay: '4s'}}>🛏️</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-20" style={{animationDelay: '1s'}}>💤</div>
          <div className="absolute top-60 left-1/4 text-2xl animate-float opacity-15" style={{animationDelay: '3s'}}>🌙</div>
          <div className="absolute top-80 right-1/3 text-4xl animate-float opacity-10" style={{animationDelay: '5s'}}>😴</div>
        </div>

        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 text-white min-h-[60vh]">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-up leading-tight max-w-2xl md:max-w-3xl lg:max-w-none mx-auto lg:mx-0">
              Most Pharmacies Are Missing Out on{' '}
              <span className="relative inline-block">
                <span className="text-brand-orange">$1K/Month</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-orange rounded-full opacity-60"></div>
              </span>{' '}
              in Passive Revenue
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl mb-6 max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 animate-slide-in-up opacity-90 leading-relaxed">
              Here's how Pharmacists across North America are turning{' '}
              <span className="relative inline-block font-bold text-brand-orange">
                2 feet of shelf space
                <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-brand-orange rounded-full"></div>
              </span>{' '}
              into a sleep wellness station that sells itself.
            </div>
            <p className="text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-in-up opacity-80">
              And also helps customers finally get a good night's sleep.
            </p>

            {/* Trusted By Banner */}
            <div className="mt-6 md:mt-10 animate-slide-in-up w-full flex-col justify-center">
              <p className="text-sm font-semibold text-center lg:text-left mb-4">TRUSTED BY PHARMACIES ACROSS NORTH AMERICA</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-10 w-full max-w-xl mx-auto lg:mx-0 py-2">
                <img src="/dm-pharma-logo.png" alt="Dorwin Medical" className="h-10 w-auto object-contain hover:grayscale transition duration-300" />
                <img src="/family-pharmacy-logo.png" alt="Family Pharmacy" className="h-10 w-auto object-contain hover:grayscale transition duration-300" />
                <img src="/health-plus-pharmacy-logo.png" alt="Health Plus" className="h-10 w-auto object-contain hover:grayscale transition duration-300" />
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-slide-in-up mt-8 md:mt-12">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-brand-orange rounded-3xl transform rotate-1 scale-105 opacity-20"></div>
                <button className="relative bg-brand-orange text-brand-dark-blue text-lg md:text-xl lg:text-2xl font-bold py-5 px-8 md:py-6 md:px-12 rounded-3xl shadow-2xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl">
                  <Phone className="inline mr-3 w-6 h-6" />
                  Book Free Discovery Call
                  <ArrowRight className="inline ml-3 w-6 h-6" />
                </button>
              </div>
              <p className="text-xs md:text-sm mt-6 opacity-80 flex items-center justify-center lg:justify-start">
                <Clock className="w-4 h-4 mr-2 text-brand-orange" />
                🔥 Limited spots available in your area - Next call in 15 minutes
              </p>
            </div>
          </div>

          {/* Right Column - CPAP Station Image */}
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative animate-slide-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-3xl blur-2xl transform scale-110"></div>
              <div className="relative">
                <img 
                  src="/product/Cpap-Station-without-bg.png" 
                  alt="CPAP Station Display" 
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-brand-dark-blue animate-slide-in-up">
              Sleep apnea isn't slowing down and pharmacies stocking CPAP stations are cashing in fast.
            </h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-8 text-brand-dark-blue animate-slide-in-up">
              This is what customers are saying right now:
            </h4>
            <div className="flex justify-center items-center gap-2 animate-slide-in-up">
              <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-brand-orange rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-brand-dark-blue rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-up">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm mb-2">"My partner's snoring is driving me insane."</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-up">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm mb-2">"I haven't slept in the same bed as my husband in 6 months."</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in-up">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm mb-2">"I wake up 8 times a night and I don't even notice it anymore."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Professional Design */}
      <section className="section-padding bg-brand-dark-blue text-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 text-3xl animate-float" style={{animationDelay: '0s'}}>💤</div>
          <div className="absolute top-40 right-20 text-2xl animate-float" style={{animationDelay: '2s'}}>😴</div>
          <div className="absolute bottom-40 left-20 text-4xl animate-float" style={{animationDelay: '4s'}}>🛏️</div>
          <div className="absolute bottom-20 right-10 text-2xl animate-float" style={{animationDelay: '1s'}}>💤</div>
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-up text-white drop-shadow-lg leading-tight">
              The Sleep Apnea Crisis in
              <span className="block text-brand-orange">Canada</span>
          </h3>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Here are some interesting facts most people don't know about the problem:
            </p>
              </div>

          {/* Enhanced Statistics Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Interactive Sleep Apnea Growth Chart */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-white">Sleep Apnea Growth</h4>
                  <div className="bg-brand-orange/20 px-3 py-1 rounded-full">
                    <span className="text-brand-orange text-sm font-semibold">2015-2024</span>
            </div>
              </div>
                <p className="text-white/70 text-lg">Tracking the alarming rise in sleep apnea cases across Canada</p>
            </div>
              
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <Line
                    data={{
                      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                      datasets: [
                        {
                          label: 'Total Sleep Apnea Cases (Millions)',
                          data: [3.8, 4.0, 4.2, 4.5, 4.8, 5.0, 5.1, 5.2, 5.3, 5.4],
                          borderColor: '#3bbcef',
                          backgroundColor: 'rgba(59, 188, 239, 0.1)',
                          borderWidth: 3,
                          fill: true,
                          tension: 0.4,
                          pointRadius: 6,
                          pointHoverRadius: 8,
                          pointBackgroundColor: '#3bbcef',
                          pointBorderColor: '#ffffff',
                          pointBorderWidth: 2,
                          pointHoverBackgroundColor: '#fead01',
                          pointHoverBorderColor: '#ffffff',
                        },
                        {
                          label: 'Diagnosed Cases (Millions)',
                          data: [0.8, 0.9, 1.0, 1.1, 1.1, 1.0, 1.0, 1.1, 1.1, 1.1],
                          borderColor: '#fead01',
                          backgroundColor: 'rgba(254, 173, 1, 0.1)',
                          borderWidth: 3,
                          fill: true,
                          tension: 0.4,
                          pointRadius: 6,
                          pointHoverRadius: 8,
                          pointBackgroundColor: '#fead01',
                          pointBorderColor: '#ffffff',
                          pointBorderWidth: 2,
                          pointHoverBackgroundColor: '#3bbcef',
                          pointHoverBorderColor: '#ffffff',
                        },
                        {
                          label: 'Undiagnosed Cases (Millions)',
                          data: [3.0, 3.1, 3.2, 3.4, 3.7, 4.0, 4.1, 4.1, 4.2, 4.3],
                          borderColor: '#ff6384',
                          backgroundColor: 'rgba(255, 99, 132, 0.1)',
                          borderWidth: 3,
                          fill: true,
                          tension: 0.4,
                          pointRadius: 6,
                          pointHoverRadius: 8,
                          pointBackgroundColor: '#ff6384',
                          pointBorderColor: '#ffffff',
                          pointBorderWidth: 2,
                          pointHoverBackgroundColor: '#fead01',
                          pointHoverBorderColor: '#ffffff',
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      interaction: {
                        mode: 'index',
                        intersect: false,
                      },
                      plugins: {
                        legend: {
                          display: true,
                          position: 'top',
                          labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                              size: 12,
                              weight: 'bold',
                            },
                            color: '#333',
                            padding: 15,
                          },
                        },
                        tooltip: {
                          enabled: true,
                          backgroundColor: 'rgba(0, 0, 0, 0.9)',
                          titleColor: '#fead01',
                          bodyColor: '#ffffff',
                          borderColor: '#3bbcef',
                          borderWidth: 2,
                          titleFont: {
                            size: 14,
                            weight: 'bold',
                          },
                          bodyFont: {
                            size: 13,
                          },
                          padding: 12,
                          cornerRadius: 8,
                          displayColors: true,
                          callbacks: {
                            title: function(context) {
                              return `Year: ${context[0].label}`;
                            },
                            label: function(context) {
                              return `${context.dataset.label}: ${context.parsed.y}M Canadians`;
                            },
                            afterBody: function(context) {
                              if (context[0].label === '2024') {
                                return ['', '🚨 5.4M Canadians now affected!', '📈 Growing trend continues'];
                              }
                              return '';
                            }
                          }
                        },
                      },
                      scales: {
                        x: {
                          display: true,
                          grid: {
                            display: false,
                          },
                          ticks: {
                            color: '#666',
                            font: {
                              size: 11,
                              weight: 'bold',
                            },
                          },
                          title: {
                            display: true,
                            text: 'Year',
                            color: '#333',
                            font: {
                              size: 12,
                              weight: 'bold',
                            },
                          },
                        },
                        y: {
                          display: true,
                          grid: {
                            color: 'rgba(0,0,0,0.1)',
                            lineWidth: 1,
                          },
                          ticks: {
                            color: '#666',
                            font: {
                              size: 11,
                              weight: 'bold',
                            },
                            callback: function(value) {
                              return value + 'M';
                            },
                          },
                          title: {
                            display: true,
                            text: 'Canadians (Millions)',
                            color: '#333',
                            font: {
                              size: 12,
                              weight: 'bold',
                            },
                          },
                          min: 0,
                          max: 6,
                        },
                      },
                      elements: {
                        line: {
                          borderJoinStyle: 'round',
                          borderCapStyle: 'round',
                        },
                      },
                      onHover: (event: any, activeElements: any[]) => {
                        if (event.native && event.native.target) {
                          (event.native.target as HTMLElement).style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
                        }
                      },
                    }}
                                         height={280}
                   />
                 </div>
                 
                 {/* Key Statistic Highlight */}
                 <div className="mt-6 text-center">
                   <div className="inline-flex items-center bg-brand-orange/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-brand-orange/30">
                     <div className="text-4xl md:text-5xl font-bold text-brand-orange mr-4">5.4M</div>
                     <div className="text-left">
                       <div className="text-white font-semibold text-lg">Canadians Affected</div>
                       <div className="text-white/70 text-sm">As of 2024</div>
                     </div>
                   </div>
                 </div>
               </div>

                                {/* 80% Undiagnosed Card */}
                <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group flex flex-col items-center h-full relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5"></div>
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl"></div>

                    {/* Icon and Title Section */}
                    <div className="flex flex-col items-center mb-8 relative">
                      <div className="relative text-center">
                        <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent mb-3 relative z-10">
                          Hidden Crisis
                          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </h4>
                        <p className="text-lg font-medium bg-gradient-to-r from-white/70 to-white/50 bg-clip-text text-transparent mt-2">Most cases go undetected</p>
                      </div>
                    </div>

                    {/* Donut Chart Section */}
                    <div className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 mb-8 w-full border border-white/5 relative group-hover:border-white/10 transition-colors duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-blue/5 rounded-xl"></div>
                      <div className="relative w-full aspect-square max-w-[240px] mx-auto">
                        <Pie
                          data={{
                            labels: ['Undiagnosed', 'Diagnosed'],
                            datasets: [
                              {
                                data: [80, 20],
                                backgroundColor: [
                                  'rgba(255, 99, 132, 0.9)',
                                  'rgba(254, 173, 1, 0.9)'
                                ],
                                borderColor: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.1)'],
                                borderWidth: 2,
                                hoverBackgroundColor: [
                                  'rgba(255, 99, 132, 1)',
                                  'rgba(254, 173, 1, 1)'
                                ],
                                hoverBorderColor: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)'],
                                hoverBorderWidth: 4,
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                              legend: {
                                display: false,
                              },
                              tooltip: {
                                enabled: true,
                                backgroundColor: 'rgba(0,0,0,0.95)',
                                titleColor: '#fead01',
                                bodyColor: '#ffffff',
                                padding: 12,
                                cornerRadius: 8,
                                displayColors: false,
                                titleFont: {
                                  size: 14,
                                  weight: 'bold',
                                },
                                bodyFont: {
                                  size: 13,
                                },
                                callbacks: {
                                  label: function(context) {
                                    return `${context.label}: ${context.parsed}%`;
                                  }
                                }
                              },
                            },
                            cutout: '75%',
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-5xl font-bold bg-gradient-to-r from-brand-orange via-white to-brand-blue bg-clip-text text-transparent mb-1">80%</div>
                          <div className="text-sm font-medium text-white/90">Undiagnosed</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div className="text-center mt-auto relative group-hover:transform group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-brand-blue/10 rounded-xl blur-xl"></div>
                      <div className="relative">
                        <div className="text-4xl font-bold bg-gradient-to-r from-brand-orange to-brand-blue bg-clip-text text-transparent mb-2">4.3M</div>
                        <div className="text-base font-medium text-white/80">
                          Canadians don't know<br />they have sleep apnea
                        </div>
                      </div>
                    </div>
                </div>
               </div>
             </div>
             
             {/* Call to Action */}
             <div className="text-center mt-16">
               <div className="inline-block bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                 <h4 className="text-2xl font-bold text-white mb-4">Your pharmacy can be part of the solution</h4>
                 <p className="text-white/80 text-lg mb-6 max-w-2xl">
                   Help your community while building a profitable revenue stream
                 </p>
                 <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                   <div className="flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2 text-brand-orange" />
                     High-margin products
                   </div>
                   <div className="flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2 text-brand-orange" />
                     Growing demand
                   </div>
                   <div className="flex items-center">
                     <CheckCircle className="w-4 h-4 mr-2 text-brand-orange" />
                     Proven results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-brand-dark-blue animate-slide-in-up">
              Sleep apnea isn't just snoring.
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card animate-slide-in-left">
                <div className="text-4xl mb-4">💔</div>
                <h4 className="text-xl font-bold mb-2 text-brand-dark-blue">Broken Intimacy</h4>
                <p className="text-gray-600">Couples sleeping apart, relationships strained</p>
              </div>
              <div className="card animate-slide-in-up">
                <div className="text-4xl mb-4">😴</div>
                <h4 className="text-xl font-bold mb-2 text-brand-dark-blue">Exhausted Mornings</h4>
                <p className="text-gray-600">Waking up tired, no energy for daily life</p>
              </div>
              <div className="card animate-slide-in-right">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-xl font-bold mb-2 text-brand-dark-blue">Searching for Solutions</h4>
                <p className="text-gray-600">Customers looking everywhere except your store</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-orange rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <p className="text-3xl md:text-4xl font-bold text-gradient animate-slide-in-up">
                  Until now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-brand-dark-blue animate-slide-in-up">
              What if your pharmacy had a{' '}
              <span className="text-gradient-orange">plug-and-play station?</span>
            </h3>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 animate-slide-in-up">
              Then, you would be the local pharmacist that:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-[#fead01] hover:bg-brand-orange/80 transition-all duration-300 animate-slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-[#105f7f] rounded-full flex items-center justify-center">
                <CheckCircle className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-dark-blue">Helped couples sleep better together</h4>
                <p className="text-white">Restore intimacy and strengthen relationships</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-[#105f7f] hover:bg-brand-dark-blue/80 transition-all duration-300 animate-slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-[#fead01] rounded-full flex items-center justify-center">
                <Users className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-orange">Built trust and loyalty from customers</h4>
                <p className="text-white">Become the go-to health solution provider</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-[#105f7f] hover:bg-brand-dark-blue/80 transition-all duration-300 animate-slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-[#fead01] rounded-full flex items-center justify-center">
                <Target className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-orange">Sold products people actually asked about</h4>
                <p className="text-white">Meet existing demand instead of creating it</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-[#fead01] hover:bg-brand-orange/80 transition-all duration-300 animate-slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-[#105f7f] rounded-full flex items-center justify-center">
                <DollarSign className="text-white w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-dark-blue">Created $1K+ per month in pure, recurring profit</h4>
                <p className="text-white">Passive income stream with high margins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-brand-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-slide-in-up">
              And now with help from Super Seven CPAP Stations,{' '}
              <span className="text-brand-orange">you can and we've made it frictionless:</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card animate-slide-in-left">
              <div className="text-5xl mb-6">🧾</div>
              <h4 className="text-xl font-bold mb-4">No upfront inventory</h4>
              <p className="text-gray-200 leading-relaxed">Start selling without the financial risk</p>
              <div className="mt-4 flex items-center text-brand-orange">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">Risk-free start</span>
              </div>
            </div>
            <div className="feature-card animate-slide-in-up">
              <div className="text-5xl mb-6">💡</div>
              <h4 className="text-xl font-bold mb-4">$200/month in geo-targeted ads</h4>
              <p className="text-gray-200 leading-relaxed">We run them for you</p>
              <div className="mt-4 flex items-center text-brand-orange">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm">Managed marketing</span>
              </div>
            </div>
            <div className="feature-card animate-slide-in-right">
              <div className="text-5xl mb-6">🔁</div>
              <h4 className="text-xl font-bold mb-4">Recurring revenue</h4>
              <p className="text-gray-200 leading-relaxed">From high-margin accessories</p>
              <div className="mt-4 flex items-center text-brand-orange">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="text-sm">Repeat customers</span>
              </div>
            </div>
            <div className="feature-card animate-slide-in-left">
              <div className="text-5xl mb-6">🛠️</div>
              <h4 className="text-xl font-bold mb-4">Full setup included</h4>
              <p className="text-gray-200 leading-relaxed">Signage and sales scripts included</p>
              <div className="mt-4 flex items-center text-brand-orange">
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm">Plug & play</span>
              </div>
            </div>
            <div className="feature-card animate-slide-in-up">
              <div className="text-5xl mb-6">🛡️</div>
              <h4 className="text-xl font-bold mb-4">60-day return guarantee</h4>
              <p className="text-gray-200 leading-relaxed">If it doesn't sell, send it back</p>
              <div className="mt-4 flex items-center text-brand-orange">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm">Money back guarantee</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 ">
              <p className="text-gray-200 leading-relaxed text-2xl font-bold ">You don't need more SKUs.</p>
              <p className="text-gray-200 leading-relaxed text-2xl font-bold">You need smart ones that move on their own.</p>
            </div>
        </div>
      </section>
      {/* Proof Section */}
      <section id="proof" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-up text-brand-dark-blue leading-tight">
              Proof from <span className="text-brand-orange">Pharmacies</span>
            </h3>
          </div>
          
          {/* Main Testimonial */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-blue/5"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Pharmacy Logo/Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-blue rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <img src="/dm-pharma-logo.png" alt="Dorwin Medical Pharmacy" className="w-16 h-16 object-contain rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-brand-orange fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-4 leading-relaxed">
                        "Within 2 weeks of installing, we sold out of our first order. Customers were asking before we even promoted it."
                      </blockquote>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-brand-dark-blue">Dorwin Medical Pharmacy</p>
                        <p className="text-lg text-gray-600">Windsor, ON</p>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-brand-dark-blue p-4 rounded-full">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reviews & Stats Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Customer Reviews */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <h4 className="text-xl font-bold text-brand-dark-blue">
                  Customer Reviews
                </h4>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-brand-orange hover:border-brand-dark-blue transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 leading-relaxed">"Worked very well with my ResMed."</p>
                      <p className="text-xs text-gray-500 mt-2 font-medium">— Betty</p>
                    </div>
                    <div className="flex space-x-1 ml-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-brand-orange hover:border-brand-dark-blue transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 leading-relaxed">"Same quality at half the price."</p>
                      <p className="text-xs text-gray-500 mt-2 font-medium">— Mark</p>
                    </div>
                    <div className="flex space-x-1 ml-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-brand-orange hover:border-brand-dark-blue transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 leading-relaxed">"Positive fit and comfort. A+."</p>
                      <p className="text-xs text-gray-500 mt-2 font-medium">— Mike</p>
                    </div>
                    <div className="flex space-x-1 ml-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <h4 className="text-xl font-bold text-brand-dark-blue">
                  Key Statistics
                </h4>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-orange">100+</div>
                        <p className="text-sm text-gray-600 font-medium">Pharmacies across North America</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-orange">400%</div>
                        <p className="text-sm text-gray-600 font-medium">Sleep health demand growth</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-brand-orange" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-orange">97%</div>
                        <p className="text-sm text-gray-600 font-medium">Retailer reorder rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Market Ready Section */}
      <section className="section-padding gradient-bg-orange text-brand-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-in-up">
              And here's the thing:
            </h3>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed animate-slide-in-up">
              You don't need to educate the market, it's already{' '}
              <span className="font-bold">begging for the solution.</span>
            </p>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-dark-blue rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <p className="text-3xl md:text-4xl font-bold text-brand-dark-blue animate-slide-in-up">
                  You just need to stock it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark-blue animate-slide-in-up">
              Who is this for?
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-orange mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl mb-12 text-center text-gray-600 animate-slide-in-up">
              If you're a pharmacist who:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card text-center animate-slide-in-left">
                <div className="text-5xl mb-4">📈</div>
                <h4 className="text-xl font-bold mb-4 text-brand-dark-blue">Stay Ahead</h4>
                <p className="text-gray-600">Wants to stay ahead of retail trends</p>
              </div>
              <div className="card text-center animate-slide-in-up">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-4 text-brand-dark-blue">More Revenue</h4>
                <p className="text-gray-600">Wants more high-margin, low-effort revenue</p>
              </div>
              <div className="card text-center animate-slide-in-right">
                <div className="text-5xl mb-4">🏥</div>
                <h4 className="text-xl font-bold mb-4 text-brand-dark-blue">Serve Better</h4>
                <p className="text-gray-600">Wants to serve your community better (without more overhead)</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-orange rounded-3xl transform -rotate-1"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <p className="text-2xl md:text-3xl font-bold text-gradient animate-slide-in-up">
                    Then this is for you.
                  </p>
                </div>
              </div>
              <p className="text-lg mt-8 text-gray-600 animate-slide-in-up">
                Whether you're an independent owner, part of a local chain, or managing multiple sites —{' '}
                <span className="font-bold">this fits into any layout</span>, and works whether you're selling 5 accessories a week or 50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark-blue animate-slide-in-up">
              What you get
            </h3>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 animate-slide-in-up">
              When you sign up, here's what you receive within{' '}
              <span className="font-bold text-brand-orange">3–4 business days:</span>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {[
              { icon: '🏪', title: 'A sleek, compact CPAP station', subtitle: '(zero assembly)' },
              { icon: '🎒', title: 'Starter kit', subtitle: 'masks, headgear, filters, cushions' },
              { icon: '🏪', title: 'Shelf talkers, posters, in-store signage', subtitle: 'Professional marketing materials' },
              { icon: '📚', title: 'Access to our full Marketing Library', subtitle: 'captions, videos, images' },
              { icon: '📱', title: '$200/month local ad campaign', subtitle: '(paid by us!)' },
              { icon: '🎓', title: 'Private sales training & onboarding guide', subtitle: 'Expert support included' }
            ].map((item, index) => (
              <div key={index} className={`flex items-start space-x-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-dark-blue rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-dark-blue">{item.title}</h4>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
                <CheckCircle className="text-green-500 w-6 h-6 mt-2" />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-orange rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-4 animate-slide-in-up">
                  Everything is plug-and-play.
                </p>
                <p className="text-lg text-gray-600 animate-slide-in-up">
                  You don't lift a finger — we've done the heavy lifting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section id="pricing" className="section-padding bg-brand-dark-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 animate-slide-in-up">
              Still on the <span className="text-brand-orange">fence?</span>
            </h3>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "But what if no one buys?",
                answer: "They're already buying… just not from you.",
                detail: "Amazon, sketchy online stores, sleep clinics — and they trust YOU more."
              },
              {
                question: "What if I don't have space?",
                answer: "You only need 2 feet of shelf space.",
                detail: "Many of our partners tuck the display beside checkout or near wellness."
              },
              {
                question: "What if my staff doesn't know what to say?",
                answer: "We include ready-to-use sales scripts + training video.",
                detail: "No hard selling. These products sell themselves."
              },
              {
                question: "What's the profit margin?",
                answer: "Typical breakdown:",
                detail: "🟢 $29 cost → $75 retail (you control pricing)\nThat's over 100% markup — plus repeat sales every 1–3 months."
              }
            ].map((item, index) => (
              <div key={index} className={`feature-card ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}>
                <h4 className="font-bold mb-4 text-brand-orange text-xl">"{item.question}"</h4>
                <p className="mb-4 text-lg font-semibold">{item.answer}</p>
                <p className="text-gray-200 leading-relaxed whitespace-pre-line">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="section-padding gradient-bg-orange text-brand-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-in-up">
              🏁 NEXT STEPS
            </h3>
            <p className="text-xl md:text-2xl mb-8 animate-slide-in-up">
              We only onboard a{' '}
              <span className="font-bold">limited number of pharmacies per postal region</span>{' '}
              to avoid local overlap.
            </p>
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-brand-dark-blue rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <p className="text-2xl md:text-3xl font-bold text-brand-dark-blue animate-slide-in-up">
                  If you're seeing this — you're still early.
                </p>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-6 animate-float">📞</div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-brand-dark-blue">
                  BOOK A FREE 15-MIN DISCOVERY CALL
                </h4>
                <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-2xl mx-auto">
                  See exactly how other pharmacies are earning $1K+/month without lifting a finger.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                  All you have to do is talk with our team and get all your questions answered — no pressure.
                </p>
                <button className="btn-primary text-2xl py-6 px-12 rounded-2xl shadow-2xl animate-pulse-slow">
                  <Phone className="inline mr-3 w-6 h-6" />
                  Book Free Discovery Call
                  <ArrowRight className="inline ml-3 w-6 h-6" />
                </button>
                <p className="text-sm mt-6 text-gray-600">
                  ⏱️ Average call duration: 12 minutes | 🔥 Next available: Today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-bg"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-in-up">
              CPAP isn't a maybe anymore.{' '}
              <span className="text-brand-orange">It's a must.</span>
            </h3>
            <p className="text-xl md:text-2xl mb-8 animate-slide-in-up">
              Your customers are searching for sleep.
            </p>
            <p className="text-xl md:text-2xl mb-12 animate-slide-in-up">
              Be the one who helps them get it and{' '}
              <span className="font-bold text-brand-orange">grow your pharmacy</span> while you're at it.
            </p>
            <div className="space-y-6 mb-12 animate-slide-in-up">
              <div className="flex items-center justify-center space-x-4">
                <Clock className="w-8 h-8 text-brand-orange animate-pulse" />
                <p className="text-lg md:text-xl">Don't let the store down the road beat you to it.</p>
              </div>
            </div>
            <button className="btn-primary text-2xl py-6 px-12 rounded-2xl shadow-2xl animate-pulse-slow">
              <ChevronRight className="inline mr-3 w-6 h-6" />
              Get Your CPAP Station Set Up Today
              <ArrowRight className="inline ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl lg:text-4xl font-bold mb-4">
                Super Seven <span className="text-brand-orange">CPAP</span> Stations
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Helping pharmacies across North America turn 2 feet of shelf space into $1K+ monthly passive revenue while helping their communities sleep better.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-brand-orange" />
                    <span className="text-sm font-medium">60-Day Guarantee</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-brand-orange text-lg">Quick Links</h4>
              <nav className="space-y-3">
                <a href="#benefits" className="block text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Benefits
                </a>
                <a href="#features" className="block text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Features
                </a>
                <a href="#proof" className="block text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Success Stories
                </a>
                <a href="#pricing" className="block text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Pricing & FAQ
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-brand-orange transition-colors duration-300">
                  Get Started
                </a>
              </nav>
            </div>
            
            {/* Contact & CTA */}
            <div>
              <h4 className="font-bold mb-6 text-brand-orange text-lg">Ready to Start?</h4>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Book your free 15-minute discovery call today
                </p>
                <button className="btn-primary w-full justify-center">
                  <Phone className="inline mr-2 w-4 h-4" />
                  Book Free Call
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    🔥 Limited spots in your area
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-orange mb-1">100+</div>
              <div className="text-sm text-gray-300">Pharmacies Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-orange mb-1">97%</div>
              <div className="text-sm text-gray-300">Reorder Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-orange mb-1">$1K+</div>
              <div className="text-sm text-gray-300">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-orange mb-1">60 Day</div>
              <div className="text-sm text-gray-300">Guarantee</div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">© 2024 Super Seven CPAP Stations. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Contact Support</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-5 h-16">
          <a 
            href="#" 
            className="mobile-nav-item text-brand-orange"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a 
            href="#benefits" 
            className="mobile-nav-item"
          >
            <Gift className="w-5 h-5" />
            <span className="text-xs font-medium">Benefits</span>
          </a>
          <a 
            href="#contact" 
            className="mobile-nav-item relative"
          >
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-brand-orange rounded-full opacity-90"></div>
            <div className="relative z-10 text-white">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs font-medium">Contact</span>
            </div>
          </a>
          <a 
            href="#features" 
            className="mobile-nav-item"
          >
            <CheckSquare className="w-5 h-5" />
            <span className="text-xs font-medium">Features</span>
          </a>
          <a 
            href="#proof" 
            className="mobile-nav-item"
          >
            <Star className="w-5 h-5" />
            <span className="text-xs font-medium">Proof</span>
          </a>
        </div>
      </nav>
    </main>
  )
} 
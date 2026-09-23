import React, { useState } from 'react';
import { LayoutGrid, Terminal, PenTool, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'strategic',
      title: 'Strategic Consulting',
      icon: LayoutGrid,
      shortDesc: 'Comprehensive business strategy, market entry, and financial positioning.',
      details: [
        'Corporate strategy formulation and planning',
        'Market entry and opportunity evaluation',
        'Financial modeling and revenue forecasting',
        'Competitive analysis and positioning',
        'Board advisory and executive alignment'
      ]
    },
    {
      id: 'operations',
      title: 'Operations & Scaling',
      icon: Terminal,
      shortDesc: 'Streamlining business processes and building scalable organizational foundations.',
      details: [
        'Operational workflow optimization',
        'SOP development and team structuring',
        'KPI framework & performance dashboards',
        'Supply chain & vendor optimization',
        'Automation and technology integration'
      ]
    },
    {
      id: 'expansion',
      title: 'Commercial Expansion',
      icon: PenTool,
      shortDesc: 'Cross-border growth, venture building, and high-stakes deal structuring.',
      details: [
        'B2B sales strategy & enterprise deal structure',
        'International market expansion roadmaps',
        'Strategic partnership negotiation',
        'Client retention & account growth strategies',
        'Venture fundraising & pitch preparation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors" id="services">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">Services</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 mt-1">What i offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="bg-white dark:bg-[#161F33] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-72 group"
              >
                <div>
                  <div className="text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1E26] dark:text-white leading-snug">
                    {service.title.split(' ')[0]} <br />
                    {service.title.split(' ').slice(1).join(' ')}
                  </h3>
                </div>

                <button 
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-xs font-semibold text-primary hover:translate-x-1 transition-transform cursor-pointer w-fit"
                  type="button"
                >
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#161F33] border border-gray-100 dark:border-gray-800 rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#1C1E26] dark:text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-xs text-[#687182] dark:text-gray-400 mb-6">
              {selectedService.shortDesc}
            </p>

            <div className="space-y-3">
              {selectedService.details.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#1C1E26] dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="bg-primary text-white text-xs font-medium px-5 py-2.5 rounded-xl hover:bg-[#5042db] transition-colors"
              >
                Inquire Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

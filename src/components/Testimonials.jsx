import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sara Smith',
      role: 'Client',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwp-1yM3w6Qij_IBaVIYAjLob0f3Fhhl7-MO7pC8z6xPZnKbfQF2h1TB6tgkqq1j1YyuKPzXdXBqVZdlR_RaRwisEZkDU9zCy31udmg7RpTOYhjNUHeEMxK_tsx773w1Jky0QbPWnn9PriwePHgKdhTDI71Eq1M-hINYtcgViZ0FNwcL9POg00Eu2gnhWHleirhkQeZWsZcQ8CzY30si5n-fD2lkamsq-xxdl9cXNk57Q6gmXpmwJnmw',
      quote: '"I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."',
      stars: 5
    },
    {
      id: 2,
      name: 'Matt Robinson',
      role: 'Client',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO5IlIizsHUaSBSx8AJlcmjpWJRBWkhW1ua0xO_5DfTg16jA5yB6FCLaHjgk1-srimPozgloK6Te4zpdIZeeL9cqQHDjrGr0b3i5teryxnWsrwUbmZMl62uYins3gjEewDKBe3xc6tGIxsr9tPKNT_mRkzORimso6qsrmOfHNUJO7nfwKGKkglhVUn7o08P8Z8dJsIbfZ-c02eYT9ehZN0Z5oe1NeltOaW2WQ6RHtKYooe_vov0hIXZw',
      quote: '"Outstanding strategic vision and attention to detail. Alex transformed our operations timeline ahead of schedule."',
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">Testimonials</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 font-medium mt-1">My client saying</p>
        </div>

        {/* Testimonial Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-[#161F33] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C1E26] dark:text-white">{item.name}</h4>
                    <p className="text-xs text-[#687182] dark:text-gray-400">{item.role}</p>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex text-amber-400 text-sm space-x-0.5">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#687182] dark:text-gray-300 leading-relaxed italic">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

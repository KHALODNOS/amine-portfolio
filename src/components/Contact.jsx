import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">Contact Me</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 mt-1">Get in touch</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left Contact Info Details */}
          <div className="md:col-span-5 space-y-8">
            {/* Phone Item */}
            <div className="flex items-start space-x-4">
              <div className="text-primary text-2xl mt-0.5">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#1C1E26] dark:text-white">Call Me</h4>
                <p className="text-xs text-[#687182] dark:text-gray-400 mt-0.5">999-777-666</p>
              </div>
            </div>

            {/* Email Item */}
            <div className="flex items-start space-x-4">
              <div className="text-primary text-2xl mt-0.5">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#1C1E26] dark:text-white">Email</h4>
                <p className="text-xs text-[#687182] dark:text-gray-400 mt-0.5">alex@business.com</p>
              </div>
            </div>

            {/* Location Item */}
            <div className="flex items-start space-x-4">
              <div className="text-primary text-2xl mt-0.5">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#1C1E26] dark:text-white">Location</h4>
                <p className="text-xs text-[#687182] dark:text-gray-400 mt-0.5">New York / Paris - Business District</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="bg-[#F4F3FF] dark:bg-[#161F33] p-8 rounded-2xl text-center space-y-3 border border-primary/20 animate-in fade-in duration-300">
                <CheckCircle className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-lg font-bold text-[#1C1E26] dark:text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-[#687182] dark:text-gray-300">Thank you for reaching out. Alex will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Dual Input Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#F4F3FF] dark:bg-[#161F33] rounded-2xl p-3.5 focus-within:ring-2 focus-within:ring-primary/50 transition-all border border-transparent dark:border-gray-800">
                    <label className="block text-[11px] font-medium text-[#687182] dark:text-gray-400" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required 
                      className="w-full bg-transparent border-0 p-0 text-sm text-[#1C1E26] dark:text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#F4F3FF] dark:bg-[#161F33] rounded-2xl p-3.5 focus-within:ring-2 focus-within:ring-primary/50 transition-all border border-transparent dark:border-gray-800">
                    <label className="block text-[11px] font-medium text-[#687182] dark:text-gray-400" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email" 
                      required 
                      className="w-full bg-transparent border-0 p-0 text-sm text-[#1C1E26] dark:text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Project Input Row */}
                <div className="bg-[#F4F3FF] dark:bg-[#161F33] rounded-2xl p-3.5 focus-within:ring-2 focus-within:ring-primary/50 transition-all border border-transparent dark:border-gray-800">
                  <label className="block text-[11px] font-medium text-[#687182] dark:text-gray-400" htmlFor="project">Project</label>
                  <input 
                    type="text" 
                    id="project" 
                    name="project" 
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Subject / Project description" 
                    className="w-full bg-transparent border-0 p-0 text-sm text-[#1C1E26] dark:text-white placeholder-gray-400 focus:ring-0 focus:outline-none"
                  />
                </div>

                {/* Message Textarea */}
                <div className="bg-[#F4F3FF] dark:bg-[#161F33] rounded-2xl p-3.5 focus-within:ring-2 focus-within:ring-primary/50 transition-all border border-transparent dark:border-gray-800">
                  <label className="block text-[11px] font-medium text-[#687182] dark:text-gray-400" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your requirements" 
                    required 
                    className="w-full bg-transparent border-0 p-0 text-sm text-[#1C1E26] dark:text-white placeholder-gray-400 focus:ring-0 focus:outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-[#5042db] text-white text-sm font-medium px-7 py-3.5 rounded-xl shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

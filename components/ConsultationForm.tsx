'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    destination: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: typeof formData.name === 'string' ? formData.name : String(formData.name),
          phone: typeof formData.phone === 'string' ? formData.phone : String(formData.phone),
          email: typeof formData.email === 'string' ? formData.email : String(formData.email),
          service: typeof formData.service === 'string' ? formData.service : String(formData.service),
          destination: typeof formData.destination === 'string' ? formData.destination : String(formData.destination),
          message: typeof formData.message === 'string' ? formData.message : String(formData.message),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setStatus('success');
      setFormData({
        name: '', phone: '', email: '', service: '', destination: '', message: ''
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-wider uppercase mb-2"
            >
              Take The First Step
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Start Your Global Journey Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8"
            >
              Fill out the form below to request a free, no-obligation profile assessment from our expert immigration consultants. We&apos;ll get back to you within 24 hours.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-bold">Free Initial Consultation</p>
                  <p className="text-sm text-gray-400">Detailed discussion of your goals</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-bold">Expert Profile Evaluation</p>
                  <p className="text-sm text-gray-400">Honest assessment of your chances</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden shadow-sm">
              {status === 'success' ? (
                <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-8 text-center z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Request Submitted!</h3>
                  <p className="text-slate-500 mb-8">Thank you for reaching out. One of our expert consultants will contact you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-royal text-white font-bold rounded-xl hover:bg-navy transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-sm font-bold text-royal uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Quick Eligibility Check
                  </h2>
                  <p className="text-slate-500 text-xs">Tailored pathways for your international aspirations.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-slate-800"
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-slate-800"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-slate-800"
                    placeholder="rahul@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Preferred Service</label>
                    <select 
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-slate-800"
                    >
                      <option value="">Select Service</option>
                      <option value="Study Visa">Study Visa</option>
                      <option value="Work Visa">Work Visa</option>
                      <option value="Permanent Residency">Permanent Residency</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Business Visa">Business Visa</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Destination</label>
                    <select 
                      required
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-slate-800"
                    >
                      <option value="">Select Country</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="UK">United Kingdom</option>
                      <option value="USA">United States</option>
                      <option value="Europe">Europe / Schengen</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-slate-400">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-slate-800 resize-none"
                    placeholder="Tell us about your background and goals..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-royal text-white font-bold rounded-xl hover:bg-navy transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Get Free Quote
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

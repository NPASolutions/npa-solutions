import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LoginButton } from "@/components/auth/LoginButton";

const Contact = () => {
  const [borrowerType, setBorrowerType] = useState("");
  const [otherBorrowerType, setOtherBorrowerType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      borrowerType: borrowerType === 'other' ? otherBorrowerType : borrowerType,
      enterpriseName: formData.get('enterpriseName') as string || undefined,
      loanValue: formData.get('loanValue') as string,
      service: formData.get('service') as string,
      query: formData.get('query') as string,
    };

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: contactData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Query Submitted Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
      setBorrowerType("");
      setOtherBorrowerType("");
    } catch (error: any) {
      console.error('Email sending failed:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your query. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-bold text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              NPA Solutions
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Expert Help', href: '/expert-help' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.href} 
                  className={`text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group ${
                    item.href === '/contact' ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    item.href === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <LoginButton />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in
              <span className="bg-theme-gradient bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-slate-600">
              Ready to discuss your legal requirements? Contact our experts today for personalized guidance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required 
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-all duration-300 text-lg bg-white hover:border-slate-300" 
                        placeholder="Enter your full name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-all duration-300 text-lg bg-white hover:border-slate-300" 
                        placeholder="Enter your email address" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      pattern="[+]?[0-9\s\-]+"
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-all duration-300 text-lg bg-white hover:border-slate-300" 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Borrower Type *
                      </label>
                      <select 
                        name="borrowerType"
                        value={borrowerType}
                        onChange={(e) => setBorrowerType(e.target.value)}
                        required
                        className={`w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-all duration-300 text-lg bg-white hover:border-slate-300 ${borrowerType ? 'text-slate-900' : 'text-slate-500'}`}
                      >
                        <option value="">Select borrower type</option>
                        <option value="individual">Individual</option>
                        <option value="msme">MSME</option>
                        <option value="company">Company</option>
                        <option value="llp">LLP</option>
                        <option value="guarantor">Guarantor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Value of Loan *
                      </label>
                      <input 
                        type="text" 
                        name="loanValue"
                        required
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                            e.preventDefault();
                          }
                        }}
                        onInput={(e) => {
                          let value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          if (value) {
                            e.currentTarget.value = new Intl.NumberFormat('en-IN').format(parseInt(value));
                          } else {
                            e.currentTarget.value = '';
                          }
                        }}
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" 
                        placeholder="Enter loan amount (₹)" 
                      />
                    </div>
                  </div>
                  
                  {/* Conditional fields */}
                  {borrowerType === "other" && (
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Specify Borrower Type *
                      </label>
                      <input 
                        type="text" 
                        name="otherBorrowerType"
                        value={otherBorrowerType}
                        onChange={(e) => setOtherBorrowerType(e.target.value)}
                        required
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" 
                        placeholder="Please specify borrower type" 
                      />
                    </div>
                  )}
                  
                  {(borrowerType === "msme" || borrowerType === "company" || borrowerType === "llp") && (
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Name of the Enterprise *
                      </label>
                      <input 
                        type="text" 
                        name="enterpriseName"
                        required
                        className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" 
                        placeholder="Enter enterprise name" 
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Choose the Service *
                    </label>
                    <select 
                      name="service"
                      required
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 transition-all duration-300 text-lg bg-white hover:border-slate-300 text-slate-500"
                    >
                      <option value="">Select a service</option>
                      <option value="360-analysis">360° Analysis</option>
                      <option value="npa-sarfaesi">NPA Resolution & SARFAESI Compliance</option>
                      <option value="drt-litigation">DRT & SARFAESI Litigation</option>
                      <option value="debt-restructuring">Debt Restructuring & MSME Revival</option>
                      <option value="nclt-ibc">NCLT / IBC Litigation & Corporate Insolvency</option>
                      <option value="ots-support">OTS Support & Negotiation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Describe your Legal Query / Requirements *
                    </label>
                    <textarea 
                      name="query"
                      required 
                      rows={6} 
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg resize-none" 
                      placeholder="Please provide detailed information about your legal query, situation, timeline, and specific requirements"
                    ></textarea>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Your Legal Query"}
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
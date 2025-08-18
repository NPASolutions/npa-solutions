import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Scale, FileText, Building, TrendingUp, CheckCircle, ArrowRight, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LoginButton } from "@/components/auth/LoginButton";

const Services = () => {
  const services = [{
    title: "NPA Resolution & SARFAESI Compliance",
    description: "Early Legal Intervention for NPA Stress & SARFAESI Notices",
    fullDescription: `When financial strain sets in, borrowers—whether MSMEs, companies, or individuals—often find themselves racing against time. Under the RBI's Prudential Norms, a loan account is classified as a Non-Performing Asset (NPA) when repayments are overdue for more than 90 days. Once this classification is made, banks may initiate recovery actions under the SARFAESI Act 2002, starting with the issuance of a demand notice under Section 13(2).

From that point, the process may escalate swiftly—leading to symbolic possession under Section 13(4), and in many cases, auction of the secured asset—all without approaching the court. Unfortunately, many borrowers remain unaware that they still have rights at every stage, and that the SARFAESI process must comply with specific procedures laid down in law and governed by regulatory bodies.

The key lies in timing. If the borrower takes steps early—ideally before NPA classification, or soon after receiving the SARFAESI Notice—the matter can often be resolved without litigation. Even if the case has reached possession or auction stages, options still exist, though the strategy and urgency differ.`,
    whyChooseUs: `At NPA Solutions, we understand the practical challenges borrowers face when dealing with default and bank recovery action. Over the years, we've worked closely with MSMEs, companies, LLPs, and individual borrowers, and we've seen one consistent issue: borrowers are blamed without examining whether the bank followed its own obligations under law.

There is a common myth that borrowers are entirely at fault once they default—but banks too are bound by compliance responsibilities under RBI guidelines, SARFAESI procedures, and government-mandated policies. We bring this balance into focus and examine:
• Whether proper process was followed before declaring the account as NPA
• Whether the SARFAESI Notice complies with legal requirements
• Whether any procedural violations or regulatory gaps exist in the bank's action
• Relevant government policies and circulars
• A borrower-centric, practical, and time-sensitive approach`,
    callToAction: "If your loan account is under stress, or you've received a SARFAESI Notice or fear enforcement action—don't delay. Call us today, or Book a virtual or face-to-face consultation to understand your legal position and possible remedies.",
    conclusion: `Being in default doesn't mean being without options. The SARFAESI Act gives banks power—but that power must be exercised within the boundaries of law, procedure, and policy. At NPA Solutions, we help borrowers identify gaps in bank compliance, protect their rights, and work toward resolution—not just defence.

If you're struggling with a Non-Performing Asset, our team is here to help you move forward with confidence, clarity, and legal strength.`,
    icon: Shield,
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    features: ["Early Intervention", "Compliance Audit", "Strategic Defense", "RBI Guidelines Review"],
    popular: true
  }, {
    title: "DRT & SARFAESI Litigation",
    description: "Fight unfair bank actions with simultaneous RDDB Act and SARFAESI proceedings for maximum protection.",
    icon: Scale,
    color: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    gradient: "from-purple-500 to-purple-600",
    features: ["Expert Litigation", "Dual Protection", "Court Representation"],
    popular: true
  }, {
    title: "Debt Restructuring & MSME Revival",
    description: "Revive, restructure & reposition your business for sustainable growth and survival.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    gradient: "from-teal-500 to-teal-600",
    features: ["Business Revival", "Debt Restructuring", "Growth Strategy"],
    popular: false
  }, {
    title: "NCLT / IBC Litigation & Corporate Insolvency",
    description: "Navigate CIRP, liquidation, or resolution proceedings with precision before NCLT.",
    icon: Building,
    color: "bg-gradient-to-br from-slate-50 to-slate-100",
    iconColor: "text-slate-600",
    gradient: "from-slate-500 to-slate-600",
    features: ["NCLT Representation", "Resolution Planning", "Asset Protection"],
    popular: false
  }, {
    title: "OTS Support & Negotiation",
    description: "Achieve favorable One-Time Settlement terms with expert-backed negotiation strategies.",
    icon: FileText,
    color: "bg-gradient-to-br from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
    gradient: "from-sky-500 to-sky-600",
    features: ["Negotiation Support", "Settlement Strategy", "Documentation"],
    popular: false
  }];

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
                    item.href === '/services' ? 'text-blue-600' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    item.href === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
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

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Our Legal & Compliance
              <span className="block bg-theme-gradient bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive legal solutions tailored to your specific financial distress situation with proven expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    {/* Popular badge could be added here */}
                  </div>
                )}
                
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={24} className={`${service.iconColor} sm:w-7 sm:h-7 lg:w-8 lg:h-8`} />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0 sm:w-3.5 sm:h-3.5" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/service/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} 
                      className="inline-flex items-center"
                    >
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                        More <ArrowRight size={14} className="ml-1 sm:ml-2 sm:w-4 sm:h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
import { useState, useEffect } from "react";
import { ChevronDown, Shield, Scale, FileText, Building, TrendingUp, Users, ArrowRight, Menu, X, CheckCircle, Star, Quote, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const {
    scrollYProgress
  } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
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

By intervening at the right time, we help borrowers explore effective alternatives—often without needing to rush to court.`,
    approach: `Our approach is never one-size-fits-all. Each borrower—whether an MSME, individual, or company—comes with unique challenges and strengths. We assess these factors in detail before recommending any strategy.

Wherever possible, we aim to resolve the matter through structured legal correspondence, rather than pushing the borrower into litigation. However, if the borrower comes to us at a later stage—such as after possession notice or before auction—we are fully prepared to defend the case through DRT proceedings, if necessary.

All our strategies are built on:
• RBI compliance checks
• SARFAESI Act procedural scrutiny
• Relevant government policies and circulars
• A borrower-centric, practical, and time-sensitive approach`,
    callToAction: "If your loan account is under stress, or you've received a SARFAESI Notice or fear enforcement action—don't delay. Call us today, or Book a virtual or face-to-face consultation to understand your legal position and possible remedies.",
    conclusion: `Being in default doesn't mean being without options. The SARFAESI Act gives banks power—but that power must be exercised within the boundaries of law, procedure, and policy. At NPA Solutions, we help borrowers identify gaps in bank compliance, protect their rights, and work toward resolution—not just defence.

If you're struggling with a Non-Performing Asset, our team is here to help you move forward with confidence, clarity, and legal strength.`,
    icon: Shield,
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    features: ["Early Intervention", "Compliance Audit", "Strategic Defense", "RBI Guidelines Review"],
    popular: true
  }, {
    title: "DRT & SARFAESI Litigation",
    description: "Fight unfair bank actions with simultaneous RDDB Act and SARFAESI proceedings for maximum protection.",
    icon: Scale,
    color: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    features: ["Expert Litigation", "Dual Protection", "Court Representation"],
    popular: true
  }, {
    title: "OTS Support & Negotiation",
    description: "Achieve favorable One-Time Settlement terms with expert-backed negotiation strategies.",
    icon: FileText,
    color: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
    features: ["Negotiation Support", "Settlement Strategy", "Documentation"],
    popular: false
  }, {
    title: "IBC Litigation & Corporate Insolvency",
    description: "Navigate CIRP, liquidation, or resolution proceedings with precision before NCLT.",
    icon: Building,
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    features: ["NCLT Representation", "Resolution Planning", "Asset Protection"],
    popular: false
  }, {
    title: "Debt Restructuring & MSME Revival",
    description: "Revive, restructure & reposition your business for sustainable growth and survival.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    features: ["Business Revival", "Debt Restructuring", "Growth Strategy"],
    popular: false
  }, {
    title: "ARC & Asset Sale Advisory",
    description: "Seamless support for direct asset sales and ARC-based recovery with optimal value realization.",
    icon: Users,
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    features: ["Asset Valuation", "ARC Negotiations", "Recovery Optimization"],
    popular: false
  }];
  const stats = [{
    value: "500+",
    label: "Cases Resolved",
    icon: CheckCircle
  }, {
    value: "95%",
    label: "Success Rate",
    icon: Star
  }, {
    value: "₹100Cr+",
    label: "Assets Protected",
    icon: Shield
  }, {
    value: "24/7",
    label: "Expert Support",
    icon: Clock
  }];
  const faqs = [{
    question: "What is the SARFAESI Act and how does it affect borrowers?",
    answer: "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) empowers banks and financial institutions to recover their non-performing assets without court intervention. However, borrowers have specific rights including proper notice, representation opportunities, and the right to appeal within 45 days."
  }, {
    question: "What immediate steps should I take after receiving a SARFAESI notice?",
    answer: "Upon receiving a SARFAESI notice, immediately: 1) Verify the notice authenticity and timeline, 2) Gather all loan documentation, 3) Assess your legal position, 4) Consider filing a representation or appeal to DRT within 45 days, 5) Consult with legal experts for strategic guidance."
  }, {
    question: "Can promoters submit resolution plans under IBC proceedings?",
    answer: "Yes, under certain conditions promoters can submit resolution plans, but they must meet specific eligibility criteria under Section 29A of the IBC. The plan must demonstrate viability, adequate funding, and compliance with regulatory requirements."
  }, {
    question: "What's the difference between CIRP and liquidation processes?",
    answer: "CIRP (Corporate Insolvency Resolution Process) aims to revive the company through resolution plans within 180-270 days, while liquidation involves selling assets to pay creditors when revival is not possible. CIRP focuses on business continuity; liquidation on asset realization."
  }, {
    question: "Where and when can I file a challenge to SARFAESI proceedings?",
    answer: "SARFAESI challenges must be filed at the Debt Recovery Tribunal (DRT) having jurisdiction over the area where the security interest is enforced, strictly within 45 days of receiving the enforcement notice. Late filing requires strong grounds for condonation of delay."
  }, {
    question: "What are my options for legal loan restructuring?",
    answer: "Legal loan restructuring options include: OTS negotiations under RBI guidelines, CDR (Corporate Debt Restructuring) schemes, strategic debt restructuring, and asset reconstruction through ARCs, all requiring proper legal documentation and lender approval."
  }];
  const testimonials = [{
    text: "NPA Solutions transformed our SARFAESI crisis into a strategic victory. Their early intervention and expert guidance saved our manufacturing business from asset seizure.",
    author: "Rajesh Kumar",
    role: "Manufacturing Company Owner",
    company: "Kumar Industries",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    text: "Exceptional IBC litigation support. Their deep knowledge of corporate insolvency processes and NCLT procedures delivered outstanding results for our resolution.",
    author: "Priya Sharma",
    role: "Corporate Director",
    company: "Sharma Enterprises",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    text: "The OTS negotiation expertise at NPA Solutions is unmatched. They secured terms that seemed impossible and saved our business millions in the process.",
    author: "Anil Gupta",
    role: "MSME Entrepreneur",
    company: "Gupta Trading Co.",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    text: "Outstanding debt recovery and NPA management services. Their strategic approach and legal expertise helped us navigate complex financial challenges with remarkable success.",
    author: "S Srinivas",
    role: "Financial Consultant",
    company: "Srinivas Advisory",
    rating: 5,
    image: "/placeholder.svg"
  }];
  return <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl" style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-20 blur-3xl" style={{
        transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
      }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="font-bold text-2xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              NPA Solutions
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Resources', 'FAQs', 'Contact'].map((item, index) => <motion.a key={item} initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>)}
            </div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="hidden md:flex">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Get Expert Help
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {['Home', 'Services', 'About', 'Resources', 'FAQs', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors">
                  {item}
                </a>)}
              <Button className="mx-3 my-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full">
                Get Expert Help
              </Button>
            </div>
          </motion.div>}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }}>
            <motion.div initial={{
            scale: 0.8,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="mb-6">
              
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Navigating Financial Distress with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                Strategic Clarity
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering MSMEs, borrowers & entrepreneurs with expert legal guidance through 
              <span className="font-semibold text-slate-800"> SARFAESI, DRT, IBC & financial restructuring</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Phone className="mr-2" size={20} />
                  Schedule Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 rounded-xl text-lg font-semibold">
                  <ArrowRight className="mr-2" size={20} />
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.8 + index * 0.1,
              duration: 0.5
            }} className="text-center">
                  
                  
                  
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>

        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-slate-400" size={32} />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Legal & Compliance
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal solutions tailored to your specific financial distress situation with proven expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            y: -10,
            scale: 1.02
          }} className="relative">
                {service.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    
                  </div>}
                
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group">
                  <div className={`h-2 ${service.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-slate-200 to-slate-300'}`}></div>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={32} className={service.iconColor} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle size={14} className="text-green-500 mr-2" />
                          {feature}
                        </div>)}
                    </div>
                    
                    <Link to={`/service/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="inline-flex items-center">
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        More <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
                Why Choose
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NPA Solutions?
                </span>
              </h3>
              
              <div className="space-y-8">
                {[{
                icon: Shield,
                title: "Deep Legal Insight",
                description: "Comprehensive expertise across SARFAESI, DRT, IBC regulations with 15+ years experience",
                color: "bg-blue-100 text-blue-600"
              }, {
                icon: Clock,
                title: "Strategic Early-Stage Intervention",
                description: "Proactive legal strategies that prevent escalation and minimize business disruption",
                color: "bg-green-100 text-green-600"
              }, {
                icon: Scale,
                title: "Tailored Defense Strategies",
                description: "Customized legal approaches designed for your specific situation and industry",
                color: "bg-purple-100 text-purple-600"
              }, {
                icon: FileText,
                title: "Complete Documentation Support",
                description: "End-to-end documentation assistance and regulatory compliance management",
                color: "bg-orange-100 text-orange-600"
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex items-start space-x-4 group">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="bg-white rounded-3xl p-10 shadow-2xl">
              <h4 className="text-3xl font-bold text-slate-900 mb-10 text-center">Client Success Stories</h4>
              <div className="space-y-10">
                {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: index * 0.2
              }} viewport={{
                once: true
              }} className="relative">
                    <Quote className="absolute -top-2 -left-2 text-blue-200" size={32} />
                    <div className="border-l-4 border-blue-600 pl-6 ml-4">
                      <p className="text-slate-600 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{testimonial.author}</p>
                          <p className="text-sm text-slate-500">{testimonial.role}</p>
                          <p className="text-xs text-slate-400">{testimonial.company}</p>
                        </div>
                        <div className="flex ml-auto">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-current" />)}
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Frequently Asked
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Get expert answers to common questions about financial distress legal matters
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-2xl px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline text-lg py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Act
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Proactively?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait until it's too late. Get expert legal guidance for your financial distress situation today and protect your business interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-xl text-lg font-semibold shadow-xl">
                  <Phone className="mr-2" size={20} />
                  Talk to an Expert
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-xl text-lg font-semibold">
                  <Mail className="mr-2" size={20} />
                  Submit a Query
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h2>
            <p className="text-xl text-slate-600">
              Ready to discuss your legal requirements? Contact our experts today for personalized guidance.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input type="text" required className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input type="email" required className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" placeholder="your.email@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Phone Number
                      </label>
                      <input type="tel" className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">
                        Legal Matter Type
                      </label>
                      <select className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg bg-white">
                        <option value="">Select your legal matter</option>
                        <option value="sarfaesi">SARFAESI Act Issues</option>
                        <option value="ots">One-Time Settlement</option>
                        <option value="drt">DRT Proceedings</option>
                        <option value="ibc">IBC & Corporate Insolvency</option>
                        <option value="restructuring">Debt Restructuring</option>
                        <option value="arc">ARC & Asset Sale</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                      Describe Your Legal Requirements *
                    </label>
                    <textarea required rows={6} className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg resize-none" placeholder="Please provide detailed information about your situation, timeline, and specific legal requirements (minimum 50 characters for better assistance)"></textarea>
                  </div>
                  <motion.div whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }}>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                      Submit Your Legal Query
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="font-bold text-3xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NPA Solutions
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                India's premier legal consultancy specializing in financial distress resolution. We provide strategic legal support for MSMEs, borrowers & entrepreneurs navigating complex financial situations.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Mail size={20} />
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Phone size={20} />
                </div>
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <MapPin size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-8">Quick Links</h4>
              <div className="space-y-4">
                {['Services', 'About Us', 'Case Studies', 'Resources', 'FAQs', 'Contact'].map(link => <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="block text-slate-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300">
                    {link}
                  </a>)}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-8">Contact Info</h4>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <p>support@npasolutions.in</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-400" />
                  <p>Mumbai | Delhi | Bangalore</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-blue-400" />
                  <p>24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-16 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 NPA Solutions. All rights reserved. | 
              <span className="text-slate-300"> Protecting your business interests with expert legal guidance.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
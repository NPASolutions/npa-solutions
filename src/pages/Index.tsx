import { useState, useEffect } from "react";
import { ChevronDown, Shield, Scale, FileText, Building, TrendingUp, Users, ArrowRight, Menu, X, CheckCircle, Star, Quote, Phone, Mail, MapPin, Clock, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import { LoginButton } from "@/components/auth/LoginButton";
import heroBackground from "@/assets/hero-background.jpg";
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
    title: "OTS Support & Negotiation",
    description: "Achieve favorable One-Time Settlement terms with expert-backed negotiation strategies.",
    icon: FileText,
    color: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600",
    gradient: "from-green-500 to-green-600",
    features: ["Negotiation Support", "Settlement Strategy", "Documentation"],
    popular: false
  }, {
    title: "NCLT / IBC Litigation & Corporate Insolvency",
    description: "Navigate CIRP, liquidation, or resolution proceedings with precision before NCLT.",
    icon: Building,
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    gradient: "from-orange-500 to-orange-600",
    features: ["NCLT Representation", "Resolution Planning", "Asset Protection"],
    popular: false
  }, {
    title: "Debt Restructuring & MSME Revival",
    description: "Revive, restructure & reposition your business for sustainable growth and survival.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    iconColor: "text-yellow-600",
    gradient: "from-yellow-500 to-yellow-600",
    features: ["Business Revival", "Debt Restructuring", "Growth Strategy"],
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
    author: "S Srinivas",
    role: "Managing Director",
    company: "SBS Paper Boards",
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
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg border-b border-slate-100">{/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="font-bold text-2xl bg-theme-gradient bg-clip-text text-transparent">
              NPA Solutions
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                {[{
                name: 'Home',
                href: '/'
              }, {
                name: 'Services',
                href: '/services'
              }, {
                name: 'Contact',
                href: '/contact'
              }, {
                name: 'Expert Help',
                href: '/expert-help'
              }].map((item, index) => <motion.div key={item.name} initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }}>
                    <Link to={item.href} className="text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.div>)}
              </div>
            </div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="hidden md:flex">
              <LoginButton />
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
              {[{
            name: 'Home',
            href: '/'
          }, {
            name: 'Services',
            href: '/services'
          }, {
            name: 'Contact',
            href: '/contact'
          }, {
            name: 'Expert Help',
            href: '/expert-help'
          }].map(item => <Link key={item.name} to={item.href} className="block px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors">
                  {item.name}
                </Link>)}
              <div className="mx-3 my-2">
                <LoginButton />
              </div>
            </div>
          </motion.div>}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 drop-shadow-lg">
              Navigating Financial Distress with{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Strategic Clarity
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-md">
              Empowering MSME, Entrepreneurs & Borrowers with Expert Legal guidance through 
              <span className="font-semibold bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 bg-clip-text text-transparent"> SARFAESI, DRT, IBC & Financial Restructuring</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/expert-help">
                  <Button size="lg" className="bg-white/10 backdrop-blur-md border border-blue-300/40 text-white hover:bg-white/20 hover:border-blue-200/60 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
                    <Phone className="mr-2" size={18} />
                    Schedule Consultation
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-2 border-blue-300/40 text-white hover:bg-white/20 hover:border-blue-200/60 px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold w-full sm:w-auto transition-all duration-300">
                    <ArrowRight className="mr-2" size={18} />
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats Section */}
            
          </motion.div>
        </div>

        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* Welcome Article Section */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              In Financial Distress, Timing Changes Everything
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
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
        }} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Tailored Legal & Strategic Support for Borrowers, MSMEs & Companies
                </h3>
              </div>

              <div className="space-y-8 text-slate-700 leading-relaxed">
                <p className="text-xl">
                  When a business enters financial distress, what you do—and when you do it—can determine whether you survive or sink.
                </p>

                <p>
                  At NPA Solutions, we've seen one thing time and again: borrowers lose their best opportunities not because they lack options, but because they act too late.
                </p>

                <p>
                  Whether you're an MSME, a company, or an individual borrower, the earlier you act, the more choices you have. The law offers powerful safeguards and avenues—but only if they're used timely and correctly.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                  <p className="text-blue-900 font-medium">
                    If you're already in default or nearing NPA classification, it's not the end. But just requesting time from the bank without a strategy may cost you the golden window to restructure, revive operations, or negotiate better terms. By the time physical possession is initiated or auction is scheduled, most viable options may have closed.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">What We Help You With</h4>
                  <p className="mb-4">
                    At NPA Solutions, we don't offer generic advice. We help you make strategic legal and compliance decisions based on your actual circumstances—before it's too late.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <p className="mb-4">
                      Whether it's legal response under SARFAESI, resolution planning, debt restructuring, OTS strategy, or borrower representation before DRT/NCLT, our approach is always the same:
                    </p>
                    <p className="text-blue-700 font-semibold">
                      👉 We study the facts. We tailor the strategy. We guide or represent you legally with clarity and focus.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">You Still Have a Window. Don't Let It Close.</h4>
                  <p className="mb-4">
                    If you're facing NPA pressure, don't just wait for notices to pile up. Act with intention. Respond with strategy. And seek guidance that looks at the full picture—from your rights, your financials, to the bank's own conduct.
                  </p>
                  <p className="text-lg font-medium text-slate-900">
                    We're here to assist you at any stage—before the bank escalates or the matter becomes irreversible.
                  </p>
                </div>

                <div className="text-center pt-8 px-4">
                  <Link to="/expert-help">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-xl text-sm md:text-base lg:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xs md:max-w-sm lg:max-w-none lg:w-auto mx-auto">
                      <Phone className="mr-2" size={16} />
                      <span className="block md:hidden">Get Legal Guidance</span>
                      <span className="hidden md:block lg:hidden">Get Strategic Guidance</span>
                      <span className="hidden lg:block">Get Strategic Legal Guidance Now</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
                Why Choose
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NPA Solutions?
                </span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Legal Insight</h3>
                    <p className="text-slate-600 leading-relaxed">Comprehensive expertise across SARFAESI, DRT, IBC regulations with rich experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Strategic Early-Stage Intervention</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Proactive legal strategies that prevent escalation and minimize business disruption
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Scale className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Tailored Defense Strategies</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Customized legal approaches designed for your specific situation and industry
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <FileText className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Complete Documentation Support</h3>
                    <p className="text-slate-600 leading-relaxed">
                      End-to-end documentation assistance and regulatory compliance management
                    </p>
                  </div>
                </div>
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
          }} className="space-y-6">
              {testimonials.slice(0, 4).map((testimonial, index) => <motion.div key={index} initial={{
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
            }} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="flex items-start space-x-3 mb-4">
                    <Quote className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-slate-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                        <p className="text-sm text-slate-400">SBS Paper Boards</p>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
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
                <Link to="/expert-help">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-xl text-lg font-semibold shadow-xl">
                    <Phone className="mr-2" size={20} />
                    Consultation
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-xl text-lg font-semibold shadow-xl">
                    <Mail className="mr-2" size={20} />
                    Submit a Query
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Separator */}
      <div className="bg-slate-900 h-px"></div>

      <Footer />
    </div>;
};
export default Index;
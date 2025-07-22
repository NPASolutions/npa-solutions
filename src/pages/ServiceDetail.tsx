import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, CheckCircle, Shield, Scale, FileText, Building, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
const ServiceDetail = () => {
  const {
    serviceId
  } = useParams();
  const services = {
    "npa-resolution-sarfaesi-compliance": {
      title: "NPA Resolution & SARFAESI Compliance",
      subtitle: "Early Legal Intervention for NPA Stress & SARFAESI Notices",
      icon: Shield,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      gradient: "from-blue-600 to-blue-700",
      buttonGradient: "from-blue-500 to-blue-600",
      features: ["Early Intervention", "Compliance Audit", "Strategic Defense", "RBI Guidelines Review"],
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

If you're struggling with a Non-Performing Asset, our team is here to help you move forward with confidence, clarity, and legal strength.`
    },
    "drt-sarfaesi-litigation": {
      title: "DRT & SARFAESI Litigation",
      subtitle: "Legal Defence & Strategy in DRT & SARFAESI Proceedings",
      icon: Scale,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      gradient: "from-purple-600 to-purple-700",
      buttonGradient: "from-purple-500 to-purple-600",
      features: ["Expert Litigation", "Dual Protection", "Court Representation", "Strategic Defense"],
      fullDescription: `When borrowers face legal action from banks, they are often drawn into proceedings before the Debt Recovery Tribunal (DRT). Under the SARFAESI Act 2002, banks can bypass the courts and directly enforce recovery through SARFAESI proceedings, such as taking physical possession and initiating auction of secured assets. Borrowers, however, have the right to defend themselves by filing a Securitisation Application (SA) before the DRT under Section 17 of the Act.

Simultaneously, banks also initiate Original Applications (OA) under the RDDB Act, 1993 to recover dues through a judicial process. These parallel proceedings require careful strategy, especially when banks overstep legal procedures or when borrower assets are at risk. Timely intervention and legal scrutiny play a critical role in safeguarding borrower rights.`,
      whyChooseUs: `At NPA Solutions, we specialize in handling complex DRT and SARFAESI matters. Our clients—be they individuals, MSMEs, or corporate entities—often approach us at a stage when banks have either taken possession of assets or initiated legal proceedings. We excel in identifying procedural violations, statutory non-compliance under SARFAESI, and opportunities to file Counter Claims in OA proceedings.

Our team ensures that borrowers are not left vulnerable due to lack of awareness or delay. With deep insight into the SARFAESI Act, RDDB Act, RBI norms, and DRT practices, we bring a proactive, rights-based legal approach to every case.`,
      approach: `At NPA Solutions, we recognize that borrowers often face dual pressure: recovery suits (Original Applications) under the RDDB Act and enforcement actions under the SARFAESI Act. Our first step is to carefully assess the stage and legality of SARFAESI proceedings. If a 13(4) Possession Notice has been issued without proper compliance, we help borrowers file a Securitisation Application (SA) before the DRT under Section 17 — to challenge the action and protect their assets.

In parallel, if the bank has filed an OA in DRT, we examine whether there are grounds for a Counter Claim based on damages, illegal recovery measures, or documentation gaps. We guide borrowers—whether individuals, MSMEs, or companies—through each step, ensuring their side is put forward effectively with supporting records and procedural scrutiny.

Our strategic intent is twofold: to stall or reverse flawed SARFAESI actions and to neutralize the OA with a strong defence or justified counterclaim, wherever applicable. Every case is fact-driven, and we tailor our approach to ensure the borrower's rights are protected under law while opening avenues for meaningful resolution.`,
      callToAction: "If you're facing SARFAESI enforcement or DRT proceedings, don't wait for the situation to escalate. Reach out to NPA Solutions for timely legal support, strategy, and compliance assistance.",
      conclusion: `Navigating DRT and SARFAESI actions demands a strong legal understanding, procedural vigilance, and borrower-specific strategy. At NPA Solutions, we stand by borrowers every step of the way—ensuring their voice is heard, their rights are upheld, and their financial future is protected.`
    },
    "ots-support-negotiation": {
      title: "OTS Support & Negotiation",
      subtitle: "Strategic Guidance for Fair & Legally Sound One-Time Settlements",
      icon: FileText,
      color: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      gradient: "from-green-600 to-green-700",
      buttonGradient: "from-green-500 to-green-600",
      features: ["Strategic OTS Guidance", "Legal Review", "Negotiation Leverage", "Fair Settlement Terms"],
      fullDescription: `A One Time Settlement (OTS) is not something a bank readily offers—it's something you earn the right to negotiate. For borrowers under financial distress, especially those facing SARFAESI enforcement or legal notices, the idea of "settling the loan" may seem like a relief. But in reality, OTS is a legal and strategic outcome, not a shortcut.

At NPA Solutions, we help borrowers understand when, why, and how an OTS becomes a real option—and how to avoid rushing into one under pressure without proper leverage.`,
      whyChooseUs: `Most borrowers approach us when restructuring was denied, the loan is declared NPA, or the bank is threatening possession or auction. We understand the urgency—but more importantly, we know how to turn that urgency into opportunity.

Our strength lies in helping you:
• Decide if OTS is suitable for your profile (MSME, individual, or company).
• Understand if the bank has prematurely denied revival or violated process.
• Use the right tools to build legal and negotiation advantage.

Unlike agents who simply "submit" OTS letters, we work to create the conditions where banks are compelled to consider a reasonable settlement—without compromising your future.`,
      approach: `Every borrower's case is different. That's why we never treat OTS as the default option.

We begin with a legal and financial review—whether you're still at the SARFAESI notice stage, facing DRT recovery proceedings, or have received an IBC-related threat. We identify if your case has technical violations, RBI non-compliance, or procedural irregularities—and whether these can be used to open up OTS discussions on better terms.

When the timing is right, we assist in:
• Strategically initiating OTS representations.
• Responding to pressure tactics with well-supported legal positions.
• Avoiding settlements that might weaken your legal standing or future eligibility.

OTS is not always advisable—but when it is, we ensure you enter with clarity, confidence, and control.`,
      callToAction: "Facing pressure to settle? Don't go in blind. Book a face-to-face or virtual consultation with our legal team to assess if an OTS is right for you—factually, financially, and legally. We help you understand your real position and whether better alternatives exist before taking any irreversible step.",
      conclusion: `A One Time Settlement is not about desperation—it's about timing, facts, and leverage. Whether you're dealing with a harsh bank stance or are considering an OTS as a last resort, we'll help you make an informed, strategic move.

At NPA Solutions, we stand with borrowers—not just to close a loan, but to close it right.`
    },
    "ibc-litigation": {
      title: "IBC Litigation & Corporate Insolvency",
      subtitle: "NCLT Proceedings and Resolution Planning",
      icon: Building,
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
      gradient: "from-orange-600 to-orange-700",
      buttonGradient: "from-orange-500 to-orange-600",
      features: ["NCLT Representation", "Resolution Planning", "Asset Protection", "CIRP Support"],
      fullDescription: "Expert guidance through CIRP, liquidation, and resolution proceedings before NCLT.",
      whyChooseUs: "Deep expertise in corporate insolvency processes and NCLT procedures.",
      approach: "Comprehensive approach to IBC proceedings with focus on business revival.",
      callToAction: "Navigate IBC proceedings with confidence through our expert legal support.",
      conclusion: "Professional IBC litigation support for optimal corporate insolvency outcomes."
    },
    "debt-restructuring-msme-revival": {
      title: "Debt Restructuring & MSME Revival",
      subtitle: "Revival-Focused Legal Support for MSMEs & Distressed Borrowers",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-teal-50 to-teal-100",
      iconColor: "text-teal-600",
      gradient: "from-teal-600 to-teal-700",
      buttonGradient: "from-teal-500 to-teal-600",
      features: ["MSME Revival Support", "RBI Framework Compliance", "Strategic Restructuring", "Legal Advocacy"],
      fullDescription: `Financial stress in a business doesn't always mean failure—it often just means timely restructuring is needed. For MSMEs in particular, the Reserve Bank of India (RBI) has issued several guidelines that allow for restructuring of viable accounts without waiting for the account to become an NPA.

Unfortunately, many borrowers either don't know about these schemes, or approach too late—after receiving legal notices or facing recovery proceedings. At NPA Solutions, we help you act before it's too late, with a clear strategy toward revival and compliance-based restructuring.`,
      whyChooseUs: `Unlike general consultants or bank recovery agents, we represent your legal and financial interests as a distressed borrower.

Here's how we're different:
• We assess whether your account was illegally pushed into NPA without offering a proper restructuring route.
• We understand the differences between individual, company, and MSME borrowers—and the benefits each one may claim.
• We act before litigation, using RBI guidelines, policy norms, and compliance leverage to request restructuring or revival.
• We recommend restructuring or OTS only when it's in your long-term interest—not because the bank wants a quick closure.

Whether you're a standard account under pressure, or already facing a SARFAESI demand notice, we help you assess your position and move strategically.`,
      approach: `Every case begins with one critical question: Was restructuring ever considered before marking the loan as NPA?

If not, and if you're a viable MSME borrower, we act immediately to:
• Verify MSME registration (Udyam/Udyog Aadhaar) and status on the date of default.
• Evaluate your loan under the RBI Framework for Resolution of MSME Stress (2023).
• Draft and submit a bank-compliant restructuring proposal supported by legal rights, RBI circulars, and documentation.
• Escalate to higher authorities if banks violate restructuring norms or fail to respond.

If you're already classified as NPA or SARFAESI proceedings have begun, we examine whether restructuring should still have been considered—and use that failure to legally push back and explore revival options or stronger negotiation points.

We also guide you through the choice between debt restructuring and OTS, depending on your repayment ability, asset situation, and overall legal exposure.`,
      callToAction: "Are you under financial stress or facing the risk of being declared NPA? Don't wait for legal notices or recovery agents. You may be entitled to restructuring support—especially if you're an MSME. Book a virtual or in-person consultation today to understand your rights, assess your bank's actions, and explore your options for revival.",
      conclusion: `MSMEs are the backbone of our economy—but in many cases, banks skip over mandatory revival opportunities and rush to enforce recovery.

At NPA Solutions, we ensure your business gets the fair chance it deserves. We stand by your side from early-stage advisory to policy-based legal action—ensuring you don't just respond to recovery, but proactively reclaim control of your financial future.

Let's work together to rebuild—strategically, lawfully, and on your terms.`
    },
    "arc-asset-advisory": {
      title: "ARC & Asset Sale Advisory",
      subtitle: "Asset Recovery and Optimization Solutions",
      icon: Users,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-600",
      gradient: "from-indigo-600 to-indigo-700",
      buttonGradient: "from-indigo-500 to-indigo-600",
      features: ["Asset Valuation", "ARC Negotiations", "Recovery Optimization", "Sale Advisory"],
      fullDescription: "Seamless support for direct asset sales and ARC-based recovery with optimal value realization.",
      whyChooseUs: "Expert guidance in asset reconstruction and recovery optimization strategies.",
      approach: "Strategic approach to asset sales and ARC negotiations for maximum value recovery.",
      callToAction: "Optimize your asset recovery with our expert ARC and asset sale advisory services.",
      conclusion: "Professional asset recovery support for optimal value realization and financial recovery."
    }
  };
  const service = services[serviceId as keyof typeof services];
  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The requested service could not be found.</p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>;
  }
  const ServiceIcon = service.icon;
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl text-slate-900">
              NPA Solutions
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="mr-2" size={16} />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center mb-8 mx-auto`}>
              <ServiceIcon size={40} className={service.iconColor} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>
            
            

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg`}>
                <Phone className="mr-2" size={20} />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold">
                <Mail className="mr-2" size={20} />
                Send Query
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Features */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="text-center mb-12">
                <p className="text-lg text-slate-600 mb-4">
                  Our comprehensive litigation support covers three critical areas:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="outline" className="text-sm px-4 py-2">OA - Original Applications</Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">SA - Securitisation Applications</Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">Counter Claims</Badge>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {service.features.map((feature, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <CheckCircle className={`${service.iconColor} mx-auto mb-3`} size={24} />
                      <p className="text-sm font-medium text-slate-700">{feature}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </motion.div>

            {/* Full Description */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.subtitle}
            </h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                {service.fullDescription}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose NPA Solutions</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                {service.whyChooseUs}
              </div>
            </motion.div>

            {/* Our Approach */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                {service.approach}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className={`bg-gradient-to-r ${service.buttonGradient} rounded-2xl p-8 text-white text-center`}>
              <h2 className="text-3xl font-bold mb-6">Take Action Now</h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">{service.callToAction}</p>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-semibold">
                <Phone className="mr-2" size={20} />
                Contact Us
              </Button>
            </motion.div>

            {/* Conclusion */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.7
          }} className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Moving Forward</h2>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line text-lg mb-8">
                {service.conclusion}
              </div>
              <Link to="/">
                <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50">
                  <ArrowLeft className="mr-2" size={16} />
                  View All Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default ServiceDetail;
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Brain,
  MapPin,
  BarChart,
  Phone,
  Menu,
  X,
  ChevronRight,
  Globe,
  Shield,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Rocket,
  Activity,
  LineChart,
  Zap,
  Network,
  Layers,
  Cpu,
  Database,
  Cloud,
  Server,
  Code,
  Terminal,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitFork,
  GitBranchPlus,
} from "lucide-react";
import { 
  Dashboard,
  Analytics,
  Warning,
  Map,
  Security,
  Speed,
  Hub,
  Scale,
  Verified,
  AutoAwesome
} from "@mui/icons-material";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Circular Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="relative">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-1 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 px-6 py-3">
              <Link href="/" className="px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-50">
                Home
              </Link>
              <Link href="/team" className="px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-50">
                Team
              </Link>
              <Link href="/demos" className="px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-50">
                Demos
              </Link>
              <Link href="/features" className="px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-50">
                Features
              </Link>
              <Link href="/faq" className="px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-50">
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 p-3 text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
              <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                Home
              </Link>
              <Link href="/team" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                Team
              </Link>
              <Link href="/demos" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                Demos
              </Link>
              <Link href="/features" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                Features
              </Link>
              <Link href="/faq" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                FAQ
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="text-center space-y-8 relative z-10">
              <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Upgrade Your Supply Chain with AI Agents
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Deploy intelligent agents that monitor, analyze, and optimize
                your supply chain 24/7
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/20 transition-all rounded-full px-8"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-primary/20 transition-all rounded-full px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AI Supply Chain Dashboard"
                className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Powerful Features</h2>
              <p className="text-xl text-gray-600">
                Everything you need to optimize your supply chain
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Risk Prediction",
                  icon: Warning,
                  image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  features: [
                    "Predict and prevent supply chain disruptions",
                    "Real-time geopolitical and climate risk tracking",
                    "$1.5T annual cost reduction potential"
                  ],
                  marketSize: "$3.48B Supply Chain Risk Management"
                },
                {
                  title: "Interactive Trade Route Mapping",
                  icon: Map,
                  image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  features: [
                    "Customizable trade routes across land, sea, and air",
                    "Intuitive map-first UI with risk modeling",
                    "Collaborative planning tools for teams"
                  ],
                  marketSize: "$8.4B AI in Logistics Market"
                },
                {
                  title: "Comprehensive Analytics",
                  icon: Analytics,
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
                  features: [
                    "Customizable reports and targeted predictions",
                    "Advanced AI models for risk scoring",
                    "Proactive disruption prevention"
                  ],
                  marketSize: "$25.2M SOM by 2026"
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <ul className="space-y-3">
                      {feature.features.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-primary/5 flex items-center justify-center mt-1">
                            <ChevronRight className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-primary">{feature.marketSize}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Advanced Technology Stack</h2>
              <p className="text-xl text-gray-600">
                Built with cutting-edge technologies for maximum performance
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Dashboard, name: "AI Processing", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: Analytics, name: "Data Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: Cloud, name: "Cloud Infrastructure", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: Server, name: "High Availability", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: Code, name: "Modern Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: Terminal, name: "DevOps Ready", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: GitBranch, name: "Version Control", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                { icon: Network, name: "Global Network", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
              ].map((tech, i) => (
                <div key={i} className="text-center group">
                  <div className="relative h-32 w-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-lg" />
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="relative z-10 h-full w-full object-contain p-4 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Flexible AI Solutions for Your Supply Chain
              </h2>
              <p className="text-xl text-gray-600">
                You only pay for the hours your AI agent is active. Start with our free tools or scale with intelligent automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free Tools",
                  price: "$0",
                  description: "Essential tools to optimize your supply chain manually",
                  features: [
                    "Route Visualization",
                    "Compare trade routes by time, cost, and risk",
                    "Tariff Checker",
                    "Check current tariffs using HS code or product name",
                    "Supplier Finder",
                    "Find suppliers and their public contact information"
                  ],
                  cta: "Get Started Free",
                  popular: false
                },
                {
                  title: "Pro Agent",
                  price: "From $29/mo",
                  description: "AI-powered automation with real-time monitoring",
                  features: [
                    "Intelligent Route Optimization",
                    "Real-time shipment tracking and alternative routing",
                    "Automated Tariff Monitoring",
                    "Get alerts when tariffs change for your products",
                    "Bidirectional Translation Agent",
                    "Communicate seamlessly with suppliers in any language",
                    "Personalized Risk Assessment",
                    "AI calculated risk specific to your business needs"
                  ],
                  cta: "Start Pro Trial",
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  description: "Advanced solutions with dedicated support and SLAs",
                  features: [
                    "All Pro features",
                    "Everything in the Pro tier included",
                    "Service Level Agreement",
                    "Guaranteed uptime and performance",
                    "API Integration",
                    "Connect with your existing systems",
                    "Dedicated Account Manager",
                    "Personalized support and consultation"
                  ],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    plan.popular ? 'border-primary' : 'border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-3xl font-bold text-primary mb-4">{plan.price}</p>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className={j % 2 === 0 ? "font-semibold text-gray-900" : "text-sm text-gray-600 ml-4"}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        : "bg-gray-900 hover:bg-gray-800"
                    } text-white shadow-lg hover:shadow-xl transition-all rounded-full`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Can't afford a paid plan yet? Try our voice bot and chat bot for free.</p>
              <p className="text-sm text-gray-500">Coming soon to help you optimize your supply chain at no cost.</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Supply Chain Process & Key Risk Areas
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the end-to-end supply chain and its vulnerabilities
              </p>
            </div>
            
            <div className="space-y-16">
              {/* Process Stages */}
              <div>
                <h3 className="text-2xl font-bold mb-6">1. Process Stages</h3>
                <p className="text-gray-600 mb-4">The end-to-end supply chain is typically divided into five core stages</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { stage: "Suppliers", desc: "Raw-material sourcing and procurement" },
                    { stage: "Logistics", desc: "Transportation of parts/materials to warehouses" },
                    { stage: "Inventory", desc: "Warehousing, storage, and stock management" },
                    { stage: "Manufacturing", desc: "Conversion of parts into finished goods" },
                    { stage: "Customer", desc: "Delivery to and fulfillment for end users" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.stage}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">2. Upstream Risks</h3>
                  <div className="space-y-4">
                    {[
                      { stage: "Suppliers", issues: [{ name: "Price variances", impact: "Budget overruns, margin erosion" }, { name: "Supplier issues", impact: "Quality defects, delayed shipments" }] },
                      { stage: "Logistics", issues: [{ name: "Order delays", impact: "Missed production schedules" }, { name: "Logistic bottlenecks", impact: "Congestion, higher freight costs" }] },
                      { stage: "Inventory", issues: [{ name: "Part stock-outs", impact: "Line stoppages, expedited freight fees" }, { name: "Excess inventory", impact: "Increased holding costs, obsolescence" }] },
                      { stage: "Manufacturing", issues: [{ name: "Schedule conflicts", impact: "Under-or over-utilized capacity" }, { name: "Unplanned downtime", impact: "Yield losses, overtime expenses" }] },
                      { stage: "Customer", issues: [{ name: "Poor OTIF (On-Time In-Full)", impact: "Customer dissatisfaction, penalties" }, { name: "Order cancellations", impact: "Demand-supply mismatch, lost revenue" }] }
                    ].map((section, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{section.stage}</h4>
                        {section.issues.map((issue, j) => (
                          <div key={j} className="ml-4 mb-2">
                            <p className="text-sm font-medium text-primary">{issue.name}</p>
                            <p className="text-sm text-gray-600">{issue.impact}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">3. Summary of Interdependencies</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>• Supplier fluctuations (price & availability) cascade into logistics and inventory, leading to production hiccups.</p>
                    <p>• Logistic bottlenecks increase lead times, forcing either excess inventory or stock-outs.</p>
                    <p>• Inventory imbalances drive schedule conflicts and downtime on the shop floor.</p>
                    <p>• Manufacturing delays and transit issues degrade OTIF, resulting in order cancellations or customer churn.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Ready to Get Started?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/20 transition-all rounded-full px-8"
              >
                Schedule a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-primary/20 transition-all rounded-full px-8"
              >
                Contact Us
              </Button>
            </div>
            <div className="mt-8">
              <Button
                size="lg"
                variant="ghost"
                className="text-gray-600 hover:text-primary rounded-full"
              >
                <Phone className="mr-2 h-5 w-5" />
                (510) 989-5404
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

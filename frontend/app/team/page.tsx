"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Linkedin,
  Twitter,
  Mail,
  Github,
  ChevronRight
} from "lucide-react";

export default function TeamPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const founders = [
    {
      name: "Adam Virani",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      education: "UC Berkeley Haas School Of Business '22",
      experience: "Previously at L'Oreal and Microsoft",
      expertise: ["Business Strategy", "Product Management", "Supply Chain"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Aditya Pattani",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      education: "UC Berkeley College of Computing Data Science and Society, Economics and Data Science '24",
      experience: "Previously at Airbus, Kaiser Permanente, and Payactiv (fintech unicorn)",
      expertise: ["Data Science", "Economics", "AI/ML"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Arihant Choudhary",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      education: "Computer Science and Sustainability '25",
      experience: "Research at Stanford, Berkeley, Intel, Harvard AI labs, World Economic Forum. Previously at Klarity (YC) and Eraser.io",
      expertise: ["Computer Science", "AI Research", "Sustainability"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation (same as home page) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="relative">
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-1 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 px-6 py-3">
              <Link href="/" className="px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-50">
                Home
              </Link>
              <Link href="/team" className="px-4 py-2 text-primary bg-gray-50 transition-colors rounded-full">
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

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 p-3 text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
              <Link href="/" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                Home
              </Link>
              <Link href="/team" className="block px-4 py-2 text-primary bg-gray-50">
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
      <div className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8">
              <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Meet Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're a team of experienced founders and engineers passionate about revolutionizing supply chain management with AI
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Education</h4>
                      <p className="text-sm text-gray-600">{founder.education}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Experience</h4>
                      <p className="text-sm text-gray-600">{founder.experience}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.expertise.map((skill, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/5 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-center space-x-4">
                      <a
                        href={founder.social.linkedin}
                        className="text-gray-400 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={founder.social.twitter}
                        className="text-gray-400 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={founder.social.github}
                        className="text-gray-400 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="mt-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and supply chain innovation
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-primary/20 transition-all rounded-full px-8"
            >
              View Open Positions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
} 
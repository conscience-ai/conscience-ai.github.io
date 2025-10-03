"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Database, Shield, Users, CheckCircle, Star, Calendar, LogIn } from "lucide-react"
import Link from "next/link"

export default function ZataPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FB]">
      {/* Header */}
      <header className="border-b border-[rgba(0,0,0,0.05)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Elegant neural network logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central node */}
                  <circle cx="12" cy="12" r="2.5" fill="white" opacity="0.95"/>
                  
                  {/* Corner nodes */}
                  <circle cx="6" cy="6" r="1.8" fill="white" opacity="0.8"/>
                  <circle cx="18" cy="6" r="1.8" fill="white" opacity="0.8"/>
                  <circle cx="6" cy="18" r="1.8" fill="white" opacity="0.8"/>
                  <circle cx="18" cy="18" r="1.8" fill="white" opacity="0.8"/>
                  
                  {/* Connection lines */}
                  <line x1="7.5" y1="7.5" x2="10" y2="10" stroke="white" strokeWidth="1.2" opacity="0.7"/>
                  <line x1="16.5" y1="7.5" x2="14" y2="10" stroke="white" strokeWidth="1.2" opacity="0.7"/>
                  <line x1="7.5" y1="16.5" x2="10" y2="14" stroke="white" strokeWidth="1.2" opacity="0.7"/>
                  <line x1="16.5" y1="16.5" x2="14" y2="14" stroke="white" strokeWidth="1.2" opacity="0.7"/>
                  
                  {/* Data points */}
                  <circle cx="12" cy="4" r="1.2" fill="white" opacity="0.6"/>
                  <circle cx="20" cy="12" r="1.2" fill="white" opacity="0.6"/>
                  <circle cx="12" cy="20" r="1.2" fill="white" opacity="0.6"/>
                  <circle cx="4" cy="12" r="1.2" fill="white" opacity="0.6"/>
                </svg>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-xl blur-sm opacity-20 -z-10"></div>
              </div>
            </div>
            
            <span className="text-2xl font-bold bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] bg-clip-text text-transparent tracking-tight">
              Zata
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-[#2C3E50] hover:text-[#2E86DE] transition-colors">Services</Link>
            <Link href="#talent" className="text-[#2C3E50] hover:text-[#2E86DE] transition-colors">Talent</Link>
            <Link href="#testimonials" className="text-[#2C3E50] hover:text-[#2E86DE] transition-colors">Testimonials</Link>
            <Button variant="outline" size="sm" className="border-[#2E86DE] text-[#2E86DE] hover:bg-[#2E86DE] hover:text-white"> 
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#ECF0F3] text-[#2C3E50] hover:bg-[#ECF0F3]">
            Frontier Model Acceleration at Scale
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#0A2540] leading-tight">
            World-Class AI Training
            <br />
            <span className="text-[#2E86DE]">Data & Talent</span>
          </h1>
          <p className="text-xl text-[#7F8C8D] mb-8 max-w-2xl mx-auto leading-relaxed">
            We provide top-tier talent, data, and tools to help AI labs improve model performance—and enable enterprises to turn those models into powerful, production-ready systems.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#0A2540] hover:bg-[#1ABC9C] text-white px-8 py-4 text-lg rounded-xl transition-all duration-200"
              onClick={() => window.open('https://calendly.com/1001aditya-g/new-meeting', '_blank')}
            >
              <Brain className="w-5 h-5 mr-2" />
              Create a Labelling Pipeline
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#2E86DE] text-[#2E86DE] hover:bg-[#2E86DE] hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200"
              onClick={() => window.open('https://calendly.com/1001aditya-g/new-meeting', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Start Labelling
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Button 
              variant="ghost" 
              size="lg"
              className="text-[#2E86DE] hover:text-[#1ABC9C] hover:bg-transparent"
              asChild
            >
              <Link href="https://calendly.com/1001aditya-g/new-meeting" target="_blank">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Meeting
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-[#0A2540]">Our Services</h2>
            <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
              We offer world-class RLHF, data generation, model evaluation, safety, and alignment pipelines to accelerate the work of AI labs in developing frontier models.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-[#2E86DE] rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#0A2540]">RLHF Pipelines</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Advanced reinforcement learning from human feedback to align models with human preferences and values.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-[#1ABC9C] rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#0A2540]">Data Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  High-quality synthetic and curated datasets tailored for your specific model training requirements.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-[#27AE60] rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#0A2540]">Model Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Comprehensive testing and benchmarking to ensure your models meet performance and safety standards.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E67E22] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#0A2540]">Safety & Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#7F8C8D]">
                  Robust safety measures and alignment protocols to ensure responsible AI deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Talent Section */}
      <section id="talent" className="py-20 px-4 bg-[#ECF0F3]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-[#0A2540]">Elite Talent Pool</h2>
              <p className="text-xl text-[#7F8C8D] mb-8 leading-relaxed">
                Our labellers are from a thriving community of Masters&apos;, PhDs, and AI researchers from top universities like IITs, NITs, BITs, IIITs, and AIIMs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#27AE60]" />
                  <span className="text-[#2C3E50]">PhD-level AI researchers and domain experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#27AE60]" />
                  <span className="text-[#2C3E50]">Graduates from premier institutions (IITs, NITs, IIITs)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#27AE60]" />
                  <span className="text-[#2C3E50]">Specialized knowledge in ML, NLP, and computer vision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#27AE60]" />
                  <span className="text-[#2C3E50]">Rigorous quality assurance and training protocols</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-[rgba(0,0,0,0.05)]">
                <div className="text-3xl font-bold text-[#0A2540] mb-2">500+</div>
                <div className="text-[#7F8C8D]">Expert Labellers</div>
              </Card>
              <Card className="text-center p-6 border-[rgba(0,0,0,0.05)]">
                <div className="text-3xl font-bold text-[#0A2540] mb-2">50+</div>
                <div className="text-[#7F8C8D]">PhD Researchers</div>
              </Card>
              <Card className="text-center p-6 border-[rgba-0,0,0,0.05)]">
                <div className="text-3xl font-bold text-[#0A2540] mb-2">25+</div>
                <div className="text-[#7F8C8D]">Premier Institutions</div>
              </Card>
              <Card className="text-center p-6 border-[rgba(0,0,0,0.05)]">
                <div className="text-3xl font-bold text-[#0A2540] mb-2">99.5%</div>
                <div className="text-[#7F8C8D]">Quality Score</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-[#0A2540]">Trusted by Leading AI Labs</h2>
            <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
              See how we&apos;ve helped organizations accelerate their AI development and deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E67E22] text-[#E67E22]" />
                  ))}
                </div>
                <CardDescription className="text-[#7F8C8D] text-base leading-relaxed">
                  &ldquo;Zata&apos;s RLHF pipeline helped us improve our model&apos;s alignment by 40%. Their team of PhD researchers provided invaluable insights throughout the process.&rdquo;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#2E86DE] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">DR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">Dr. Sarah Chen</div>
                    <div className="text-sm text-[#7F8C8D]">Head of AI, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E67E22] text-[#E67E22]" />
                  ))}
                </div>
                <CardDescription className="text-[#7F8C8D] text-base leading-relaxed">
                  &ldquo;The quality of data generation and labelling exceeded our expectations. Zata&apos;s talent pool from top universities made all the difference.&rdquo;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#1ABC9C] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">Michael Rodriguez</div>
                    <div className="text-sm text-[#7F8C8D]">CTO, AI Innovations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-[rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E67E22] text-[#E64E22]" />
                  ))}
                </div>
                <CardDescription className="text-[#7F8C8D] text-base leading-relaxed">
                  &ldquo;Zata&apos;s safety and alignment protocols gave us confidence to deploy our models in production. Their expertise is unmatched.&rdquo;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#27AE60] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">Dr. Anita Patel</div>
                    <div className="text-sm text-[#7F8C8D]">Research Director, FutureAI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0A2540]">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Accelerate Your AI Development?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading AI labs and enterprises who trust Zata for their model training and deployment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#1ABC9C] hover:bg-[#2E86DE] text-white px-8 py-4 text-lg rounded-xl transition-all duration-200"
            >
              <Brain className="w-5 h-5 mr-2" />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-4 text-lg rounded-xl transition-all duration-200"
              asChild
            >
              <Link href="https://calendly.com/1001aditya-g/new-meeting" target="_blank">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#2C3E50] text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-lg flex items-center justify-center shadow-md">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Central node */}
                      <circle cx="9" cy="9" r="2" fill="white" opacity="0.95"/>
                      
                      {/* Corner nodes */}
                      <circle cx="4.5" cy="4.5" r="1.3" fill="white" opacity="0.8"/>
                      <circle cx="13.5" cy="4.5" r="1.3" fill="white" opacity="0.8"/>
                      <circle cx="4.5" cy="13.5" r="1.3" fill="white" opacity="0.8"/>
                      <circle cx="13.5" cy="13.5" r="1.3" fill="white" opacity="0.85"/>
                      
                      {/* Network lines */}
                      <line x1="5.8" y1="5.8" x2="7.5" y2="7.5" stroke="white" strokeWidth="1" opacity="0.7"/>
                      <line x1="12.2" y1="5.8" x2="10.5" y2="7.5" stroke="white" strokeWidth="1" opacity="0.7"/>
                      <line x1="5.8" y1="12.2" x2="7.5" y2="10.5" stroke="white" strokeWidth="1" opacity="0.7"/>
                      <line x1="12.2" y1="8.2" x2="10.5" y2="10.5" stroke="white" strokeWidth="1" opacity="0.7"/>
                    </svg>
                  </div>
                </div>
                <span className="text-white font-bold text-xl bg-gradient-to-r from-white to-gray-200 bg-clip-text">Zata</span>
              </div>
              <p className="text-gray-300 text-sm">
                Frontier model acceleration at scale. Empowering AI labs with world-class talent and data.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>RLHF Pipelines</li>
                <li>Data Generation</li>
                <li>Model Evaluation</li>
                <li>Safety & Alignment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="https://calendly.com/1001aditya-g/new-meeting" target="_blank" className="hover:text-[#1ABC9C] transition-colors">
                    Schedule Meeting
                  </Link>
                </li>
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Zata. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


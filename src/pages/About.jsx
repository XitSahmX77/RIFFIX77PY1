import { motion } from 'framer-motion';
import { Shield, Award, BookOpen, Users, Target, Github } from 'lucide-react';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto py-10 space-y-8">
      <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,136,0.05)]">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="text-primary" size={40} />
          <h1 className="text-3xl font-mono font-bold text-foreground">About XitSahmX77</h1>
        </div>

        <div className="space-y-6 text-foreground/80 font-sans leading-relaxed">
          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3 flex items-center gap-2">
              <Target size={18} /> Our Mission
            </h2>
            <p className="text-sm text-muted-foreground">
              XitSahmX77 is an independent security research organization dedicated to advancing cybersecurity 
              through education, responsible disclosure, and community engagement. We believe in making the 
              internet safer by identifying vulnerabilities and empowering others to protect themselves.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3 flex items-center gap-2">
              <Users size={18} /> Who We Are
            </h2>
            <p className="text-sm text-muted-foreground">
              We are a team of cybersecurity professionals, ethical hackers, and security researchers with 
              years of experience in the field. Our team holds recognized certifications and has contributed 
              to numerous security research projects and vulnerability disclosures.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3 flex items-center gap-2">
              <Award size={18} /> Certifications & Credentials
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li><strong>Certified Ethical Hacker (CEH)</strong> – EC-Council</li>
              <li><strong>Offensive Security Certified Professional (OSCP)</strong> – Offensive Security</li>
              <li><strong>CISSP</strong> – (ISC)²</li>
              <li><strong>CompTIA Security+</strong></li>
              <li><strong>Certified Red Team Professional</strong></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3 flex items-center gap-2">
              <BookOpen size={18} /> Research Areas
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li>Network Security & Penetration Testing</li>
              <li>Web Application Security</li>
              <li>Cloud Security & Infrastructure</li>
              <li>Protocol Analysis & Exploitation</li>
              <li>Social Engineering Awareness</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl mt-4">
            <h3 className="font-mono font-bold text-primary text-sm">📜 Evidence of Work</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Our research is documented with verifiable evidence, including:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
              <li>Detailed vulnerability reports</li>
              <li>Proof-of-concept implementations</li>
              <li>Responsible disclosure correspondence</li>
              <li>Published research papers and articles</li>
            </ul>
          </div>

          <div className="border-t border-border pt-6 mt-6">
            <div className="flex items-center justify-center gap-6">
              <a href="https://github.com/darkx77cheats" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
              <a href="https://t.me/l4chanx" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Telegram
              </a>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              © XITSAHMX77 // SEC.OPS // MA
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

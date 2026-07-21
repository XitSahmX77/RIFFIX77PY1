import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Users, Award, BookOpen, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 border border-primary/20 p-12 md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,136,0.08),transparent_70%)]" />
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="text-primary" size={64} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-mono text-foreground uppercase tracking-widest">
            XITSAHMX77
          </h1>
          <p className="text-xl text-muted-foreground font-mono mt-4">Security Research & Penetration Testing</p>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 font-sans text-sm leading-relaxed">
            Independent security researchers dedicated to identifying vulnerabilities, 
            educating the community, and promoting responsible disclosure.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="/about"
              className="px-8 py-3 bg-primary/20 border border-primary text-primary font-mono rounded-lg hover:bg-primary/30 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(0,255,136,0.05)]"
            >
              About Us <ChevronRight size={18} />
            </Link>
            <Link
              to="https://l4chan-x-cheats-v6.vercel.app"
              target="_blank"
              className="px-8 py-3 bg-card border border-border text-foreground font-mono rounded-lg hover:border-primary/50 transition-all"
            >
              Visit Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-mono font-bold text-primary">5+</div>
          <div className="text-sm font-mono text-muted-foreground mt-1">Years Research</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-mono font-bold text-primary">50+</div>
          <div className="text-sm font-mono text-muted-foreground mt-1">Vulnerabilities Found</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="text-3xl font-mono font-bold text-primary">100%</div>
          <div className="text-sm font-mono text-muted-foreground mt-1">Responsible Disclosure</div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Shield className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-foreground text-lg">Ethical Research</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                All research is conducted with strict adherence to ethical guidelines,
                focusing on identifying and responsibly disclosing vulnerabilities.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <BookOpen className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-foreground text-lg">Education</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                We believe in sharing knowledge to help organizations and individuals
                better protect themselves against cyber threats.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lock className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-foreground text-lg">Responsible Disclosure</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                We follow a strict responsible disclosure policy, giving organizations
                time to fix vulnerabilities before any public disclosure.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Users className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="font-mono font-bold text-foreground text-lg">Community</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                We're part of a global community of security researchers working
                together to make the internet safer for everyone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-card border border-border rounded-xl p-8 text-center">
        <h2 className="text-2xl font-mono font-bold text-foreground">Interested in Security Research?</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
          Learn more about our work, our principles, and how we contribute to cybersecurity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link to="/about" className="px-6 py-2.5 bg-primary/20 border border-primary text-primary font-mono rounded-lg hover:bg-primary/30 transition-all">
            About Us
          </Link>
          <Link to="/policy" className="px-6 py-2.5 bg-card border border-border text-foreground font-mono rounded-lg hover:border-primary/50 transition-all">
            Disclosure Policy
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

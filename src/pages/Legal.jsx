import { motion } from 'framer-motion';
import { Shield, AlertTriangle, BookOpen, CheckCircle, Scale } from 'lucide-react';

export default function Legal() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto py-10 space-y-8">
      <div className="bg-card border border-primary/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,136,0.05)]">
        <div className="flex items-center gap-4 mb-6">
          <Scale className="text-primary" size={40} />
          <h1 className="text-3xl font-mono font-bold text-foreground">Legal Notice & Disclaimer</h1>
        </div>

        <div className="space-y-6 text-foreground/80 font-sans leading-relaxed">
          <div className="bg-destructive/5 border border-destructive/20 p-4 rounded-xl">
            <div className="flex items-center gap-3 text-destructive">
              <AlertTriangle size={20} />
              <span className="font-mono font-bold">IMPORTANT NOTICE</span>
            </div>
            <p className="mt-2 text-sm">
              This website and all associated tools and information are provided <strong>solely for educational and research purposes</strong>.
              The content is intended for cybersecurity professionals, researchers, and students.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3 flex items-center gap-2">
              <BookOpen size={18} /> 1. Purpose of This Platform
            </h2>
            <p className="text-sm text-muted-foreground">
              XitSahmX77 is dedicated to advancing cybersecurity knowledge through:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
              <li>Security research and vulnerability identification</li>
              <li>Educational resources on network security</li>
              <li>Responsible disclosure of security findings</li>
              <li>Community awareness and threat intelligence sharing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3 flex items-center gap-2">
              <CheckCircle size={18} /> 2. Terms of Use
            </h2>
            <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
              <li>You must be at least 18 years old to access this platform</li>
              <li>You agree to use all tools and information <strong>legally and responsibly</strong></li>
              <li>You will <strong>not</strong> use this knowledge to harm, disrupt, or attack any system without explicit permission</li>
              <li>You understand that unauthorized access to computer systems is illegal</li>
              <li>You will use this knowledge to <strong>protect and secure</strong> systems</li>
              <li>You accept full responsibility for your actions when using any tools or techniques discussed here</li>
            </ul>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl">
            <h2 className="text-xl font-mono font-bold text-yellow-500 mb-2">⚠️ Disclaimer of Liability</h2>
            <p className="text-sm text-muted-foreground">
              The developers, authors, and contributors of XitSahmX77 are <strong>not responsible</strong> for any misuse, 
              damage, or legal consequences arising from the use of tools, techniques, or information provided on this platform.
              <br /><br />
              <strong className="text-foreground">Users assume full and sole responsibility for their actions.</strong>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3">3. Legal Compliance</h2>
            <p className="text-sm text-muted-foreground">
              This platform complies with Moroccan Law 07-03 on Cybercrime and international cybersecurity standards. 
              We do not promote, encourage, or facilitate illegal activities. All content is provided within the 
              framework of legitimate security research and education.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3">4. Certifications & Credentials</h2>
            <p className="text-sm text-muted-foreground">
              Our team includes security professionals with recognized certifications in the field:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
              <li>Certified Ethical Hacker (CEH)</li>
              <li>Offensive Security Certified Professional (OSCP)</li>
              <li>CISSP - Certified Information Systems Security Professional</li>
              <li>CompTIA Security+</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-primary mb-3">5. Evidence of Research</h2>
            <p className="text-sm text-muted-foreground">
              Our research is backed by documented evidence and follows established security research methodologies. 
              All findings are verified and validated before any disclosure.
            </p>
          </div>

          <div className="border-t border-border pt-6 mt-6">
            <p className="text-xs text-muted-foreground text-center">
              © XITSAHMX77 // SEC.OPS // MA<br />
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

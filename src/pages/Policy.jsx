import { motion } from 'framer-motion';
import { Shield, Lock, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Policy() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto py-10 space-y-8">
      <div className="bg-card border border-accent/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,212,255,0.05)]">
        <div className="flex items-center gap-4 mb-6">
          <Lock className="text-accent" size={40} />
          <h1 className="text-3xl font-mono font-bold text-foreground">Responsible Disclosure Policy</h1>
        </div>

        <div className="space-y-6 text-foreground/80 font-sans leading-relaxed">
          <div className="bg-accent/5 border border-accent/20 p-4 rounded-xl">
            <div className="flex items-center gap-3 text-accent">
              <Shield size={20} />
              <span className="font-mono font-bold">Our Commitment</span>
            </div>
            <p className="mt-2 text-sm">
              We are committed to responsible security research and ethical disclosure. 
              We work with organizations to identify and fix vulnerabilities before any 
              public disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-accent mb-3 flex items-center gap-2">
              <Clock size={18} /> 1. Disclosure Process
            </h2>
            <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
              <li><strong>Discovery:</strong> Vulnerability is discovered and documented</li>
              <li><strong>Verification:</strong> Vulnerability is verified and reproduced</li>
              <li><strong>Notification:</strong> Organization is contacted with detailed report</li>
              <li><strong>Collaboration:</strong> Work with organization to fix the issue</li>
              <li><strong>Confirmation:</strong> Fix is tested and confirmed</li>
              <li><strong>Disclosure:</strong> Public disclosure after fix is deployed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-accent mb-3 flex items-center gap-2">
              <CheckCircle size={18} /> 2. Disclosure Policy
            </h2>
            <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
              <li>We provide <strong>90 days</strong> for organizations to fix vulnerabilities</li>
              <li>We do <strong>not</strong> disclose vulnerabilities before a fix is available</li>
              <li>We follow the <strong>Coordinated Vulnerability Disclosure (CVD)</strong> framework</li>
              <li>We respect confidentiality and do <strong>not</strong> exploit vulnerabilities</li>
              <li>We <strong>always</strong> obtain permission before testing systems</li>
              <li>We <strong>never</strong> use vulnerabilities for personal gain</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-accent mb-3 flex items-center gap-2">
              <Mail size={18} /> 3. Contact Us
            </h2>
            <p className="text-sm text-muted-foreground">
              For security research inquiries or to report vulnerabilities, you can reach us through:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
              <li><strong>Telegram:</strong> @l4chanx</li>
              <li><strong>GitHub:</strong> github.com/darkx77cheats</li>
              <li><strong>Discord:</strong> (Contact via Telegram for invite)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-accent mb-3">4. Legal Compliance</h2>
            <p className="text-sm text-muted-foreground">
              All our research activities are conducted in accordance with applicable laws, including:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
              <li>Moroccan Law 07-03 on Cybercrime</li>
              <li>International cybersecurity standards (ISO 27001, NIST)</li>
              <li>Data protection and privacy regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-mono font-bold text-accent mb-3">5. Evidence of Responsible Disclosure</h2>
            <p className="text-sm text-muted-foreground">
              We maintain comprehensive records of all our research and disclosures, including:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
              <li>Timeline of discovery and disclosure</li>
              <li>Communication records with affected organizations</li>
              <li>Verification and validation results</li>
              <li>Fix confirmation and testing evidence</li>
            </ul>
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

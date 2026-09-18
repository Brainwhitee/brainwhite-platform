import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white w-full sticky bottom-0 -z-10 h-screen md:h-[80vh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 md:px-10">
      
      {/* Final CTA inside the top of the footer */}
      <div className="max-w-7xl mx-auto w-full text-center mt-auto md:mb-12 flex-1 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
          Give new developers a<br/>better first month.
        </h2>
        <p className="text-xl text-neutral-400 font-sans mb-10 max-w-2xl mx-auto">
          Let's talk about how your team onboards today, and how brainwhite could help.
        </p>
        <div>
          <Link href="/early-access">
            <button className="group inline-flex h-14 items-center gap-3 rounded-full bg-white pl-6 pr-2 text-base font-medium text-black transition-all hover:pr-3 cursor-pointer">
              Request Early Access
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-105">
                <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/20 pt-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tighter hover:text-white/80 transition-colors">
              brainwhite.
            </Link>
            <p className="text-neutral-400 font-sans mt-4 max-w-sm">
              AI onboarding for engineering teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-neutral-400 font-sans text-sm">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-neutral-400 font-sans text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@brainwhite.io" className="hover:text-white transition-colors">hello@brainwhite.io</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-sans">
          <p>© 2026 brainwhite. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
}
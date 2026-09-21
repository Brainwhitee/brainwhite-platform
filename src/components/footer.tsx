import Link from "next/link";

export function Footer() {
  return (
    <footer className="painted-section-dark text-white w-full sticky bottom-0 -z-10 h-screen md:h-[80vh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 md:px-10">

      {/* Final CTA inside the top of the footer */}
      <div className="max-w-7xl mx-auto w-full text-center mt-auto md:mb-12 flex-1 flex flex-col justify-center">
        <h2 className="painted-heading text-4xl md:text-6xl lg:text-7xl mb-6">
          Give new developers a<br/>better first month.
        </h2>
        <p className="painted-body text-xl mb-10 max-w-2xl mx-auto">
          Let's talk about how your team onboards today, and how brainwhite could help.
        </p>
        <div>
          <Link href="/early-access">
            <button className="painted-cta">
              Request Early Access
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-[#C99A5C]/20 pt-12">

          <div className="md:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tighter hover:text-[#F3E9D6]/80 transition-colors">
              brainwhite.
            </Link>
            <p className="painted-body mt-4 max-w-sm">
              AI onboarding for engineering teams.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#F3E9D6]">Product</h4>
            <ul className="space-y-3 painted-body text-sm">
              <li><Link href="/how-it-works" className="hover:text-[#F3E9D6] transition-colors">How It Works</Link></li>
              <li><Link href="/solutions" className="hover:text-[#F3E9D6] transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-[#F3E9D6] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#F3E9D6]">Company</h4>
            <ul className="space-y-3 painted-body text-sm">
              <li><Link href="/about" className="hover:text-[#F3E9D6] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#F3E9D6] transition-colors">Contact</Link></li>
              <li><a href="mailto:hello@brainwhite.io" className="hover:text-[#F3E9D6] transition-colors">hello@brainwhite.io</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#C99A5C]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs painted-body">
          <p>© 2026 brainwhite. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}
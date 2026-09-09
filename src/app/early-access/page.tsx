import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function EarlyAccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center bg-white">
        <div className="w-full max-w-md px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-black tracking-tight">Request Access</h1>
          <p className="text-gray-600 mb-8 font-mono text-sm leading-relaxed">
            Brainwhite is currently invite-only for select engineering teams. Join the waitlist to get your unlock key.
          </p>
          
          <form className="space-y-4 text-left">
            <div>
              <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Work Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-md focus:border-[#ff6600] focus:outline-none transition-colors"
                placeholder="you@company.com" 
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block font-mono text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Company Size</label>
              <select 
                id="company"
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-md focus:border-[#ff6600] focus:outline-none transition-colors bg-white"
                required
              >
                <option value="">Select size...</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>
            
            <button type="submit" className="w-full bg-[#ff6600] text-white font-mono font-bold text-sm uppercase tracking-widest py-4 px-8 mt-4 hover:bg-black transition-colors duration-300 rounded-md">
              Join Waitlist →
            </button>
          </form>
          
          <p className="text-xs text-gray-400 mt-6">
            By joining, you agree to receive updates about Brainwhite early access.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
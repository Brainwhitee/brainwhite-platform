export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50 h-16 flex items-center px-6">
        <div className="font-bold tracking-tighter">BRAINWHITE</div>
        <nav className="ml-auto flex gap-6 text-sm text-white/70">
          <a href="/product" className="hover:text-white transition">Product</a>
          <a href="/how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="/security" className="hover:text-white transition">Security</a>
          <a href="/pricing" className="hover:text-white transition">Pricing</a>
          <a href="/admin/organization" className="text-white">Sign In</a>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  );
}
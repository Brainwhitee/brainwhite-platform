"use client";

export function ExperienceFooter() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-meta opacity-50">
          © {new Date().getFullYear()} BRAINWHITE INC.
        </div>
        <div className="flex gap-8 text-meta">
          <a href="#" className="hover:opacity-50 transition-opacity" data-cursor="hover">TWITTER</a>
          <a href="#" className="hover:opacity-50 transition-opacity" data-cursor="hover">LINKEDIN</a>
          <a href="#" className="hover:opacity-50 transition-opacity" data-cursor="hover">GITHUB</a>
        </div>
      </div>
    </footer>
  );
}

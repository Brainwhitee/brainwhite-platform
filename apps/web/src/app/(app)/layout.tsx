export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#050505]">
      <aside className="w-64 border-r border-white/10 flex flex-col p-4 gap-4">
        <div className="font-bold tracking-tighter text-xl px-2 mb-4">BRAINWHITE</div>
        
        <div className="text-xs uppercase tracking-widest text-white/30 px-2 font-mono">Admin</div>
        <a href="/admin/organization" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Organization</a>
        <a href="/admin/projects" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Projects</a>
        
        <div className="text-xs uppercase tracking-widest text-white/30 px-2 mt-4 font-mono">Developer</div>
        <a href="/developer/home" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Home</a>
        <a href="/developer/learning-path" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Learning Path</a>
        <a href="/developer/tasks" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Tasks</a>
        
        <div className="text-xs uppercase tracking-widest text-white/30 px-2 mt-4 font-mono">Manager</div>
        <a href="/manager/overview" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Overview</a>
        <a href="/manager/readiness" className="px-2 py-1.5 text-sm hover:bg-white/5 rounded transition">Readiness</a>
      </aside>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
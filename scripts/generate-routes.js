const fs = require('fs');
const path = require('path');

const routes = [
  "(marketing)/product",
  "(marketing)/how-it-works",
  "(marketing)/security",
  "(marketing)/pricing",
  "(marketing)/contact",
  "(app)/admin/organization",
  "(app)/admin/projects",
  "(app)/admin/repositories",
  "(app)/admin/knowledge",
  "(app)/admin/team",
  "(app)/developer/home",
  "(app)/developer/profile",
  "(app)/developer/learning-path",
  "(app)/developer/project-explorer",
  "(app)/developer/tasks",
  "(app)/developer/assessments",
  "(app)/developer/qa",
  "(app)/developer/readiness",
  "(app)/manager/overview",
  "(app)/manager/developers",
  "(app)/manager/readiness",
  "(app)/manager/onboarding",
  "(app)/manager/skill-gaps",
  "(app)/manager/analytics"
];

function toPascalCase(str) {
  return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function toTitleCase(str) {
  return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

routes.forEach(route => {
  const fullPath = path.join(__dirname, 'apps/web/src/app', route);
  fs.mkdirSync(fullPath, { recursive: true });
  
  const name = route.split('/').pop();
  const componentName = toPascalCase(name) + 'Page';
  const title = toTitleCase(name);
  
  const content = `"use client";

export default function ${componentName}() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold tracking-tighter">${title}</h1>
      <p className="text-muted-foreground mt-4">This is the ${title} page for BrainWhite.</p>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(fullPath, 'page.tsx'), content);
});

// Also create the layouts
const marketingLayout = `export default function MarketingLayout({ children }: { children: React.ReactNode }) {
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
}`;
fs.mkdirSync(path.join(__dirname, 'apps/web/src/app/(marketing)'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'apps/web/src/app/(marketing)/layout.tsx'), marketingLayout);

const appLayout = `export default function AppLayout({ children }: { children: React.ReactNode }) {
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
}`;
fs.mkdirSync(path.join(__dirname, 'apps/web/src/app/(app)'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'apps/web/src/app/(app)/layout.tsx'), appLayout);

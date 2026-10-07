import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'<div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 uppercase tracking-\[0.2em\] mb-8 backdrop-blur-md">\s*BrainWhite V1\s*</div>.*?evidence-based readiness.\s*</p>', re.DOTALL)

replacement = '''<Magnetic intensity={0.1}>
              <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 uppercase tracking-[0.2em] mb-8 backdrop-blur-md cursor-pointer">
                BrainWhite V1
              </div>
            </Magnetic>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[1.1]">
              Onboarding is an<br/>Engineering Problem.
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
              Company codebase + engineering knowledge <br className="hidden md:block" />
              <span className="text-orange-400/80"> </span> BrainWhite understands the project <br className="hidden md:block" />
              <span className="text-orange-400/80"> </span> personalized learning & evidence-based readiness.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Magnetic intensity={0.2}>
                <a href="#waitlist" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-neutral-200">
                  Join the Waitlist
                </a>
              </Magnetic>
            </div>'''

content = pattern.sub(replacement, content)
content = 'import { Magnetic } from "@/components/ui/magnetic";\n' + content

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)


"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
  useStorage,
  useMutation,
  useMyPresence,
  useOthers,
} from "@liveblocks/react";
import { LiveMap, LiveObject } from "@liveblocks/client";

type NoteData = {
  x: number;
  y: number;
  text: string;
  color: string;
  rotation: number;
};

const NOTE_COLORS = ["bg-yellow-200", "bg-blue-200", "bg-pink-200", "bg-green-200", "bg-purple-200"];

declare global {
  interface Liveblocks {
    Presence: {
      cursor: { x: number; y: number } | null;
    };
    Storage: {
      notes: LiveMap<string, LiveObject<NoteData>>;
    };
  }
}

export function LockedSection({ children }: { children: React.ReactNode }) {
  // If no key is found, fallback to the static version (or just render children)
  // But we have the key, so we proceed.
  const publicKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY;
  
  if (!publicKey) {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-[4px]">
          <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full max-w-2xl px-6 mx-auto pointer-events-none">
            <div className="absolute inset-x-[-50vw] top-1/2 -translate-y-1/2 h-12 flex items-center justify-center overflow-hidden z-0 opacity-80">
              <svg width="2000" height="40" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="chain" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
                  <rect x="2" y="10" width="36" height="20" rx="10" stroke="#333" strokeWidth="4" fill="transparent"/>
                  <rect x="42" y="10" width="36" height="20" rx="10" stroke="#333" strokeWidth="4" fill="transparent"/>
                  <circle cx="40" cy="20" r="6" fill="#111" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#chain)" />
              </svg>
            </div>
            <div className="relative z-10 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-10 md:p-14 text-center w-[90%] sm:w-full max-w-lg mx-auto pointer-events-auto">
              <div className="mx-auto w-24 h-24 mb-6 relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  <circle cx="12" cy="16" r="1" fill="#ff6600" stroke="#ff6600"></circle>
                </svg>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-4 uppercase tracking-tight">Classified Area</h2>
              <p className="font-mono text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
                This onboarding documentation is sealed. You must unlock the early access tier to view the full product specifications.
              </p>
              <a href="/early-access" className="w-full inline-block bg-[#ff6600] text-white font-mono font-bold text-sm uppercase tracking-widest py-4 px-8 hover:bg-black transition-colors duration-300">
                Request Unlock Key →
              </a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none select-none opacity-40 blur-[3px] grayscale-[50%]">
          {children}
        </div>
      </div>
    );
  }

  return (
    <LiveblocksProvider publicApiKey={publicKey}>
      <RoomProvider 
        id="brainwhite-community-board" 
        initialPresence={{ cursor: null }}
        initialStorage={{ notes: new LiveMap<string, LiveObject<NoteData>>() }}
      >
        <div className="relative w-full overflow-hidden">
          <ClientSideSuspense fallback={<div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-[4px] flex items-center justify-center">Loading Live Whiteboard...</div>}>
            <InteractiveWhiteboard />
          </ClientSideSuspense>
          
          {/* The Blurred / Locked Content */}
          <div className="pointer-events-none select-none opacity-40 blur-[3px] grayscale-[50%]">
            {children}
          </div>
        </div>
      </RoomProvider>
    </LiveblocksProvider>
  );
}

function InteractiveWhiteboard() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Storage
  const notes = useStorage((root) => root.notes);
  
  // Presence (Cursors)
  const [{ cursor }, updateMyPresence] = useMyPresence();
  const others = useOthers();

  // Mutations
  const addNote = useMutation(({ storage }, x: number, y: number) => {
    const randomColor = NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];
    const randomRotation = (Math.random() - 0.5) * 10;
    const noteId = Date.now().toString();
    
    const note = new LiveObject({
      x,
      y,
      text: "",
      color: randomColor,
      rotation: randomRotation,
    });
    
    storage.get("notes").set(noteId, note);
  }, []);

  const updateNoteText = useMutation(({ storage }, noteId: string, newText: string) => {
    const note = storage.get("notes").get(noteId);
    if (note) {
      note.update({ text: newText });
    }
  }, []);

  const removeNote = useMutation(({ storage }, noteId: string) => {
    storage.get("notes").delete(noteId);
  }, []);

  const handlePointerMove = React.useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    updateMyPresence({ cursor: { x, y } });
  }, [updateMyPresence]);

  const handlePointerLeave = React.useCallback(() => {
    updateMyPresence({ cursor: null });
  }, [updateMyPresence]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target !== containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left - 100;
    const y = e.clientY - rect.top - 100;
    
    // Clamp to screen bounds for mobile
    if (x < 10) x = 10;
    if (x > rect.width - 230) x = rect.width - 230;

    addNote(x, y);
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleBackgroundClick}
      className="absolute inset-0 z-50 bg-white/60 backdrop-blur-[4px] cursor-[url('/pencil.svg'),_crosshair]"
    >
      {/* Giant header at the start of the section */}
      <div className="absolute top-32 left-0 w-full flex flex-col items-center pointer-events-none select-none z-10">
        <h2 
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] text-center px-4 leading-none text-black/80 rotate-[-2deg]"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Teach us anything...
        </h2>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/30 mt-4 rotate-[90deg]">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>

      {/* Sticky Lock Container */}
      <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full max-w-2xl px-6 mx-auto pointer-events-none">
        {/* Iron Chains Background Decoration */}
        <div className="absolute inset-x-[-50vw] top-1/2 -translate-y-1/2 h-12 flex items-center justify-center overflow-hidden z-0 opacity-80">
          <svg width="2000" height="40" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="chain" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <rect x="2" y="10" width="36" height="20" rx="10" stroke="#333" strokeWidth="4" fill="transparent"/>
              <rect x="42" y="10" width="36" height="20" rx="10" stroke="#333" strokeWidth="4" fill="transparent"/>
              <circle cx="40" cy="20" r="6" fill="#111" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#chain)" />
          </svg>
        </div>

        {/* The Lock Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-10 md:p-14 text-center w-[90%] sm:w-full max-w-lg mx-auto pointer-events-auto"
        >
          {/* Giant Padlock Icon */}
          <div className="mx-auto w-24 h-24 mb-6 relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              <circle cx="12" cy="16" r="1" fill="#ff6600" stroke="#ff6600"></circle>
            </svg>
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black mb-4 uppercase tracking-tight">
            Classified Area
          </h2>
          
          <p className="font-mono text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
            This onboarding documentation is sealed. But while you wait for early access, click anywhere on the background to leave a note on our community whiteboard!
          </p>
          
          <a href="/early-access" className="w-full inline-block bg-[#ff6600] text-white font-mono font-bold text-sm uppercase tracking-widest py-4 px-8 hover:bg-black transition-colors duration-300">
            Request Unlock Key ?
          </a>
        </motion.div>
      </div>

      {/* Render Other Users Cursors */}
      {others.map(({ connectionId, presence }) => {
        if (!presence?.cursor) return null;
        return (
          <div
            key={connectionId}
            className="absolute pointer-events-none z-[100]"
            style={{
              left: presence.cursor.x,
              top: presence.cursor.y,
              transition: "transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <svg width="24" height="36" viewBox="0 0 24 36" fill="none" stroke="white" strokeWidth="2" className="drop-shadow-md">
              <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" fill="#ff6600" />
            </svg>
          </div>
        );
      })}

      {/* The Rendered Sticky Notes */}
      {notes && Object.entries(notes || {}).map(([id, note]) => {
        if (!note) return null;
        return (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`absolute w-[220px] h-[220px] ${note.color} p-5 shadow-lg flex flex-col pointer-events-auto`}
            style={{
              left: Math.max(20, note.x),
              top: Math.max(20, note.y),
              rotate: note.rotation,
              boxShadow: "3px 4px 10px rgba(0,0,0,0.15)",
              borderBottomRightRadius: "30px 10px",
            }}
          >
            <div className="w-full flex justify-between items-center mb-2">
              <div className="w-8 h-3 bg-white/40 mx-auto -mt-2 rotate-[-2deg] shadow-sm" />
              {note.text === "" && (
                <button onClick={() => removeNote(id)} className="text-black/30 hover:text-black absolute right-3 top-3 text-sm">
                  ?
                </button>
              )}
            </div>
            
            <textarea
              value={note.text}
              onChange={(e) => updateNoteText(id, e.target.value)}
              placeholder="Write a note..."
              autoFocus
              style={{ fontFamily: "var(--font-caveat), cursive" }}
              className="w-full h-full bg-transparent resize-none outline-none text-2xl text-gray-800 leading-tight placeholder-gray-800/40"
              spellCheck={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}


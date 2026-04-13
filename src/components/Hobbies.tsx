// src/components/Hobbies.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, Plus } from 'lucide-react';

interface Hobby {
  id: number;
  url: { src: string };
  title: string;
  description: string;
  tags: string[];
}

const hobbyData: Hobby[] = [
  {
    id: 1,
    url: { src: 'Firefly.jpg' },
    title: 'Singing & Music',
    description: 'I am formally learning Bengali semi-classical, Rabindrasangeet, and Nazrulgeeti. I have successfully passed my 1st year examination under Pracheen Kala Kendra in the Nazrulgeeti musical domain!',
    tags: ['Vocals', 'Rabindrasangeet', 'Nazrulgeeti'],
  },
  {
    id: 2,
    url: { src: '6257936825846534729.jpg' },
    title: 'Reading Literature',
    description: 'I love getting lost in Detective mysteries, exploring vast Science Fiction realms, and analyzing deep psychological structures in Psychothriller narratives.',
    tags: ['Sci-Fi', 'Thrillers', 'Fiction'],
  },
  {
    id: 3,
    url: { src: '6257936825846535015.jpg' },
    title: 'Photography & Travel',
    description: 'I constantly capture moments through both DSLR and mobile lenses. I have a deep passion for photographing human subjects, documenting raw nature, and exploring completely new environments across the globe while travelling.',
    tags: ['DSLR', 'Nature', 'Travel'],
  }
];

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);

  const transition = {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  };

  React.useEffect(() => {
    if (selectedHobby) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedHobby]);

  return (
    <section id="hobbies" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title !text-5xl md:!text-6xl lg:!text-[4.5rem]">Beyond The Code</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hobbyData.map((hobby) => (
            <motion.div
              layoutId={`card-${hobby.id}`}
              key={hobby.id}
              onClick={() => setSelectedHobby(hobby)}
              className="relative h-80 rounded-[32px] overflow-hidden cursor-pointer group border border-white/5 bg-spaceDark/40 hover:border-[#FF85A1]/40 transition-colors"
            >
              {/* Image Layer */}
              <motion.img
                layoutId={`image-${hobby.id}`}
                src={hobby.url.src}
                alt={hobby.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              
              {/* Content Layer */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end z-10">
                <div className="flex-1 pr-4">
                  <motion.h3 
                    layoutId={`title-${hobby.id}`}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {hobby.title}
                  </motion.h3>
                  <div className="flex flex-wrap gap-2">
                    {hobby.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono font-bold tracking-widest text-[#FF85A1] uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 p-3 bg-white/10 text-white rounded-full transition-all group-hover:bg-[#FF85A1] group-hover:text-black">
                  <Plus className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedHobby && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedHobby(null)}
                className="absolute inset-0 bg-[#0B0A10]/90 backdrop-blur-xl"
              />

              {/* Modal Container */}
              <motion.div
                layoutId={`card-${selectedHobby.id}`}
                transition={transition}
                className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B0A10] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl z-10 flex flex-col items-center"
              >
                <div className="relative w-full h-64 sm:h-80 md:h-[450px] overflow-hidden flex-shrink-0">
                  <motion.img
                    layoutId={`image-${selectedHobby.id}`}
                    transition={transition}
                    src={selectedHobby.url.src}
                    alt={selectedHobby.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A10] via-transparent to-transparent" />
                  
                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedHobby(null)}
                    className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md text-white rounded-full border border-white/10 hover:bg-[#FF85A1] hover:text-black transition-all z-20"
                  >
                    <XIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-8 md:p-12 w-full -mt-20 relative z-10 overflow-y-auto no-scrollbar">
                    <motion.h3 
                        layoutId={`title-${selectedHobby.id}`}
                        transition={transition}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        {selectedHobby.title}
                    </motion.h3>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {selectedHobby.tags.map(tag => (
                            <span key={tag} className="px-4 py-1 bg-[#FF85A1]/10 border border-[#FF85A1]/20 rounded-full text-xs font-mono font-bold tracking-widest text-[#FF85A1] uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed"
                    >
                        {selectedHobby.description}
                    </motion.p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import PillNav from './PillNav';
import { motion } from "framer-motion";

export default function Navbar() {
  const logoComponent = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#FF85A1] to-[#FFC1D1] px-2 md:px-0"
    >
      TB.
    </motion.div>
  );

  return (
    <PillNav
      logo={logoComponent}
      logoAlt="Logo"
      items={[
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Hackathons', href: '#hackathons' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Contact', href: '#contact' }
      ]}
      activeHref="#about"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#9ca3af" // Gray text for non-active/hovered items
      pillColor="#FF85A1" // Pink background pill
      hoveredPillTextColor="#ffffff" // White text when pill is hovered/active
      pillTextColor="#000000"
      theme="dark"
      initialLoadAnimation={false}
    />
  );
}

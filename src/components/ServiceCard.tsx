"use client";

import { motion } from "framer-motion";

interface Props {
  icon: string;
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl p-7 border border-gray-100 cursor-default"
    >
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

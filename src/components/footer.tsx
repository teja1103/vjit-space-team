"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              VJIT Space Team
            </span>
          </div>
          <div className="text-center md:text-right text-sm text-foreground/70">
            <p>© {new Date().getFullYear()} VJIT Space Team. All rights reserved.</p>
            <p className="mt-1">
              Designed with <span className="text-red-500">❤</span> by VJIT Students
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}


import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            Riandranto<span className="text-blue-500">.</span>Zohary
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:andrianjafinarivor@gmail.com" className="hover:text-blue-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} - Fait avec 
            <Heart size={16} className="text-red-500 fill-current" /> 
            par Riandranto Zohary
          </p>
        </div>
      </div>
    </footer>
  )
}
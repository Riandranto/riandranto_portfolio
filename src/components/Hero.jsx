import React, { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ArrowDown, Download, Sparkles, ChevronRight } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `rgba(59, 130, 246, ${Math.random() * 0.3})`
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Canvas d'arrière-plan animé */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      />

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge de disponibilité */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30 animate-pulse" data-aos="fade-down">
            <Sparkles size={16} />
            <span className="text-sm font-medium">✨ Disponible pour un stage pré-embauche</span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            <span className="inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Riandranto
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Zohary
            </span>
          </h1>

          {/* Sous-titre avec animation */}
          <div className="mb-8 h-20" data-aos="fade-up" data-aos-delay="200">
            <p className="text-2xl md:text-3xl text-white/90">
              Développeur Web <span className="font-bold text-blue-300">Full Stack</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-xl text-white/80 max-w-2xl mb-12" data-aos="fade-up" data-aos-delay="300">
            Je crée des applications web modernes et performantes avec une expérience utilisateur exceptionnelle. 
            Passionné par les nouvelles technologies et le design.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4 mb-12" data-aos="fade-up" data-aos-delay="400">
            <a
              href="/CV__Riandranto.pdf"
              className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Télécharger CV
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
            >
              Me contacter
              <ChevronRight size={20} />
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="500">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:andrianjafinarivor@gmail.com", label: "Email" }
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <Icon size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Flèche de défilement */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce cursor-pointer z-10"
        data-aos="fade-up"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  )
}
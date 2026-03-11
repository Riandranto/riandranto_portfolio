import React from 'react'
import { Code, Rocket, Users, Target, Award, Coffee } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Code, value: "3+", label: "Projets réalisés", color: "blue" },
    { icon: Rocket, value: "2026", label: "Disponible maintenant", color: "purple" },
    { icon: Users, value: "Full Stack", label: "Développement", color: "green" },
    { icon: Target, value: "Stage", label: "Pré-embauche", color: "orange" }
  ]

  const getGradientColor = (color) => {
    const gradients = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      green: "from-green-500 to-emerald-500",
      orange: "from-orange-500 to-red-500",
      yellow: "from-yellow-500 to-amber-500",
      brown: "from-amber-700 to-orange-700"
    }
    return gradients[color] || "from-blue-500 to-purple-500"
  }

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête avec animation */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            Qui suis-je ?
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À propos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Description */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold mb-4">
                Riandranto <span className="text-blue-600">Zohary</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Développeur web full-stack passionné par la création d'applications innovantes 
                  et modernes. Je combine créativité et expertise technique pour donner vie à 
                  des projets exceptionnels.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Actuellement à la recherche d'un <span className="text-blue-600 font-semibold relative inline-block">
                    stage pré-embauche
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 animate-pulse"></span>
                  </span> 
                  dans une entreprise innovante où je pourrai contribuer à des projets challenges 
                  tout en continuant à apprendre et à évoluer.
                </p>
              </div>

              {/* Badges de compétences */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["React.js", "Node.js", "Python", "Java", "PostgreSQL", "Tailwind"].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-800/30 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite - Stats en grille */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const gradientColor = getGradientColor(stat.color)
              
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradientColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section "Pourquoi moi ?" */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-10">Pourquoi travailler avec moi ?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Passionné",
                description: "Je m'investis à 100% dans chaque projet avec enthousiasme",
                icon: "🔥"
              },
              {
                title: "Apprentissage rapide",
                description: "Capable de m'adapter rapidement aux nouvelles technologies",
                icon: "⚡"
              },
              {
                title: "Esprit d'équipe",
                description: "Je collabore efficacement et communique clairement",
                icon: "🤝"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
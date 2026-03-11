import React, { useEffect, useRef, useState } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 65, color: "from-blue-500 to-cyan-500", icon: "⚛️" },
        { name: "JavaScript", level: 70, color: "from-yellow-500 to-orange-500", icon: "🟨" },
        { name: "TypeScript", level: 40, color: "from-blue-600 to-blue-400", icon: "🔷" },
        { name: "Tailwind CSS", level: 50, color: "from-cyan-500 to-teal-500", icon: "🎨" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500", icon: "🌐" }
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Python", level: 30, color: "from-green-500 to-emerald-500", icon: "🐍" },
        { name: "Java", level: 65, color: "from-red-500 to-orange-500", icon: "☕" },
        { name: "PHP", level: 65, color: "from-purple-500 to-pink-500", icon: "🐘" },
        { name: "Node.js", level: 30, color: "from-green-600 to-emerald-600", icon: "🟢" },
        { name: "Django", level: 30, color: "from-green-700 to-green-500", icon: "🎯" }
      ]
    },
    {
      name: "Base de données",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 75, color: "from-blue-600 to-indigo-600", icon: "🐘" },
        { name: "MySQL", level: 80, color: "from-orange-600 to-yellow-600", icon: "🐬" },
        { name: "MongoDB", level: 65, color: "from-green-600 to-emerald-600", icon: "🍃" },
        { name: "SQLite", level: 65, color: "from-blue-400 to-cyan-400", icon: "📁" }
      ]
    },
    {
      name: "Outils & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 55, color: "from-orange-600 to-red-600", icon: "📦" },
        { name: "Docker", level: 60, color: "from-blue-500 to-indigo-500", icon: "🐳" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-600", icon: "💻" },
        { name: "Postman", level: 65, color: "from-orange-500 to-red-500", icon: "📮" }
      ]
    }
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            Expertise technique
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un ensemble de technologies maîtrisées pour créer des applications modernes et performantes
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* En-tête de catégorie */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>

              {/* Liste des compétences */}
              <div className="p-6 space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nuage de mots */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            Technologies que j'utilise au quotidien
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Node.js", "Python", "JavaScript", "TypeScript",
              "Tailwind", "PostgreSQL", "Git", "REST API", "GraphQL",
              "Docker", "AWS", "Firebase", "Next.js", "Express"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                style={{
                  fontSize: `${Math.random() * 0.5 + 0.8}rem`,
                  animationDelay: `${i * 0.1}s`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
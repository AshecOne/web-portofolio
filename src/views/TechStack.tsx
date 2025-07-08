"use client";
import React from "react";
import Container from "@/components/Container";

interface ITechStackProps {}

const TechStack: React.FunctionComponent<ITechStackProps> = (props) => {
  const techCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      technologies: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
    },
    {
      title: "Mobile Development",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      technologies: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        { name: "Expo", icon: "🚀" },
      ],
    },
    {
      title: "Backend",
      color: "from-purple-500 to-violet-500",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "NestJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
        {
          name: "Go",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        },
      ],
    },
    {
      title: "Database & Storage",
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
      technologies: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
        { name: "Prisma ORM", icon: "⚡" },
        { name: "TypeORM", icon: "📊" },
        { name: "MinIO", icon: "📦" },
      ],
    },
    {
      title: "UI Libraries & Styling",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-200",
      bgColor: "bg-pink-50",
      technologies: [
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        { name: "shadcn/ui", icon: "🎯" },
        { name: "Radix UI", icon: "🔘" },
        {
          name: "Material-UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        { name: "Framer Motion", icon: "🌀" },
        { name: "Lucide React", icon: "✨" },
      ],
    },
    {
      title: "State Management & Data",
      color: "from-indigo-500 to-blue-500",
      borderColor: "border-indigo-200",
      bgColor: "bg-indigo-50",
      technologies: [
        { name: "Zustand", icon: "🐻" },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        { name: "SWR", icon: "🔄" },
      ],
    },
    {
      title: "Data Visualization",
      color: "from-teal-500 to-cyan-500",
      borderColor: "border-teal-200",
      bgColor: "bg-teal-50",
      technologies: [
        { name: "Chart.js", icon: "📊" },
        { name: "Recharts", icon: "📈" },
        { name: "Victory Native", icon: "🏆" },
      ],
    },
    {
      title: "GIS & Mapping",
      color: "from-emerald-500 to-green-500",
      borderColor: "border-emerald-200",
      bgColor: "bg-emerald-50",
      technologies: [
        { name: "Turf.js", icon: "🗺️" },
        { name: "Proj4", icon: "🌍" },
        { name: "GeoJSON", icon: "📍" },
      ],
    },
    {
      title: "File Processing",
      color: "from-amber-500 to-yellow-500",
      borderColor: "border-amber-200",
      bgColor: "bg-amber-50",
      technologies: [
        { name: "jsPDF", icon: "📄" },
        { name: "PDF-lib", icon: "📋" },
        { name: "XLSX", icon: "📊" },
        { name: "DXF Parser", icon: "🏗️" },
        { name: "HLS.js", icon: "🎥" },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "from-gray-500 to-slate-500",
      borderColor: "border-gray-200",
      bgColor: "bg-gray-50",
      technologies: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        { name: "Shell Script", icon: "💻" },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
      ],
    },
    {
      title: "Authentication & Testing",
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-200",
      bgColor: "bg-violet-50",
      technologies: [
        { name: "NextAuth.js", icon: "🔐" },
        {
          name: "Jest",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        },
        { name: "Testing Library", icon: "🧪" },
      ],
    },
  ];

  return (
    <section id="techstack" className="py-16 bg-blue-50">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Tech Stack & Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of technologies, frameworks, and tools I
            use to build scalable and efficient software solutions across the
            full development stack.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative`}
            >
              {/* Technology Count Badge - Top Right */}
              <div className="absolute top-4 right-4">
                <span
                  className={`bg-gradient-to-r ${category.color} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm`}
                >
                  {category.technologies.length} techs
                </span>
              </div>

              {/* Category Header */}
              <div className="mb-6 pr-16">
                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}
                >
                  {category.title}
                </h3>
                <div
                  className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`}
                ></div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    {tech.icon.startsWith("http") ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-5 h-5"
                      />
                    ) : (
                      <span className="text-lg">{tech.icon}</span>
                    )}
                    <span className="font-medium text-gray-700 text-sm">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 min-w-[280px] relative flex-shrink-0`}
              >
                {/* Technology Count Badge - Top Right */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`bg-gradient-to-r ${category.color} text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm`}
                  >
                    {category.technologies.length}
                  </span>
                </div>

                {/* Category Header */}
                <div className="mb-4 pr-12">
                  <h3
                    className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}
                  >
                    {category.title}
                  </h3>
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}
                  ></div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-2 bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      {tech.icon.startsWith("http") ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-4 h-4"
                        />
                      ) : (
                        <span className="text-sm">{tech.icon}</span>
                      )}
                      <span className="font-medium text-gray-700 text-xs">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              ← Swipe to explore more technologies →
            </p>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Additional Skills & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Data Analysis
                </h4>
                <p className="text-sm text-gray-600">
                  DataCamp certified with Python expertise
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🐧</div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Linux Systems
                </h4>
                <p className="text-sm text-gray-600">
                  Command line & system administration
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="font-semibent text-gray-700 mb-2">
                  IoT & Hardware
                </h4>
                <p className="text-sm text-gray-600">
                  ESP8266, Arduino & embedded systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">3+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">20+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">Full Stack</div>
            <div className="text-sm text-gray-600">Developer</div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TechStack;

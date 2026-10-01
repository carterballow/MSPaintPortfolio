export default function Projects() {
    const projects = [
      {
        title: "Hot Takes",
        description: "A full-stack social media platform built using with React, Node, TypeScript, Tailwind, and MongoDB. Relevant for debaters or casual social media users looking to share their thoughts without censorship.",
        image: "/hothleft.jpg?height=150&width=250",
        technologies: ["React", "Node.js", "MongoB"],
      },
      {
        title: "Ballow Fruit Co",
        description: "A live storefront for my family's fruit business with 500+ monthly users, 100+ orders a month, and $10,000+ raised for local communities. Includes a RAG meal planner that searches recipe, produce, and nutrition data to build personalized weekly meal plans.",
        image: "/ballowfruitco.png?height=150&width=250",
        technologies: ["Next.js", "Supabase", "Postgres", "Pgvector", "Gemini", "Stripe"],
      },
      {
        title: "LearningHub",
        description: "Best Web App and 2nd Overall at QWERHacks 2026. A learning management system with role-based dashboards that feeds live class data into Gemini to create quizzes, flashcards, and tutoring, plus a weakness detection engine built from assignment grades.",
        image: "/learninghub.png?height=150&width=250",
        technologies: ["Next.js", "Express.js", "MongoDB", "Gemini API", "JWT"],
      },
      {
        title: "MS Paint Clone",
        description: "Created a portfolio using tailwind, typescript and vercel for deployment to clone MS Paint and showcase my accomplishments.",
        image: "/portfolio3.png?height=150&width=250",
        technologies: ["TypeScript", "Vercel", "Tailwind"],
      },
      {
        title: "SafeWorld MUN",
        description: "Lua-powered Mock Model UN game on Roblox, featuring custom-built maps, dynamic debate mechanics, and intuitive interfaces for drafting resolutions and voting in real time.",
        image: "/safeworldmun.png?height=150&width=250",
        technologies: ["Lua", "Roblox Studio", "HTML"],
      },
      {
        title: "Night-City Crossy Road",
        description: "A 3D night-time take on classic Crossy Road with high-fidelity rendering and physics. Custom GLSL shaders for water caustics and Fresnel translucency run at 120 FPS, alongside 3D spatial audio and AABB collision.",
        image: "/crossyroad.png?height=150&width=250",
        technologies: ["TypeScript", "Three.js", "WebGL", "GLSL", "Web Audio API", "Vite"],
      },
    ]
  
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">My Projects</h2>
  
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="border-2 border-[#808080] bg-[#efefef] p-4">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-40 object-cover border border-[#808080]"
              />
              <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
              <p className="mt-1 text-sm">{project.description}</p>
              <div className="mt-2">
                <h4 className="text-sm font-bold">Technologies:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs bg-[#c0c0c0] border border-[#808080]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  

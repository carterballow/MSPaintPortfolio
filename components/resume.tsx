// Each role or project is stored as data, then drawn by the same JSX below.
// To edit the resume, change the text in these arrays.
const experience = [
    {
        company: "Amazon",
        roles: [
            {
                title: "Returning Management Intern",
                location: "San Diego, CA",
                period: "Jun. 2026 – Aug. 2026",
                bullets: [
                    "Built a delivery station dashboard tracking Sub-Same Day (SSD) volume, stow/pick rates, and projected misses.",
                    "Ingested Station Control Center (SCC) and QuickSight feeds with Python and AWS Lambda, using Amazon Bedrock to parse logs into floor-level action items.",
                    "Cut SSD Pareto time by 12% with automated workflows getting Under the Roof managers real-time insights.",
                ],
            },
            {
                title: "Management Intern",
                location: "Rialto, CA",
                period: "Jun. 2025 – Aug. 2025",
                bullets: [
                    "Automated daily and weekly idle time reports in Python from Amazon Redshift operations metrics.",
                    "Built a canceled-move alert on AWS Lambda, API Gateway, and CloudWatch, adopted by 100+ SoCal sites.",
                ],
            },
        ],
    },
    {
        company: "Engineering Society at UCLA (ESUC)",
        roles: [
            {
                title: "Software Engineer & Webmaster",
                location: "Los Angeles, CA",
                period: "Oct. 2025 – Present",
                bullets: [
                    "Serve as Webmaster for ESUC, maintaining the organization’s web presence of 800+ MAU total and contributing to UCLA Engineering club and activity pages serving over 6,000 engineering students.",
                    "Develop ESUC Club Finder, a React, Node.js, and MongoDB app for club discovery, filtering, and membership.",
                    "Manage traffic, push maintenance updates, and update DB and hosting configurations for all ESUC sites.",
                ],
            },
        ],
    },
    {
        company: "Creative Labs",
        roles: [
            {
                title: "Software Engineer",
                location: "Los Angeles, CA",
                period: "Oct. 2025 – Dec. 2025",
                bullets: [
                    "Built Express.js and MongoDB backend services for Bruin Bites, a UCLA app for local discounts and meals.",
                    "Developed and documented a RESTful API powering post generation, content filtering, and user relationships.",
                    "Oversaw full-stack integration between the Express.js API and React Native client for smooth app deployment.",
                ],
            },
        ],
    },
]

const projects = [
    {
        name: "Ballow Fruit Co",
        tech: "Next.js 16, React, Supabase, Postgres, Pgvector, RAG, Gemini 2.5 Flash, Stripe",
        bullets: [
            "Built a live B2C storefront that sustains 500+ MAU for my family’s fruit business, processing 100+ transactions via phone and email a month and raising $10,000+ total for local communities.",
            "Designed a RAG meal planner that queries 3 pgvector indexes in parallel across recipe, produce, and nutrition data, generating 350+ personalized weekly meal plans from 110+ embedded recipes per month.",
            "Implemented Supabase Auth with row-level security, real-time inventory tracking with stock decrement on checkout, and order fulfillment via Resend email with Stripe payments in beta.",
        ],
    },
    {
        name: "LearningHub",
        tech: "Next.js, Express.js, MongoDB, Google Gemini API, JWT",
        bullets: [
            "Best Web App & 2nd Overall at QWERHacks 2026; LMS with role-based dashboards and a context injection pipeline assembling Gemini prompts from live MongoDB data to scope AI quizzes, flashcards, and tutoring.",
            "Implemented weakness detection engine using DB population chains + grade aggregations from assignments.",
            "Deployed monorepo with env-conditional JWT and multi-turn Gemini chat reconstruction.",
        ],
    },
    {
        name: "Night-City Crossy Road",
        tech: "TypeScript, Three.js, WebGL, GLSL, Web Audio API, Vite",
        bullets: [
            "Engineered 3D immersive night simulation of classic crossy road with hi-fi rendering and physics based interaction.",
            "Authored GLSL shaders for water caustics + Fresnel translucency, sustaining 120 FPS.",
            "Integrated 3D HRTF spatial audio, AABB collision, and 20 other complex features for enhanced playability.",
        ],
    },
]

const skills = [
    { label: "Languages", items: "Java, Python, C, C++, SQL, JavaScript, TypeScript, HTML/CSS, Rust, Lua, Ruby, R, Go" },
    { label: "Frameworks & Runtimes", items: "React, Next.js, Vue, Material-UI, Tailwind, FastAPI, Node.js" },
    { label: "Developer Tools & IDEs", items: "Git, Docker, GitHub, VS Code, Visual Studio, PyCharm, Eclipse" },
    { label: "Cloud & Infrastructure", items: "Google Cloud Platform, AWS Lambda, AWS EC2, CloudWatch, Amazon Bedrock, Vercel" },
]

export default function Resume() {
    return (
        <div className="space-y-8">
            <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Resume</h2>

            <div className="border-2 border-[#808080] p-6 bg-[#efefef]">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">Carter Ballow</h1>
                    <p className="text-sm">760-525-4955 | me@carterballow.com | linkedin.com/in/carterballow | github.com/carterballow | carterballow.com</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EDUCATION</h2>
                    <div className="flex justify-between">
                        <p className="font-bold">University of California, Los Angeles (UCLA)</p>
                        <p>Sep. 2024 – Jun. 2028</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">B.S. Computer Science | Cumulative GPA: 3.89 | Hispanic Scholarship Fund (HSF) Scholar</p>
                        <p className="italic">Los Angeles, CA</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">EXPERIENCE</h2>
                    {experience.map((job) => (
                        <div key={job.company} className="mb-4">
                            <p className="font-bold">{job.company}</p>
                            {job.roles.map((role) => (
                                <div key={role.title} className="mb-2">
                                    <div className="flex justify-between text-sm">
                                        <p className="italic">{role.title}</p>
                                        <p className="italic">{role.location} | {role.period}</p>
                                    </div>
                                    <ul className="list-disc pl-5 mt-1 text-sm">
                                        {role.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">PROJECTS</h2>
                    {projects.map((project) => (
                        <div key={project.name} className="mb-3">
                            <p>
                                <span className="font-bold">{project.name}</span>
                                <span className="italic text-sm"> | {project.tech}</span>
                            </p>
                            <ul className="list-disc pl-5 mt-1 text-sm">
                                {project.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div>
                    <h2 className="text-lg font-bold border-b border-[#808080] mb-2">TECHNICAL SKILLS</h2>
                    <div className="space-y-1 text-sm">
                        {skills.map((skill) => (
                            <p key={skill.label}>
                                <span className="font-bold">{skill.label}:</span> {skill.items}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

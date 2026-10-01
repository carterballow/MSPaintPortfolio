export default function Experience() {
    const experiences = [
        {
            company: "Amazon · San Diego, CA",
            position: "Returning Management Intern",
            period: "Jun. 2026 - Aug. 2026",
            description:
                "Built a delivery station dashboard tracking Sub-Same Day (SSD) volume, stow/pick rates, and projected misses.\n" +
                "Ingested Station Control Center (SCC) and QuickSight feeds with Python and AWS Lambda, using Amazon Bedrock to parse logs into floor-level action items.\n" +
                "Cut SSD Pareto time by 12% with automated workflows getting Under the Roof managers real-time insights.",
        },
        {
            company: "Engineering Society at UCLA (ESUC) · Los Angeles, CA",
            position: "Software Engineer & Webmaster",
            period: "Oct. 2025 - Present",
            description:
                "Serve as Webmaster for ESUC, maintaining the organization’s web presence of 800+ MAU total and contributing to UCLA Engineering club and activity pages serving over 6,000 engineering students.\n" +
                "Develop ESUC Club Finder, a React, Node.js, and MongoDB app for club discovery, filtering, and membership.\n" +
                "Manage traffic, push maintenance updates, and update DB and hosting configurations for all ESUC sites.",
        },
        {
            company: "Creative Labs · Los Angeles, CA",
            position: "Software Engineer",
            period: "Oct. 2025 - Dec. 2025",
            description:
                "Built Express.js and MongoDB backend services for Bruin Bites, a UCLA app for local discounts and meals.\n" +
                "Developed and documented a RESTful API powering post generation, content filtering, and user relationships.\n" +
                "Oversaw full-stack integration between the Express.js API and React Native client for smooth app deployment.",
        },
        {
            company: "Amazon · Rialto, CA",
            position: "Management Intern",
            period: "Jun. 2025 - Aug. 2025",
            description:
                "Automated daily and weekly idle time reports in Python from Amazon Redshift operations metrics.\n" +
                "Built a canceled-move alert on AWS Lambda, API Gateway, and CloudWatch, adopted by 100+ SoCal sites.",
        },
        {
            company: "Effective Altruism @ UCLA",
            position: "Research Intern",
            period: "Apr. 2025 - Current",
            description:
                "Explored the role of AI safety, global health, and existential risk through Effective Altruism’s core missions of utilitarianism, longtermism and altruism.\n" +
                "Gained a deeper understanding of ethical prioritization, learning to evaluate trade-offs of artificial intelligence.",
        },
        {
            company: "CalTeach",
            position: "Teaching Assistant Intern",
            period: "Jan. 2025 - Mar. 2025",
            description:
                "Taught mathematical concepts by providing targeted tutoring and facilitating student problem-solving in classrooms. Tutored over 100 students in over 5 elementary grades.\n" +
                "Collaborated with local teachers implementing lesson plans designed to enhance students’ quantitative skills.",
        },
        {
            company: "AI Safety @ UCLA",
            position: "Research Intern",
            period: "Jan. 2025 - Mar. 2025",
            description:
                "Conducted research on the risks of AI policy levers, and the role of AI in government.\n" +
                "Led research on deep learning and its impacts on the future of computer science and the world at large.",
        },
    ]

    const education = [
        {
            institution: "University of California, Los Angeles",
            degree: "Bachelor of Science: Computer Science",
            period: "2024 - 2028",
        },
        {
            institution: "San Dieguito High School Academy",
            degree: "High School Diploma",
            period: "2020 - 2024",
        },
    ]

    return (
        <div className="space-y-8">
            <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Experience</h2>

            <div className="space-y-6">
                <h3 className="text-lg font-bold">Work History</h3>
                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-2 border-[#808080] p-4 bg-[#efefef]">
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <h4 className="font-bold">{exp.position}</h4>
                                <span className="text-sm">{exp.period}</span>
                            </div>
                            <div className="text-sm font-medium mt-1">{exp.company}</div>
                            <p className="mt-2 text-sm whitespace-pre-line">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-lg font-bold">Education</h3>
                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <div key={index} className="border-2 border-[#808080] p-4 bg-[#efefef]">
                            <div className="flex flex-col md:flex-row md:justify-between">
                                <h4 className="font-bold">{edu.degree}</h4>
                                <span className="text-sm">{edu.period}</span>
                            </div>
                            <div className="text-sm font-medium mt-1">{edu.institution}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
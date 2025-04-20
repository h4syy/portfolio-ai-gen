"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Server,
  Brain,
  Layers,
  Network,
  Cloud,
  Cpu,
} from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "FastAPI", icon: <Server className="h-6 w-6 text-green-400" /> },
    { name: "LLMs", icon: <Brain className="h-6 w-6 text-purple-400" /> },
    { name: "MCP", icon: <Network className="h-6 w-6 text-cyan-400" /> },
    { name: "AWS", icon: <Cloud className="h-6 w-6 text-yellow-400" /> },
    { name: "Docker", icon: <Layers className="h-6 w-6 text-blue-400" /> },
    { name: "MinIO", icon: <Database className="h-6 w-6 text-indigo-400" /> },
  ];

  const experiences = [
    {
      year: "Jul 2024 - Present",
      title: "AI Research Lead",
      company: "IME Pay",
      description:
        "Leading AI research initiatives and developing innovative solutions.",
    },
    {
      year: "Sep 2024 - Jul 2024",
      title: "AI Researcher/Software Engineer",
      company: "IME Pay",
      description: "I Studied hard and figured out the basics of ML/DL.",
    },
    {
      year: "May 2022 - Mar 2023",
      title: "SWE Intern",
      company: "Innovate Nepal Group",
      description: "Went rogue with Angular and learnt 'Software Engineering'.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0 lg:ml-auto xl:w-72 xl:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-[2px]"></div>
              <div className="absolute inset-[3px] rounded-full bg-gray-900"></div>
              <div className="absolute inset-[6px] rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                <img
                  src="/prof.jpg?height=250&width=250"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8 max-w-xl mx-auto"
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300">
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      {skill.icon}
                      <span className="mt-2 text-sm md:text-base text-gray-300">
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">
              My Journey
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-cyan-500 before:to-purple-300">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-gray-800 shadow-md shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-300 z-10">
                    <Cpu className="w-4 h-4 text-purple-400" />
                  </div>

                  <div className="ml-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-lg shadow-lg shadow-purple-500/5 group-hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="text-sm text-cyan-400 mb-1">{exp.year}</div>
                    <div className="font-bold text-lg">{exp.title}</div>
                    <div className="text-purple-300 text-sm mb-2">
                      {exp.company}
                    </div>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

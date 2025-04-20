"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Brain, Cpu, Database } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "LLM Inference Engine",
      description:
        "High-performance inference engine for DeepSeek LLM models with optimized throughput.",
      tags: ["AI", "Python", "CUDA"],
      icon: <Brain className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Vector Search API",
      description:
        "Scalable API for semantic search across documents using embeddings and PostgreSQL.",
      tags: ["FastAPI", "Embeddings", "PostgreSQL"],
      icon: <Database className="h-8 w-8 text-cyan-400" />,
    },
    {
      title: "AI Video Summarizer",
      description:
        "Real-time video content analysis and summarization using multimodal AI models.",
      tags: ["Computer Vision", "NLP", "FastAPI"],
      icon: <Cpu className="h-8 w-8 text-green-400" />,
    },
    {
      title: "Document Intelligence",
      description:
        "System for extracting structured data from unstructured documents using ML.",
      tags: ["OCR", "NLP", "React"],
      icon: <Github className="h-8 w-8 text-yellow-400" />,
    },
    {
      title: "Conversational Agent",
      description:
        "End-to-end conversational AI system with memory and tool-calling capabilities.",
      tags: ["LLM", "RAG", "Tools"],
      icon: <Brain className="h-8 w-8 text-indigo-400" />,
    },
    {
      title: "AI-Powered Knowledge Base",
      description:
        "Dynamic knowledge base that automatically updates and organizes information using AI.",
      tags: ["RAG", "Vector DB", "FastAPI"],
      icon: <Database className="h-8 w-8 text-red-400" />,
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
    <section id="projects" className="py-20 relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A showcase of my recent work in AI research and development, spanning
          from infrastructure to applications.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="h-full"
          >
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm h-full overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-6 relative">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-gray-900/50 text-gray-300 border-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 relative">
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 h-auto"
                >
                  <span className="mr-2">View Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardFooter>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-[30px] rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Terminal, Brain, ArrowRight } from "lucide-react";

export default function DemoSection() {
  const demos = [
    {
      title: "Document Analysis",
      description:
        "Upload and analyze documents with AI-powered insights and extraction",
      icon: <FileText className="h-10 w-10 text-purple-400" />,
      color: "from-purple-500/20 to-purple-700/20",
    },
    {
      title: "File-based Q&A",
      description: "Upload documents and get instant answers",
      icon: <Brain className="h-10 w-10 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-700/20",
    },
    {
      title: "Task Assistant",
      description:
        "Simple AI assistant for everyday tasks and information lookup",
      icon: <Terminal className="h-10 w-10 text-green-400" />,
      color: "from-green-500/20 to-green-700/20",
    },
  ];

  return (
    <section id="demo" className="py-20 relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Demo Preview</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience the power of AI through these interactive demos. Each tool
          showcases different capabilities of my research.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold mb-6 text-purple-300">
            Interactive AI Tools
          </h3>
          <p className="text-gray-300">
            These demos showcase practical applications of my research in
            natural language processing, document understanding, and agent-based
            systems.
          </p>
          <p className="text-gray-300">
            Each tool is designed with a focus on user experience, performance,
            and accuracy, leveraging state-of-the-art AI models and techniques.
          </p>
          <div className="pt-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-6 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
              size="lg"
            >
              Launch Demo Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm overflow-hidden group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${demo.color} mr-4`}
                      >
                        {demo.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {demo.title}
                        </h4>
                        <p className="text-gray-400">{demo.description}</p>
                      </div>
                      <div className="ml-auto">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-400 hover:text-white hover:bg-gray-700/50"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 bg-gray-900/70 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="h-20 flex items-center justify-center">
                        <span className="text-gray-500">
                          Demo interface preview
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import TextReveal from "@/components/animations/TextReveal";

const skillCategories = [
    {
        title: "Data & Analytics",
        skills: ["PostgreSQL", "Python (Pandas, Scikit-learn)", "SQL", "Metabase", "Data Visualization"],
    },
    {
        title: "Automation",
        skills: ["n8n", "Webhooks", "API Integrations", "Zapier"],
    },
    {
        title: "Marketing",
        skills: ["Meta Ads", "Google Ads", "Email Marketing (Courier)", "Landing Pages"],
    },
    {
        title: "Development",
        skills: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
    {
        title: "Machine Learning",
        skills: ["Random Forest", "XGBoost", "SMOTE", "Feature Engineering"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        <TextReveal>Technical Arsenal</TextReveal>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl">
                        The tools I use to build scalable growth systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="p-6 h-full hover:border-accent-primary/20 bg-bg-secondary/50">
                                <h3 className="text-xl font-bold text-text-primary mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge key={skill} variant="outline" className="bg-bg-tertiary/50 hover:bg-accent-primary/10 hover:border-accent-primary/30 transistion-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

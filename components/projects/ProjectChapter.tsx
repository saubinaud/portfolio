"use client";

import { Project } from "@/lib/projects";
import { VariantFactory } from "./variants/VariantFactory";

export default function ProjectChapter({ project, index }: { project: Project; index: number }) {
    return (
        <VariantFactory project={project} index={index} />
    );
}

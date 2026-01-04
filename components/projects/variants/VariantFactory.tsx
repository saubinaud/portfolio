"use client";

import { Project } from "@/lib/projects";
import { QuantLayout } from "./QuantLayout";
import { NetworkLayout } from "./NetworkLayout";
import { ConstructLayout } from "./ConstructLayout";
import { InterfaceLayout } from "./InterfaceLayout";

export interface VariantProps {
    project: Project;
    index: number;
}

export function VariantFactory({ project, index }: VariantProps) {
    switch (project.layout) {
        case "quant":
            return <QuantLayout project={project} index={index} />;
        case "network":
            return <NetworkLayout project={project} index={index} />;
        case "construct":
            return <ConstructLayout project={project} index={index} />;
        case "interface":
            return <InterfaceLayout project={project} index={index} />;
        default:
            return <QuantLayout project={project} index={index} />;
    }
}

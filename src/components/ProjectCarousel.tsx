import * as React from "react";

interface Project {
  title: string;
  description?: string;
  image?: string;
}

interface PastProjectsScrollerProps {
  projects: Project[];
}

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsCarousel({
  projects,
}: PastProjectsScrollerProps) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    {project.title}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

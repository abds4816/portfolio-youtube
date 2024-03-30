import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, title }) => {
  return (
    <article className="relative group border rounded-md shadow cursor-pointer overflow-hidden">
      <figure className="absolute size-full top-0 left-0 bg-gradient-to-t from-background/70 to-transparent" />
      <Image
        src={imageUrl}
        width={220}
        height={220}
        alt={title}
        className="size-full rounded-sm group-hover:scale-105 transition"
      />
      <h3 className="absolute bottom-2 start-2 text-foreground group-hover:text-primary capitalize truncate font-semibold">
        {title}
      </h3>
    </article>
  );
};

export default ProjectCard;

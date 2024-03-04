import { type SchemaTypeDefinition } from "sanity";

import skills from "./schemas/skills";
import projects from "./schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, projects],
};

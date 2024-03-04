import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("A title of min. 10 characters is required"),
        Rule.max(100).error("max 100"),
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required().min(3).max(1000),
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "demoLink",
      type: "url",
      title: "Demo Link",
    }),
    defineField({
      name: "githubLink",
      type: "url",
      title: "Github Repository Link",
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      title: "Published At",
      validation: (Rule) =>
        Rule.min(new Date("2020-08-25").toDateString()).max(
          new Date().toDateString()
        ),
    }),
    defineField({
      name: "isResponsive",
      type: "boolean",
      title: "Is Responsive",
      initialValue: true,
    }),
  ],
});

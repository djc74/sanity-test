export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "caption",
      title: "Caption",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    }
  ],

  preview: {
    select: {
      title: "caption",
      media: "mainImage"
    }
  }
};

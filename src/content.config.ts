import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  publishDate: z.coerce.date(),
  author: z.string().default('B3 Team')
});

const curriculum = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number()
  })
});

const projectSpotlights = defineCollection({ type: 'content', schema: blogSchema });
const mentorInterviews = defineCollection({ type: 'content', schema: blogSchema });
const communityUpdates = defineCollection({ type: 'content', schema: blogSchema });

export const collections = {
  curriculum,
  'project-spotlights': projectSpotlights,
  'mentor-interviews': mentorInterviews,
  'community-updates': communityUpdates
};

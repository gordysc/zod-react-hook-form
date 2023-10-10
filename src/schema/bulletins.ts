import { z } from "zod";

export const bulletinSchema = z.object({
  title: z.string().min(1).max(32),
  content: z.string().min(1).max(4096)
});

export type Bulletin = z.infer<typeof bulletinSchema>;


import z from 'zod';

const configSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_TEST_API_URL: z.string().optional(),
})

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_TEST_API_URL: process.env.NEXT_PUBLIC_TEST_API_URL,
});

if (!configProject.success) {
  console.log(configProject.error.issues);
  throw new Error("Invalid config")
}

const envConfig = configProject.data;

export default envConfig
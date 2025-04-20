
import z from 'zod';

const configSchema = z.object({
  API_URL: z.string(),
})

const configProject = configSchema.safeParse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
});

if (!configProject.success) {
  console.log(configProject.error.issues);
  throw new Error("Invalid config")
}

const envConfig = configProject.data;

export default envConfig
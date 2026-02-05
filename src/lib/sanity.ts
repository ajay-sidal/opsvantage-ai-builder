import { createClient } from "@sanity/client"

export function createSanityClient(dataset: string) {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset,
    apiVersion: "2023-10-01",
    token: process.env.SANITY_WRITE_TOKEN!,
    useCdn: false
  })
}

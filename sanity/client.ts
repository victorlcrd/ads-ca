// sanity/client.ts

import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = '2023-05-03' // Use uma data de API recente

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` se você quiser sempre os dados mais recentes na hora
})
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-11-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const serviceId = assertValue(
  process.env.NEXT_PUBLIC_SERVICE_ID,
  'Missing environment variable: NEXT_PUBLIC_SERVICE_ID'
)
export const templateId = assertValue(
  process.env.NEXT_PUBLIC_TEMPLATE_ID,
  'Missing environment variable: NEXT_PUBLIC_TEMPLATE_ID'
)
export const publicKey = assertValue(
  process.env.NEXT_PUBLIC_PUBLIC_KEY,
  'Missing environment variable: NEXT_PUBLIC_PUBLIC_KEY'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

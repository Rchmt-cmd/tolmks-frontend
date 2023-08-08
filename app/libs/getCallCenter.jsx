export default async function getCallCenter() {
  const response = await fetch(`${process.env.ENDPOINT}/call-center`, {
    next: {revalidate:10}
  })

  if (!response.ok) {
    throw new Error('failed to fetch call center data')
  }

  return response.json()
}

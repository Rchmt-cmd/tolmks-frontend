export default async function getHome() {
  const response = await fetch(`${process.env.ENDPOINT}/`, {
    next: {revalidate: 3600}
  })

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  return response.json()
}

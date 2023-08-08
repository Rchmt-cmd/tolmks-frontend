export default async function getSejarah() {
  const response = await fetch(`${process.env.ENDPOINT}/sejarah`, {
    next: {revalidate:10}
  })

  if (!response.ok) {
    throw new Error('failed to fetch sejarah data')
  }

  return response.json()
}

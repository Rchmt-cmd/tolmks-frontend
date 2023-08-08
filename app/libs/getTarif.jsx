export default async function getTarif() {
  const response = await fetch(`${process.env.ENDPOINT}/tarif`, {
    next: {revalidate:10}
  })

  if (!response.ok) {
    throw new Error('failed to fetch tarif data')
  }

  return response.json()
}

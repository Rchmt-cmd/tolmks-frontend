export default async function getBillboard() {
  const response = await fetch(`${process.env.ENDPOINT}/billboard`, {
    next: {revalidate: 3600}
  })

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  return response.json()
}

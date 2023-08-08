export default async function getCsr() {
  const response = await fetch(`${process.env.ENDPOINT}/csr`, {
    next: {revalidate:10}
  })

  if (!response.ok) {
    throw new Error('failed to fetch csr data')
  }

  return response.json()
}

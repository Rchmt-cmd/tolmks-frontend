export default async function getNearby() {
  const response = await fetch(`http://127.0.0.1:8000/api/nearby`, {
    next: {revalidate: 3600}
  })

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }

  return response.json()
}

export default async function getMedia() {
  const response = await fetch(`${process.env.ENDPOINT}/media`, {
    next : {revalidate: 3600}
  })

  if (!response.ok) {
    throw new Error('failed to fetch data');
  }
  
  return response.json()
}
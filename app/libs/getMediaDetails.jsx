export default async function getMediaDetails(param) {
  const response = await fetch(`${process.env.ENDPOINT}/media/${param}`, {
    next: {revalidate: 10}
  })

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }
  
  return response.json()
}

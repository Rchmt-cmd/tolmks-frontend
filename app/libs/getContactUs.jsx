export default async function getContactUs() {
  const response = await fetch(`${process.env.ENDPOINT}/contact-us`, {
    next: {revalidate: 10}
  })

  if (!response.ok) {
    throw new Error('failed to fetch data');
  }
  
  return response.json()
}

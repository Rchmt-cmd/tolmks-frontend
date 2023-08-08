export default async function getProfile() {
  const response = await fetch(`${process.env.ENDPOINT}/profile`, {
    next: {revalidate:10}
  })
  
  if(!response.ok) {
    throw new Error('failed to fetch profile data')
  }

  return response.json()
}

export default async function getProfilUser() {
  const response = await fetch(`${process.env.ENDPOINT}/profil-user`, {
    cache: "no-store"
  })

  if (!response.ok) {
    throw new Error(response.status)
  }
  
  return response.json()
}

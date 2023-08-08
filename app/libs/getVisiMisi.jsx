export default async function getVisiMisi() {
  const response = await fetch(`${process.env.ENDPOINT}/visi-misi`)

  if (!response.ok) {
    throw new Error('failed to fetch visi-misi data')
  }

  return response.json()
}

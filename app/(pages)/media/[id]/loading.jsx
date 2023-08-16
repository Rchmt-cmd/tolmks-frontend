import dynamic from "next/dynamic"

const LoadingSpinner = dynamic(() => import('@/app/_components/LoadingSpinner'))

export default function loading() {
  return <LoadingSpinner />
}

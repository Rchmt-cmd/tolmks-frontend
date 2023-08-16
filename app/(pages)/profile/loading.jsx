import dynamic from 'next/dynamic'

const LoadingSpinner = dynamic(() => import('@/app/_components/LoadingSpinner'))

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSpinner />
}
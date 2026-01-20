import { Topbar } from '@/components/layout/top-bar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className='flex-container'>
        <Topbar />
      </div>
  )
}

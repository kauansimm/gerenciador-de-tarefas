import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className='flex-container min-h-dvh flex-col items-start gap-9 px-8 py-4.5 lg:px-16 lg:py-9'>
            <Outlet />
        </div>
    )
}
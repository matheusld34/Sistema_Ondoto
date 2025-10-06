import { SidebarDashboard } from "./_components/sidebar"


export default function DashboardLayot({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SidebarDashboard>
                {children}
            </SidebarDashboard>

        </>
    )
}
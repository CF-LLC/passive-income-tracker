import type React from "react"
interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className="flex flex-1 flex-col space-y-6" {...props}>
      {children}
    </div>
  )
}

export function DisplayTitle({ title }: { title: string }) {
  return <div className="text-xl font-mono mb-2 mt-[-.25rem]">{title}</div>
}

export function DisplayItems({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function Display({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-base-6 p-4 rounded-md bg-base-2 mt-4">
      {children}
    </div>
  )
}

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <section className="max-w-[1440px] m-auto px-10">{children}</section>
  )
}
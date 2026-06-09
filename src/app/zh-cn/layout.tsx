import Navbar from '@/components/NavbarZhCn'
import ErrorBoundary from '@/components/ErrorBoundary'
import Footer from '@/components/FooterZhCn'

export default function ZhCnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AnimatedBackground from '../components/AnimatedBackground'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'
import ScrollToTop from '../components/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="relative min-h-svh">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <AnimatedBackground />
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
              <span className="sr-only">Loading page</span>
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
            </div>
          }
        >
          <PageTransition>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

import { useState } from 'react'
export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 hero">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 hero-content">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Clean Blog
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A Blog Theme by Start Bootstrap
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

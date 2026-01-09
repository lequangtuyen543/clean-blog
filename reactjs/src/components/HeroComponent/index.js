import { useState } from 'react'
import './Hero.scss';
export const HeroComponent = (props) => {
  const { thumbnail, title, subtitle } = props;

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 hero-post" style={{backgroundImage: `url('${thumbnail}')`}}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 hero-content">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              {title}
            </h1>
            <p className="mt-6 text-xl font-medium text-pretty text-gray-500 sm:text-2xl/8">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

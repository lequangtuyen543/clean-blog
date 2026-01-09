import { useState } from 'react'
import './HeroPost.scss';
export const HeroPost = (props) => {
  const { data } = props;

  console.log('data hero post', data);

  return (
    <>
      {data && (
        <div className="relative isolate px-6 pt-14 lg:px-8 hero-post">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 hero-content">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                {data.title}
              </h1>
              <p className="mt-6 text-xl font-medium text-pretty text-gray-500 sm:text-2xl/8">
                {data.subtitle}
              </p>
              <p className="mt-8 text-lg font-light italic text-pretty text-gray-500 sm:text-xl/8">
                Posted by {data.createdBy} on {data.createdAt}
              </p>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

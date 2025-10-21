'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={`${className} overflow-hidden`}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <Spline
          scene={scene}
          style={{
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%'
          }}
        />
      </Suspense>
    </div>
  )
}
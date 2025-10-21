'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden border-gray-600">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content - Text */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 relative z-10 flex flex-col justify-center">
          <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-100 max-w-lg leading-relaxed">
            Outperform your competitors and be future proof by using AI automation
          </p>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative min-h-[200px] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </Card>
  )
}
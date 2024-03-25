'use client'
import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 p-6"> 
          <img
          src='https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className="rounded-3xl"
          />
        </div>
        <div className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 p-6">
        <img
          src='https://images.unsplash.com/photo-1566732500818-d76031ac0421?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className="rounded-3xl"
          />
        </div>
        <div className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 p-6">
        <img
          src='https://images.unsplash.com/photo-1510274460854-4b7ad642d3a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className="rounded-3xl"
          />
        </div>
        <div className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 p-6">
        <img
          src='https://images.unsplash.com/photo-1566732500818-d76031ac0421?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}
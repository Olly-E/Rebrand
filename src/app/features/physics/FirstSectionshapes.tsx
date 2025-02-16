'use client'

import { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { Button } from '@/app/Components'

const SHAPES = [
  '/assets/home/yellow oval.svg',
  '/assets/home/red triangle.svg',
  '/assets/home/white semicircle.svg',
  '/assets/home/green-circle.svg',
  '/assets/home/blue-rectangle.svg',
]

const FirstSectionShapes = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<HTMLDivElement | null>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Disconnect after triggering once
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect() // Cleanup
  }, [])

  useEffect(() => {
    if (!isVisible || !sceneRef.current || !sectionRef.current) return

    const engine = Matter.Engine.create()
    engineRef.current = engine
    const world = engine.world
    const shapeBodies = SHAPES.map((src, index) => {
      const x = 200 + index * 150
      const y = 0
      const options = {
        restitution: 0.8,
        friction: 0.05,
        density: 0.01,
        render: { sprite: { texture: src, xScale: 1, yScale: 1 } },
      }

      if (src.includes('triangle')) {
        return Matter.Bodies.polygon(x, y, 3, 50, options) // Triangle
      }
      if (src.includes('rectangle')) {
        return Matter.Bodies.rectangle(x, y, 70, 70, options) // Square
      }
      if (src.includes('semicircle')) {
        return Matter.Bodies.fromVertices(
          x,
          y,
          [
            [
              { x: -50, y: 0 },
              { x: 50, y: 0 },
              { x: 40, y: -40 },
              { x: -40, y: -40 },
            ],
          ], // Approximate semicircle
          options
        )
      }
      if (src.includes('oval') || src.includes('quarter')) {
        return Matter.Bodies.fromVertices(
          x,
          y,
          [
            [
              { x: 0, y: 0 },
              { x: 50, y: 50 },
              { x: 0, y: 100 },
            ],
          ], // Approximate quarter circle
          options
        )
      }

      return Matter.Bodies.circle(x, y, 50, options) // Default to circle
    })

    Matter.World.add(world, shapeBodies)

    // Get container dimensions
    const section = sectionRef.current
    const { width, height } = section.getBoundingClientRect()

    // Set correct render dimensions
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
      },
    })

    // **Static Bodies (Text & Buttons)**
    const elements = section.querySelectorAll('h5, h2, button')
    const staticBodies = Array.from(elements).map((el) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const sectionRect = section.getBoundingClientRect()

      return Matter.Bodies.rectangle(
        left + width / 2 - sectionRect.left, // Adjust for section position
        top + height / 2 - sectionRect.top + window.scrollY, // Adjust for scroll
        width,
        height,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      )
    })
    Matter.World.add(world, staticBodies)

    // **Boundaries to Keep Shapes Inside Section**
    const boundaries = [
      Matter.Bodies.rectangle(width / 2, 0, width, 10, {
        isStatic: true,
        render: { visible: false },
      }), // Top wall
      Matter.Bodies.rectangle(width / 2, height + 5, width, 10, {
        isStatic: true,
        render: { visible: false },
      }), // Move bottom wall slightly down
      Matter.Bodies.rectangle(0, height / 2, 10, height, {
        isStatic: true,
        render: { visible: false },
      }), // Left wall
      Matter.Bodies.rectangle(width, height / 2, 10, height, {
        isStatic: true,
        render: { visible: false },
      }), // Right wall
    ]
    Matter.World.add(world, boundaries)

    // **Mouse Constraint (Drag Shapes)**
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }, // Hide constraint line
      },
    })
    Matter.World.add(world, mouseConstraint)
    render.mouse = mouse // Bind mouse to render

    // Run simulation
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, engine)
    Matter.Render.run(render)

    return () => {
      Matter.Render.stop(render)
      Matter.World.clear(world, false)
      Matter.Engine.clear(engine)
      Matter.Runner.stop(runner)
      render.canvas.remove()
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} className="absolute container h-[70vh] z-1">
      <div className="flex-col mt-40">
        <div className="h-fit flex justify-center"></div>
        <Button className="w-[244px] h-[59.69px] mx-auto block text-center">
          LET&apos;S CONNECT
        </Button>
      </div>
      <div className="mt-[10%] flex gap-10 flex-col lg:flex-row items-center justify-between relative">
        <div className="relative">
          <h5
            className="text-sm sm:text-[16px] font-[700] sm:w-[569px] leading-[30px] text-center lg:text-left"
            data-animation="paragraph"
          >
            WE BELIEVE THAT EVERY BRAND IS MORE THAN JUST A LOGO OR A WEBSITE.
            OUR TEAM OF EXPERIENCED DESIGNERS AND DEVELOPERS CREATE VISUAL
            SOLUTIONS THAT CONNECT WITH YOUR AUDIENCE.
          </h5>
        </div>
        <div className="w-full sm:w-auto">
          <div className="flex items-center justify-between relative">
            <h2 className="text-head-100 sm:text-[48px] text-red-state leading-[70px] explore-text">
              THE BRAND -
            </h2>
          </div>
          <h2 className="text-head-100 sm:text-[48px] text-white-state leading-[40px]">
            FOR YOUR BRAND
          </h2>
        </div>
        ,
      </div>
      <div
        ref={sceneRef}
        className="absolute inset-0 z-[1]"
        style={{ overflow: 'hidden' }}
      />
    </div>
  )
}

export default FirstSectionShapes

'use client'
import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

const flags = [
  '/assets/home/fs1.svg',
  '/assets/home/fs2.svg',
  '/assets/home/fs3.svg',
  '/assets/home/fs4.svg',
  '/assets/home/fs5.svg',
  '/assets/home/fs6.svg',
  '/assets/home/fs7.svg',
  '/assets/home/fs8.svg',
]

const GravityShapes = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement>
}) => {
  const sceneRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const ballsRef = useRef<Matter.Body[]>([]) // Store references to shapes

  useEffect(() => {
    if (!sceneRef.current || !sectionRef.current) return

    const engine = Matter.Engine.create()
    engineRef.current = engine
    const world = engine.world

    const containerWidth =
      sceneRef.current.parentElement?.clientWidth || window.innerWidth
    const containerHeight =
      sceneRef.current.parentElement?.clientHeight || window.innerHeight

    const initialY = containerHeight * 0.2 // Start at 20% of the container height

    const render = Matter.Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: 'transparent',
        wireframes: false,
      },
    })

    // **Walls & Boundaries**
    const ground = Matter.Bodies.rectangle(
      containerWidth / 2,
      containerHeight,
      containerWidth,
      20,
      { isStatic: true, render: { fillStyle: 'transparent' } }
    )
    const leftWall = Matter.Bodies.rectangle(
      0,
      containerHeight / 2,
      20,
      containerHeight,
      { isStatic: true, render: { fillStyle: 'transparent' } }
    )
    const rightWall = Matter.Bodies.rectangle(
      containerWidth,
      containerHeight / 2,
      20,
      containerHeight,
      { isStatic: true, render: { fillStyle: 'transparent' } }
    )
    Matter.World.add(world, [ground, leftWall, rightWall])

    // **Enable Dragging**
    const mouse = Matter.Mouse.create(render.canvas)
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    })
    Matter.World.add(world, mouseConstraint)
    render.mouse = mouse

    // **Preload Images Before Adding to Physics**
    const preloadImages = (srcArray: string[]) =>
      Promise.all(
        srcArray.map((src) => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image()
            img.src = src
            img.onload = () => resolve(img)
            img.onerror = reject
          })
        })
      )

    preloadImages(flags)
      .then((loadedImages) => {
        ballsRef.current = loadedImages.map((img, index) => {
          const x = 100 + index * 160
          const y = initialY
          let body

          if (index === 0 || index === 1 || index === 2 || index === 4) {
            body = Matter.Bodies.rectangle(x, y, 93, 93, {
              restitution: 0.8,
              friction: 0.05,
              density: 0.01,
              render: {
                sprite: { texture: flags[index], xScale: 1, yScale: 1 },
              },
            })
          } else if (index === 3) {
            body = Matter.Bodies.circle(x, y, 46.5, {
              restitution: 0.8,
              friction: 0.05,
              density: 0.01,
              render: {
                sprite: { texture: flags[index], xScale: 1, yScale: 1 },
              },
            })
          } else if (index === 6) {
            body = Matter.Bodies.rectangle(x, y, 140, 93, {
              restitution: 0.8,
              friction: 0.05,
              density: 0.01,
              render: {
                sprite: { texture: flags[index], xScale: 1, yScale: 1 },
              },
            })
          } else {
            body = Matter.Bodies.circle(x, y, 46.5, {
              restitution: 0.8,
              friction: 0.05,
              density: 0.01,
              render: {
                sprite: { texture: flags[index], xScale: 1, yScale: 1 },
              },
            })
          }

          return body
        })
        Matter.World.add(world, ballsRef.current)
      })
      .catch((err) => console.error('Error loading images:', err))

    // **Create Static Bodies for Text Elements**
    const textElements = sectionRef.current.querySelectorAll('p, h3, button')
    textElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const textBody = Matter.Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        { isStatic: true, render: { fillStyle: 'transparent' } }
      )
      Matter.World.add(world, textBody)
    })

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
  }, [sectionRef])

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 z-[1] container mx-auto h-full"
    />
  )
}

export default GravityShapes

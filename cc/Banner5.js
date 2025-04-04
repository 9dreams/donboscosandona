import { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import { Container } from '@mui/material'

export default function Banner5() {
  const targetCounts = [68, 43, 15, 432, 533, 98.7, 93.4, 98]
  const animationDuration = 2000
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const cardRefs = useRef([
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ])

  const cardImages = [
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDM2IDM2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMgMTlhMSAxIDAgMCAxLS43MS0uMjlMMTggNC40MUwzLjcxIDE4LjcxQTEgMSAwIDAgMSAyLjMgMTcuM2wxNS0xNWExIDEgMCAwIDEgMS40MSAwbDE1IDE1QTEgMSAwIDAgMSAzMyAxOSIgY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xOCA3Ljc5TDYgMTkuODNWMzJhMiAyIDAgMCAwIDIgMmg3VjI0aDZ2MTBoN2EyIDIgMCAwIDAgMi0yVjE5Ljc2WiIgY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzZ2MzZIMHoiLz48L3N2Zz4=', // Card 1
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMCAxN2EyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMkg5LjQ2Yy4zNS42MS41NCAxLjMuNTQgMmgxMHYxMWgtOXYybTQtMTB2Mkg5djEzSDd2LTZINXY2SDN2LThIMS41VjlhMiAyIDAgMCAxIDItMnpNOCA0YTIgMiAwIDAgMS0yIDJhMiAyIDAgMCAxLTItMmEyIDIgMCAwIDEgMi0yYTIgMiAwIDAgMSAyIDIiIC8+Cjwvc3ZnPg==', // Card 2
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEgNy41YTUuNSA1LjUgMCAwIDEgNy42NjQtNS4wNThhLjc1Ljc1IDAgMCAxIC4yMzUgMS4yMkwxNi4zMTEgNi4yNWwxLjQ0IDEuNDRsMi41ODctMi41OWEuNzUuNzUgMCAwIDEgMS4yMi4yMzZhNS41IDUuNSAwIDAgMS02LjM0NCA3LjUxMkw2LjkwMiAyMS4xNkEyLjg3MSAyLjg3MSAwIDEgMSAyLjg0IDE3LjFsOC4zMTEtOC4zMTJBNS41IDUuNSAwIDAgMSAxMSA3LjVtNS41LTRhNCA0IDAgMCAwLTMuNzk0IDUuMjdhLjc1Ljc1IDAgMCAxLS4xODEuNzY4TDMuOTAyIDE4LjE2QTEuMzcxIDEuMzcxIDAgMCAwIDUuODQgMjAuMWw4LjYyNC04LjYyNWEuNzUuNzUgMCAwIDEgLjc2OC0uMThhNCA0IDAgMCAwIDUuMjQ2LTQuMjEzbC0xLjg0NSAxLjg0NGExLjI1IDEuMjUgMCAwIDEtMS43NjcgMGwtMS43OTMtMS43OTNhMS4yNSAxLjI1IDAgMCAxIDAtMS43NjhsMS44NDQtMS44NDRBNCA0IDAgMCAwIDE2LjUgMy41Ii8+PC9zdmc+', // Card 3
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xOSA1bC03LTNsLTcgM2wzLjUgMS41djJTOS42NjcgOCAxMiA4czMuNS41IDMuNS41di0yem0wIDB2NG0tMy41LS41djFhMy41IDMuNSAwIDEgMS03IDB2LTFtLS43MTcgOC4yMDNjLTEuMS42ODUtMy45ODYgMi4wODItMi4yMjkgMy44MzFDNi40MTMgMjEuMzkgNy4zNyAyMiA4LjU3MSAyMmg2Ljg1OGMxLjIwMiAwIDIuMTU4LS42MTEgMy4wMTctMS40NjZjMS43NTctMS43NDktMS4xMjgtMy4xNDYtMi4yMjktMy44M2E3Ljk5IDcuOTkgMCAwIDAtOC40MzQgMCIgY29sb3I9IiNmZmYiLz48L3N2Zz4=', // Card 4
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuODc1IDIwcS4xIDAgLjItLjA1dC4xNS0uMWw4LjItOC4ycS4zLS4zLjQzOC0uNjc1dC4xMzctLjc1cTAtLjQtLjEzNy0uNzYzdC0uNDM4LS42MzdsLTQuMjUtNC4yNXEtLjI3NS0uMy0uNjM4LS40MzdUMTQuNzc2IDRxLS4zNzUgMC0uNzUuMTM4dC0uNjc1LjQzN2wtLjI3NS4yNzVsMS44NSAxLjg3NXEuMzc1LjM1LjU1Ljh0LjE3NS45NXEwIDEuMDUtLjcxMiAxLjc2M3QtMS43NjMuNzEycS0uNSAwLS45NjItLjE3NXQtLjgxMy0uNTI1TDkuNTI1IDguNEw1LjE1IDEyLjc3NXEtLjA3NS4wNzUtLjExMi4xNjNUNSAxMy4xMjVxMCAuMi4xNS4zNjN0LjM1LjE2MnEuMSAwIC4yLS4wNXQuMTUtLjFsMy40LTMuNGwxLjQgMS40bC0zLjM3NSAzLjRxLS4wNzUuMDc1LS4xMTIuMTYzdC0uMDM4LjE4N3EwIC4yLjE1LjM1dC4zNS4xNXEuMSAwIC4yLS4wNXQuMTUtLjFsMy40LTMuMzc1bDEuNCAxLjRsLTMuMzc1IDMuNHEtLjA3NS4wNS0uMTEyLjE1dC0uMDM4LjJxMCAuMi4xNS4zNXQuMzUuMTVxLjEgMCAuMTg4LS4wMzh0LjE2Mi0uMTEybDMuNC0zLjM3NWwxLjQgMS40bC0zLjQgMy40cS0uMDc1LjA3NS0uMTEyLjE2MnQtLjAzOC4xODhxMCAuMi4xNjMuMzV0LjM2Mi4xNW0tLjAyNSAycS0uOTI1IDAtMS42MzctLjYxMnQtLjgzOC0xLjUzOHEtLjg1LS4xMjUtMS40MjUtLjd0LS43LTEuNDI1cS0uODUtLjEyNS0xLjQxMi0uNzEyVDUuMTUgMTUuNnEtLjk1LS4xMjUtMS41NS0uODI1dC0uNi0xLjY1cTAtLjUuMTg4LS45NjJ0LjUzNy0uODEzbDUuOC01Ljc3NUwxMi44IDguODVxLjA1LjA3NS4xNS4xMTN0LjIuMDM3cS4yMjUgMCAuMzc1LS4xMzd0LjE1LS4zNjNxMC0uMS0uMDM4LS4ydC0uMTEyLS4xNUw5Ljk1IDQuNTc1cS0uMjc1LS4zLS42MzctLjQzN1Q4LjU1IDRxLS4zNzUgMC0uNzUuMTM4dC0uNjc1LjQzN0wzLjYgOC4xMjVxLS4yMjUuMjI1LS4zNzUuNTI1dC0uMi42dDAgLjYxM3QuMi41ODdsLTEuNDUgMS40NXEtLjQyNS0uNTc1LS42MjUtMS4yNjJUMSA5LjI1dC4zNS0xLjM2MnQuODI1LTEuMTg4TDUuNyAzLjE3NVE2LjMgMi42IDcuMDM4IDIuM1Q4LjU1IDJ0MS41MTMuM3QxLjMxMi44NzVsLjI3NS4yNzVsLjI3NS0uMjc1cS42LS41NzUgMS4zMzgtLjg3NXQxLjUxMi0uM3QxLjUxMy4zdDEuMzEyLjg3NUwyMS44MjUgNy40cS41NzUuNTc1Ljg3NSAxLjMyNXQuMyAxLjUyNXQtLjMgMS41MTN0LS44NzUgMS4zMTJsLTguMiA4LjE3NXEtLjM1LjM1LS44MTIuNTV0LS45NjMuMk05LjM3NSA4Ii8+PC9zdmc+', // Card 5
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuNzUgMTRjLS4xMyAwLS4yNy0uMDItLjQtLjA2YTEuMjUgMS4yNSAwIDAgMS0uODUtMS4xOXYtMS43NmMtMS40LS4xMy0yLjUtMS4zMS0yLjUtMi43NHYtMy41QzE0IDMuMjMgMTUuMjMgMiAxNi43NSAyaDYuNUMyNC43NyAyIDI2IDMuMjMgMjYgNC43NXYzLjVDMjYgOS43NyAyNC43NyAxMSAyMy4yNSAxMWgtMi42MmwtMS44OCAyLjVjLS4yNC4zMi0uNjEuNS0xIC41bS0xLTEwLjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djMuNWMwIC42OS41NiAxLjI1IDEuMjUgMS4yNUgxOFYxMmwxLjg4LTIuNWgzLjM4Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNXYtMy41YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNXptLTcuMjUgMTNhNC4yNiA0LjI2IDAgMCAxLTQuMjUtNC4yNUE0LjI2IDQuMjYgMCAwIDEgOS41IDhhNC4yNiA0LjI2IDAgMCAxIDQuMjUgNC4yNUE0LjI2IDQuMjYgMCAwIDEgOS41IDE2LjVtMC03Yy0xLjUyIDAtMi43NSAxLjIzLTIuNzUgMi43NVM3Ljk4IDE1IDkuNSAxNXMyLjc1LTEuMjMgMi43NS0yLjc1UzExLjAyIDkuNSA5LjUgOS41TTMuNDcxIDIzLjkyQzQuNzgxIDI1LjMgNi44MTEgMjYgOS41MDEgMjZzNC43Mi0uNyA2LjAzLTIuMDhjMS41MjItMS42MSAxLjQ3My0zLjU1MyAxLjQ3LTMuNjg0di0uMDA2YzAtMS4yMy0xLTIuMjMtMi4yMy0yLjIzSDQuMjMxYy0xLjIzIDAtMi4yMyAxLTIuMjMgMi4xOXYuMDEzYy0uMDA0LjE5LS4wNDIgMi4xMTcgMS40NyAzLjcxN20uMDMtMy42OWMwLS40LjMzLS43My43My0uNzNoMTAuNTRjLjQgMCAuNzMuMzMuNzMuNzd2LjAwMmEzLjk4IDMuOTggMCAwIDEtMS4wNiAyLjYxOGMtMS4wMSAxLjA3LTIuNjkgMS42MS00Ljk0IDEuNjFzLTMuOS0uNTMtNC45Mi0xLjU5YTMuOSAzLjkgMCAwIDEtMS4wOC0yLjY2OXoiLz48L3N2Zz4=', // Card 6
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxwYXRoIGQ9Ik0xNi4wNjEgMTAuNDA0TDE0IDE3aC00bC0yLjA2MS02LjU5NmE2IDYgMCAwIDEgLjk5OC01LjQ4NGwyLjU5LTMuMzE1YS42LjYgMCAwIDEgLjk0NiAwbDIuNTkgMy4zMTVhNiA2IDAgMCAxIC45OTggNS40ODRNMTAgMjBjMCAyIDIgMyAyIDNzMi0xIDItM20tNS41LTcuNUM1IDE1IDcgMTkgNyAxOWwzLTJtNS45MzEtNC41YzMuNSAyLjUgMS41IDYuNSAxLjUgNi41bC0zLTIiLz48cGF0aCBkPSJNMTIgMTFhMiAyIDAgMSAxIDAtNGEyIDIgMCAwIDEgMCA0Ii8+PC9nPjwvc3ZnPg==', // Card 7
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjEgN0w5IDE5bC01LjUtNS41bDEuNDEtMS40MUw5IDE2LjE3TDE5LjU5IDUuNTl6Ii8+PC9zdmc+', // Card 8
  ]
  const animateCount = (index, target) => {
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / animationDuration, 1)
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts]
        newCounts[index] = progress * target
        return newCounts
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  const handleIntersection = (index, entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && !isVisible[index]) {
      setIsVisible((prev) => {
        const newVisibility = [...prev]
        newVisibility[index] = true
        return newVisibility
      })
      animateCount(index, targetCounts[index])
    }
  }

  useEffect(() => {
    const options = { threshold: 0.5 }
    const observers = cardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        (entries) => handleIntersection(index, entries),
        options
      )
      if (cardRef.current) {
        observer.observe(cardRef.current)
      }
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <Container
      maxWidth='lg'
      sx={{
        marginTop: '1rem',
        marginBottom: '8rem',
        marginLeft: {
          xs: '0',
          lg: '17rem',
        },
      }}
    >
      <div className='items-center justify-center px-4 sm:px-6 lg:px-20 '>
        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-0 lg:space-x-4 xl:space-x-8'>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 flex justify-center'
              ref={cardRefs.current[index]}
            >
              <div className='w-[350px] h-[390px] mx-0 mt-3 rounded-3xl bg-white transition-all duration-300 transform hover:scale-105 hover:border-violet-800 border border-sky-600 flex flex-col items-center justify-center p-6'>
                <div className='flex justify-center mb-6'>
                  <div className='relative w-[160px] h-[160px] bg-sky-500 rounded-full border border-sky-300'>
                    <div className='w-[140px] h-[125px] bg-sky-500 object-contain rounded-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <img
                        src={cardImages[index]}
                        className='w-full h-full object-contain rounded-full'
                        alt={`Card ${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex mb-[20px] border border-sky-500 mx-auto w-1/2' />
                <h2 className='text-center text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] text-sky-500'>
                  {Math.floor(counts[index])}
                </h2>
                <h3
                  className='text-center text-sm sm:text-base md:text-xl mt-[5px] min-h-[48px]'
                  style={{ fontWeight: 'normal' }}
                >
                  {[
                    'anni di attività',
                    'formatori/educatori per i nostri ragazzi',
                    'I nostri laboratori ',
                    ' I nostri iscritti',
                  ][index].toLowerCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-0 lg:space-x-4 xl:space-x-8 mt-12'>
          {[4, 5, 6, 7].map((index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 md:w-1/3 xl:w-1/4 flex justify-center'
              ref={cardRefs.current[index]}
            >
              <div className='w-[350px] h-[390px] mx-0 mt-3 rounded-3xl bg-white transition-all duration-300 transform hover:scale-105 hover:border-violet-800 border border-sky-600 flex flex-col items-center justify-center p-6'>
                <div className='flex justify-center mb-6'>
                  <div className='relative w-[160px] h-[160px] bg-sky-500 rounded-full border border-sky-300'>
                    <div className='w-[140px] h-[125px] bg-sky-500 object-contain rounded-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <img
                        src={cardImages[index]}
                        className='w-full h-full object-contain rounded-full'
                        alt={`Card ${index + 1}`}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex mb-[20px] border border-sky-500 mx-auto w-1/2' />
                <h2 className='text-center text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] text-sky-500 '>
                  {index === 2
                    ? counts[index].toFixed(1) + '%'
                    : index === 5
                    ? counts[index].toFixed(1) + '%'
                    : index === 6
                    ? counts[index].toFixed(1) + '%'
                    : index === 7
                    ? counts[index].toFixed() + '%'
                    : Math.floor(counts[index])}
                </h2>

                <h3
                  className='text-center sm:text-base md:text-xl  mt-[5px] min-h-[48px]'
                  style={{ fontWeight: 'normal' }}
                >
                  {[
                    'Collaborazioni con le aziende',
                    'Feedback delle aziende sullo stage',
                    'Raggiungimento obiettivi e potenziale dello stage',
                    'Gradimento famiglie',
                  ][index - 4].toLowerCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

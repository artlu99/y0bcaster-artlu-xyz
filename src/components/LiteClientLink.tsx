import { useEffect } from 'preact/hooks'

const url = 'https://client-bcbhshow.artlu.xyz/'

export const LiteClientLink = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // window.location.href = url
    }, 3000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <p>
      <a href={url}>{url}</a>
    </p>
  )
}

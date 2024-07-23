import { Blurb } from 'components/Blurb'
import { LiteClientLink } from 'components/LiteClientLink'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <Blurb />
      <h1>Redirecting in 3 seconds...</h1>
      <LiteClientLink />
    </div>
  )
}

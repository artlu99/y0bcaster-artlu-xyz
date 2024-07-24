import { FarcasterEmbed } from 'react-farcaster-embed/dist/client'
import 'react-farcaster-embed/dist/styles.css'

interface EmbeddedCastProps {
  url: string
}
export const EmbeddedCast: React.FC<EmbeddedCastProps> = (props) => {
  const { url: href } = props

  return (
    <div className="container mx-auto flex justify-center">
      <div className="artboard phone-2">
        <FarcasterEmbed url={href} />
      </div>
    </div>
  )
}

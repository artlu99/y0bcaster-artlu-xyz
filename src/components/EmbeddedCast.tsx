import { FarcasterEmbed } from 'react-farcaster-embed/dist/client'
import 'react-farcaster-embed/dist/styles.css'

interface EmbeddedCastProps {
  url: string
}
export const EmbeddedCast: React.FC<EmbeddedCastProps> = (props) => {
  const { url } = props

  return <FarcasterEmbed url={url} />
}

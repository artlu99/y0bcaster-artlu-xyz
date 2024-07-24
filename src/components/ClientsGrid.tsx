import { ClientGridItemProps } from 'helpers/clientLinks'
import React from 'preact/compat'

const clientPfpSquareSize = 80

interface ClientsGridProps {
  gridItems: ClientGridItemProps[]
}
export const ClientsGrid: React.FC<ClientsGridProps> = (props) => {
  const { gridItems } = props

  return (
    <div class="grid grid-cols-2 gap-4">
      {gridItems.map((client, i) => (
        <div key={`${i}-${client.text}`}>
          <a
            className="link link-hover"
            href={client.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="artboard artboard-demo">
              <img
                className="rounded-lg"
                src={client.imgUrl}
                alt={client.text}
                height={clientPfpSquareSize}
                width={clientPfpSquareSize}
              />
              {client.text}
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

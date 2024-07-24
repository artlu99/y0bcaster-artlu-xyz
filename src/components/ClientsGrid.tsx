import { ClientGridItemProps } from 'helpers/clientLinks'
import React from 'preact/compat'

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
                height={50}
                width={50}
              />
              {client.text}
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

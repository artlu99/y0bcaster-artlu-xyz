import { ClientGridItemProps } from 'helpers/clientLinks'
import { useStateStore } from 'helpers/stores/zustand'

const clientPfpSquareSize = 80

interface ClientsGridProps {
  gridItems: ClientGridItemProps[]
}
export const ClientsGrid: React.FC<ClientsGridProps> = (props) => {
  const { gridItems } = props

  const { last, setLast } = useStateStore()

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {gridItems.map((client, i) => (
        <div key={`${i}-${client.title}`} className="artboard artboard-demo ">
          <a
            className="link link-hover"
            href={client.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => setLast(client.id)}
          >
            <div className="indicator justify-center items-center flex flex-col">
              <img
                className="rounded-lg"
                src={client.pfpUrl}
                alt={client.title}
                height={clientPfpSquareSize}
                width={clientPfpSquareSize}
              />
              {client.title}
              {client.id === last ? (
                <span className="indicator-item badge badge-secondary">
                  last used
                </span>
              ) : null}
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

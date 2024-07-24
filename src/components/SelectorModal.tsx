import { RiSettings2Line } from '@remixicon/react'

import { clientsList } from 'helpers/clientLinks'
import { useStateStore } from 'helpers/stores/zustand'

type SelectorModalProps = {
  showMobile: boolean
}
export const SelectorModal: React.FC<SelectorModalProps> = (props) => {
  const { showMobile } = props
  const { selected, select, deselect } = useStateStore()

  const handleChange = (id: number) => {
    console.log(id)
    if (selected.includes(id)) {
      deselect(id)
    } else {
      select(id)
    }
  }

  return (
    <>
      <button
        onClick={() =>
          (
            document.getElementById('selector_modal') as HTMLDialogElement
          ).showModal()
        }
      >
        <RiSettings2Line />
      </button>

      <dialog id="selector_modal" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Clients</h3>
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>include?</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsList
                    .filter(
                      (c) => c.type === (showMobile ? 'mobile' : 'desktop')
                    )
                    .map((client) => (
                      <tr>
                        <th>
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={client.pfpUrl} alt={client.title} />
                            </div>
                          </div>
                        </th>
                        <td>
                          <div className="font-bold">{client.title}</div>
                        </td>
                        <td>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox"
                              checked={selected.includes(client.id)}
                              onChange={() => handleChange(client.id)}
                            />
                          </label>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ZustandState {
  showMobile: boolean
  setShowMobile: (showMobile: boolean) => void
  last: number | undefined
  setLast: (lastId: number) => void
  selected: number[]
  select: (id: number) => void
  deselect: (id: number) => void
}

export const useStateStore = create<ZustandState>()(
  persist(
    (set) => ({
      showMobile: true,
      setShowMobile: (showMobile) => set(() => ({ showMobile })),
      last: undefined,
      setLast: (lastId) => set(() => ({ last: lastId })),
      selected: [0, 1, 2, 3, 4, 5, 6, 7],
      select: (id) =>
        set((state) => ({ selected: [...state.selected, id].slice().sort() })),
      deselect: (id) =>
        set((state) => ({ selected: state.selected.filter((i) => i !== id) })),
    }),
    { name: 'zustandStore' }
  )
)

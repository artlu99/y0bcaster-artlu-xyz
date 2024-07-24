import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ZustandState {
  last: string | undefined
  setLast: (lastId: string) => void
}

export const useStateStore = create<ZustandState>()(
  persist(
    (set) => ({
      last: undefined,
      setLast: (lastId) => set(() => ({ last: lastId })),
    }),
    { name: 'zustandStore' }
  )
)

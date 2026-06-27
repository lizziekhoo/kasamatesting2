import { createContext, useContext } from 'react'

const SessionContext = createContext(null)

export const SessionProvider = SessionContext.Provider

export function useSession() {
  return useContext(SessionContext)
}

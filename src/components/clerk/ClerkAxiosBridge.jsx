
import { useEffect } from 'react'
import { useAuth } from '@clerk/react'
import { setClerkTokenGetter } from '../../api/axiosInstance'

export default function ClerkAxiosBridge() {
  const { isLoaded, getToken } = useAuth()

  useEffect(() => {
    if (!isLoaded) return

    setClerkTokenGetter(getToken)

    return () => {
      setClerkTokenGetter(null)
    }
  }, [isLoaded, getToken])

  return null
}

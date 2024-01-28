import React from 'react'
import { useAuth } from 'src/hooks/useAuth'

const Preferred = () => {
  //**set page name */
  const auth = useAuth()
  auth.setPages('Preferred')

  return (
    <div>StoreThemes</div>
  )
}

export default Preferred

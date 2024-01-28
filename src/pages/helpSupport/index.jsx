import React from 'react'
import { useAuth } from 'src/hooks/useAuth'

const HelpSupport = () => {
  //**set page name  */
  const {setPages}=useAuth()
  setPages("Help & Support")



  return (
    <div>

    </div>
  )
}

export default HelpSupport

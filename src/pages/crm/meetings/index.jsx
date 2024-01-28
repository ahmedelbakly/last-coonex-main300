import React from 'react'
import { useAuth } from 'src/hooks/useAuth';

const Meetings = () => {
  const {setPages} = useAuth();
  setPages("CRM Meetings & Calendar")


  return (
    <div>
<h1>meetings</h1>
    </div>
  )
}

export default Meetings

import React from 'react';
import { useAuth } from 'src/hooks/useAuth';

const Reports = () => {
  const {setPages} = useAuth();
  setPages("CRM Reports")



  return (
    <div>
<h1>reports</h1>
    </div>
  )
}

export default Reports

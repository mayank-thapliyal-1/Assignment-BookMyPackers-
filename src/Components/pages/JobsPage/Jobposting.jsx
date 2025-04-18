import React from 'react'
import Filters from '../jobcomponents/Filters'
import JobCenter from '../jobcomponents/JobCenter'

const Jobposting = () => {
  return (
    <div className='flex  w-screen gap-7 p-8  '>
       <Filters/>
       <JobCenter/>
    </div>
  )
}

export default Jobposting
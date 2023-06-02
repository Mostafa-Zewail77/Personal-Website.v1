import React from 'react'
import './Heading.css'


function Heading({sectionHeader}) {
  return (
    <div className="heading d-flex align-items-center">
      <h2>{sectionHeader}</h2>
      
    </div>
  )
}

export default Heading
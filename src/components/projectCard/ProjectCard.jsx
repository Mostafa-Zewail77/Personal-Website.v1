import React from 'react'
import './ProjectCard.css'
import {FiExternalLink, FiGithub} from 'react-icons/fi'
import {CiFolderOn} from 'react-icons/ci'



function ProjectCard({title,description,image,tags,source,visit,id}) {
  return (
    <div className='custom-card' >
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="icons d-flex justify-content-between align-items-center mb-3">
        <CiFolderOn style={{
          color:'var(--color-green)',
          width:'30px' ,
          height:'30px'
          }} />
          
        <div className="links ">
          <a className='me-3' href={source} target='_blank' rel='noopener noreferrer'><FiGithub/></a>
          <a href={visit} target='_blank' rel='noopener noreferrer'><FiExternalLink/> </a>
        </div>
      </div>
      <div className="info ">
        <h3><a href={visit} target='_blank' rel='noopener noreferrer'>{title} </a> </h3>
        <p dangerouslySetInnerHTML={{ __html:description }}></p>
      </div>
      <div className="tags ">
        <ul className='list-unstyled d-flex flex-wrap '>
          {tags.map((tag,index)=>(
            <li key={`${id}-${index}`}>{tag}</li>
          ))}
        </ul>
      </div>
     
  
     
    </div>
  )
}

export default ProjectCard
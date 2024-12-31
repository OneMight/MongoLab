// import './ConWithInf.css'
import { useState } from 'react'
import React from 'react';
export default function ConWithInf(group){
    const groups = group.group
    const [open,setOpen] = useState(null)

    const HandlerOpen = (id) =>{
        id === open ? setOpen(null) :setOpen(id)
    }
    
    return(
        groups.map(group =>(
            <div className='con-inf' key={group.idGroup} >
                    
            <div className='image-div'>
                
                <img src={`images/${group.imageGroup}`} alt="" />
            </div>
            <button className='about-inf' onClick={() => HandlerOpen(group.idGroup)}>
                <div className='title-div'>
                    <p className='inf-name'>
                        {group.groupName}
                    </p>
                </div>
                <p className='desc-inf'>{group.desciption}</p>
                <div className={`accordion-collapse ${group.idGroup === open? 'open':''}`}>
                  
                </div>
            </button>
            
            </div>
        ))
    )
}
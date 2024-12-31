import './ConWithInfTeams.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTeams } from '../../store/Slices/teamSlicer'
export default function ConWithInf(datateams){
    const teams = datateams.team
    const dispatch = useDispatch();
    const [open,setOpen] = useState(null)

    const HandlerOpen = (id) =>{
        id === open ? setOpen(null) :setOpen(id)
    }
    const deleteTeam = ({id}) =>{
    
        dispatch(deleteTeams({id}))
        window.location.reload();
    }

    return(
        teams.map(team =>(
            <div className='con-inf' key={team._id} >
                    
                <div className='image-div'>
                    
                    <img src={`images/${team.photoTeam}`} alt="" />
                </div>
                <button className='about-inf' onClick={() => HandlerOpen(team.idTeam)}>
                    <div className='title-div'>
                        <p className='inf-name'>
                            {team.teamName}
                        </p>
                    </div>
                    <p className='desc-inf'>{team.desciption}</p>
                    <div className={`accordion-collapse ${team.idTeam === open? 'open':''}`}>
                        <p className='desc-inf'>{team.hidendisc}</p>
                    </div>
                </button>
                <button className='buttons' onClick={() => deleteTeam({ id :team._id})}>DELETE</button>
            </div>
        ))
    )
}
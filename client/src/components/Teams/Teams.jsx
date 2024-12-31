import './Teams.css'
import ConWithInfTeams from '../ConWithInfTeams/ConWithInfTeams.jsx'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeams,createTeam} from '../../store/Slices/teamSlicer.js'
import Popup from 'reactjs-popup';
export default function Teams(){
    const [currenctpage, setPage] = useState(1);
    const [title, settitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const {status,error, teams } = useSelector(state => state.teams)

    const data = teams.data || [];
    console.log(teams)
    useEffect(()=>{
        dispatch(fetchTeams(currenctpage));
       
    },[dispatch])

    const HandleTitle = (e)=>{
        settitle(e.target.value)
    }
    const HandleDescription = (e) =>{
        setDescription(e.target.value)
    }
    const createTeams = ({title,description}) =>{
        dispatch(createTeam({title,description}))
        window.location.reload()
       
    }   
    const SwitchRight = ()=>{
        if(currenctpage + 1 > 2){
            alert("Максимальная страницы");
        }
        else{
            const newPage = currenctpage + 1;
            setPage(newPage)
            dispatch(fetchTeams(newPage));
        }
    }
    const SwitchLeft =()=>{
        if(currenctpage - 1 === 0){
            alert("Минимальная страницы")
        }
        else{
            const newPage = currenctpage - 1;
            setPage(newPage)
            dispatch(fetchTeams(newPage));
        }
    }
    if(status ==='loading'){
        return <h2>Loading</h2>
    }
    if(error){
        return <h2>An Error occured: {error}</h2>
    }
    return(
        <main className='teams-con'>
            <Popup trigger={<button className='buttons'>Create</button>} position={'center center'}>
                <div className='popup-menu'>
                    <div className='popup'>
                        <label className='text-popup'>Team name</label>
                        <input type="text" onChange={HandleTitle} placeholder='input name of team' className='input'/>
                        <label className='text-popup'>Description</label>
                        <input type="text" onChange={HandleDescription} placeholder='write description' className='input'/>
                        <button className='buttons' onClick={() => createTeams({title,description})}>Submit</button>
                    </div>
                </div>
            </Popup>
            <section className='teams-data'>
                    <ConWithInfTeams team = {data}/> 
            </section>
            <div className='navigate'>
                <button className='navigate-button' onClick={()=> SwitchLeft()}><img src='./images/arrow-left-navigate.png' alt=''/></button>
                <p>{currenctpage} / {teams.page}</p>

                <button className='navigate-button' onClick={() => SwitchRight()}><img src='./images/arrow-right-navigate.png' alt=''/></button>  
            </div>
       
        </main>
    )
}
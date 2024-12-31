import './PilotComp.css'
import OnePilotCon from '../OnePilotCon/OnePilotCon'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPilots, searchPilots} from '../../store/Slices/pilotsSlicer'

export default function PilotsComp(){
    const [currenctpage, setPage] = useState(1);
    const [search, setSearch] = useState('')
    const { pilots, status, error } = useSelector(state => state.pilots)
    const [selectedFilters, setSelectedFilters] = useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPilots(currenctpage));
    },[])
  
    let data = pilots.data || [];
    console.log(data)

    if (selectedFilters.length > 0) {
        data = data.filter(pilot => selectedFilters.includes(pilot.Team?.Group?.groupName.trim()));
    }

    
    const SwitchRight = () => {
        if(currenctpage + 1 > pilots.pages){
            alert("Максимальная страницы");
        } else {
            const newPage = currenctpage + 1;
            setPage(newPage)
            dispatch(fetchPilots(newPage));
        }
    }

    const SwitchLeft = () => {
        if(currenctpage - 1 === 0){
            alert("Минимальная страницы")
        } else {
            const newPage = currenctpage - 1;
            setPage(newPage)
            dispatch(fetchPilots(newPage));
        }
    }

    if(status === 'loading'){
        return <h2>Loading</h2>
    }

    if(error){
        return <h2>An Error occurred: {error}</h2>
    }

    return(
        <main className='pilot-main'>
            <section className='filters-and-pilots'>

                
                <div className='pilots-div'>
                    {data.length === 0 ? (
                        <h2>Nothing</h2>
                    ):(
                        <OnePilotCon pilot={data}/>
                    )}
                   
                </div>
                <div className='navigate'>
                    <button className='navigate-button left' onClick={() => SwitchLeft()}><img src='./images/arrow-left-navigate.png' alt=''/></button>
                    <p>{currenctpage} / {pilots.page}</p>
                    <button className='navigate-button right' onClick={() => SwitchRight()}><img src='./images/arrow-right-navigate.png' alt=''/></button>  
                </div>
            </section>
        </main>
    )
}
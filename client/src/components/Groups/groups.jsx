import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGroups, searchGroups} from '../../store/Slices/groupSlicer'
import './groups.css'
import ConWithInf from '../ConWithInf/ConWithInf'

export default function Groups(){

const dispatch = useDispatch()
const {status,error, groups } = useSelector(state => state.groups)
const [search, setSearch] = useState('')
const data = groups.data || [];
    useEffect(()=>{
        dispatch(fetchGroups());
       
    },[dispatch])


    if(status ==='loading'){
        return <h2>Loading</h2>
    }
    if(error){
        return <h2>An Error occured: {error}</h2>
    }
    return(
        <main className='group-main'>
            <section className='groups-data'>
                    <ConWithInf group = {data}/> 
            </section>
        </main>
            
    )
      
        
}
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GroupPage from './Pages/GroupPage'
import TeamsPage from './Pages/Teams';
import PilotsPage from './Pages/Pilots'

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={
              <GroupPage/>
        }/>
        <Route path='/teams' element={
             <TeamsPage/>
        }/>
        <Route path='/pilots' element={
             <PilotsPage/>
        }/>
    </Routes>

  </BrowserRouter>
  </>
  )
 
}

export default App;

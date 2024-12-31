import {configureStore} from "@reduxjs/toolkit"
import groupReducer from './Slices/groupSlicer.js'
import teamsReducer from './Slices/teamSlicer.js'
import pilotSlicer from './Slices/pilotsSlicer.js'

export default configureStore({
    reducer:{
        groups:groupReducer,
        teams:teamsReducer,
        pilots:pilotSlicer,
    }
})

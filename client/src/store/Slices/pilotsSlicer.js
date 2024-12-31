import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPilots = createAsyncThunk(
    'pilots/fetchPilots',async(page,{rejectWithValue}) =>{
        try{
            const response = await axios.get(`http://localhost:5000/api/pilot?limit=7&page=${page}`)
            return response.data;
            }
        catch(error){
            console.error("Fetch pilots error:", error);
            return rejectWithValue(error.message)
        }
    }
)
export const searchPilots = createAsyncThunk(
    'pilots/searchPilots', async (search,{rejectWithValue})=>{
        try{
            const response = await axios.get(`http://localhost:5000/api/pilot?limit=10&search=${search}`)
            const data = response.data;
            return data
        }catch(error){
            console.error("Find pilot error:", error);
            return rejectWithValue(error.message)
        }
    }
)




const pilotSlicer = createSlice({
    name:'pilots',
    initialState:{
        pilots:[],
        savedPilots:[],
        currentPilot:null,
        comporationPilots:[],
        search:'',
        page:1,
        status: null,
        error: null
    },
    reducers:{
        setCurrentPilot(state, action) {
            state.currentPilot = action.payload;
        },
        addToComporation(state,action){
            state.comporationPilots = [...state.comporationPilots, action.payload]
        },
        addSavedPilots(state,action){
            state.savedPilots = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchPilots.pending, (state) =>{
             state.status = 'loading';
             state.error = null
         })
         .addCase(fetchPilots.fulfilled, (state, action) =>{
             state.status = 'resolved';
             state.pilots = action.payload;
             state.page = action.payload.pages;
         })
         .addCase(fetchPilots.rejected, (state, action) =>{
             state.status ='rejected';
             state.error = action.error.message;
         })
         .addCase(searchPilots.fulfilled, (state, action) => {
             state.status = 'resolved';
             state.pilots = action.payload;
             
         })
         .addCase(searchPilots.rejected, (state, action) =>{
             state.status ='rejected';
             state.error = action.payload;
         })
         
     }
})
export const {setCurrentPilot, addToComporation,addSavedPilots} = pilotSlicer.actions;
export default pilotSlicer.reducer;
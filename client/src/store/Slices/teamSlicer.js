import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeams = createAsyncThunk(
    'teams/fetchTeams',async(page,{rejectWithValue}) =>{
        try{
            const response = await axios.get(`http://localhost:5000/api/teams?limit=2&page=${page}`)
            
            return response.data;
            }
        catch(error){
            console.error("Fetch teams error:", error);
            return rejectWithValue(error.message)
        }
    }
)
export const searchTeams = createAsyncThunk(
    'teams/searchTeams', async (search,{rejectWithValue})=>{
        try{
            const response = await axios.get(`http://localhost:5000/api/teams?limit=10&search=${search}`)
            const data = response.data;
            return data
        }catch(error){
            console.error("Find teams error:", error);
            return rejectWithValue(error.message)
        }
    }
)
export const deleteTeams = createAsyncThunk(
    'teams/deleteTeams',async ({id},{rejectWithValue})=>{
        try{
        
            await axios.delete(`http://localhost:5000/api/teams/delete/${id}`)
            
        }catch(err){
            rejectWithValue(err)
        }
    }
)
export const createTeam = createAsyncThunk(
    'teams/createTeams', async ({title, description},{rejectWithValue,dispatch}) =>{
        try{
            console.log(title,description)
            const response = await axios.post('http://localhost:5000/api/teams/create',{
                teamName: title,
                desciption:description
            })
            const data = response.data;
            await dispatch(addteams(data));
        }catch(err){
            console.log(err)
            rejectWithValue(err);
        }
    }
)

const teamSlicer = createSlice({
    name:'teams',
    initialState:{
        teams:[],
        search:'',
        page:1,
        status: null,
        error: null
    },
    reducers:{
        addteams(state,action){
            state.teams = action.payload
        },
        removeTeams(state,action){
            state.teams.filter(team => team._id !== action.payload._id)
        }
    },
    extraReducers: (builder) =>{
       builder
       .addCase(fetchTeams.pending, (state) =>{
            state.status = 'loading';
            state.error = null
        })
        .addCase(fetchTeams.fulfilled, (state, action) =>{
            state.status = 'resolved';
            state.teams = action.payload;
            state.page = action.payload.page;
        })
        .addCase(fetchTeams.rejected, (state, action) =>{
            state.status ='rejected';
            state.error = action.error.message;
        })
        .addCase(searchTeams.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.teams = action.payload;
            
        })
        .addCase(searchTeams.rejected, (state, action) =>{
            state.status ='rejected';
            state.error = action.payload;
        })
        .addCase(deleteTeams.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.teams = action.payload;
            
        })
        .addCase(deleteTeams.rejected, (state, action) =>{
            state.status ='rejected';
            state.error = action.payload;
        })
        .addCase(createTeam.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.teams = action.payload;
            
        })
        .addCase(createTeam.rejected, (state, action) =>{
            state.status ='rejected';
            state.error = action.payload;
        })
    }
})
export const {addteams} = teamSlicer.actions
export default teamSlicer.reducer;
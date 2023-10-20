import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    task : [],
    userTask : []
};

const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        addTask : (state, {payload})=>{
            if(state.task.length === 0){
                state.task.push({id: 1,status: "pending", ...payload});
            }
            else{
               const lastElement = state.task.at(-1) ;
               state.task.push({id : lastElement.id +1, status: "pending", ...payload})
            }
        },
        removeTask : (state, {payload})=> {
        const filteredItems = state.task.filter(item => item.id != payload)
        state.task = filteredItems ;    
           
        },
        updateStatus : (state , {payload})=>{
            const updatedItem =state.task.find(item => item.id === payload.id) ;
            updatedItem.status = payload.progressStatus

        },
       setUserTask: (state, {payload})=>{
            state.userTask = state.task.filter(item => item.assignto === payload) 
       }

    }
}) ;

export const {updateStatus} = taskSlice.actions ;
export const {removeTask} = taskSlice.actions ;
export const {addTask} = taskSlice.actions ;
export const {setUserTask} = taskSlice.actions ;

export default taskSlice.reducer;


// state.task.filter(item => item.assignto == payload.name)
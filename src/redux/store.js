import {configureStore} from '@reduxjs/toolkit'
import  movieReducer  from './movieSlice'

let store=configureStore({
    reducer:{
        movie:movieReducer
    }
})
export default store;
import {configureStore} from "@reduxjs/toolkit";
import modal from './modal.jsx'

const store = configureStore({
    reducer:{
        modal
    }
})

export default store
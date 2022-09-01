import {configureStore} from '@reduxjs/toolkit';
import SideBarReducer from './SetBarReducer';
import DataReducer from './DataReducer';
export default  configureStore({
    reducer:{
       sideBarReducer : SideBarReducer,
       dataReducer : DataReducer,
    }
})
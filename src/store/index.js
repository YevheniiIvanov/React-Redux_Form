import { configureStore } from '@reduxjs/toolkit';

import formDish from '../components/form/FormDishSlice';

const stringMidleWare = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {formDish},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMidleWare),
    devTools: process.env.NODE_ENV !== 'production',
})             

export default store;
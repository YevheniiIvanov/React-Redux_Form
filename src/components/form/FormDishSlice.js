import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    numberOfSlices:'',
    diameter: '',
    slicesOfBread: '',
    spicinessScale: '',
    selectType: ''
}

const formDishSlice = createSlice({
    name: 'formDish',
    initialState,
    reducers: {
        formDishType: (state, action) => {
            state.selectType = action.payload;
        },
        formDishNumberSliceOfPizza: (state, action) => {
            state.numberOfSlices = action.payload;
        },
        formDishDiameterPizza: (state, action) => {
            state.diameter = action.payload;
        },
        formDishSlicesOfBread: (state, action) => {
            state.slicesOfBread = action.payload;
        },
        formDishSpicinessScale: (state, action) => {
            state.spicinessScale = action.payload;
        }
    }
})

const {actions, reducer} = formDishSlice;

export default reducer;

export const {formDishType,
            formDishNumberSliceOfPizza,
            formDishDiameterPizza,
            formDishSlicesOfBread,
            formDishSpicinessScale} = actions;
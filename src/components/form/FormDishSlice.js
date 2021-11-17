import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    numberOfSlices:'',
    diameter: '',
    slicesOfBread: '',
    spicinessScale: '',
    selectType: '',
    formDishLoadingStatus: 'idle'
}

export const postFormDish = createAsyncThunk(
    'formDish/postForm',
    async(data) => {
        const {request} = useHttp();
        return await request("https://frosty-wood-6558.getsandbox.com:443/dishes", "POST", JSON.stringify(data));
    }
)

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
        },
        formDishLoading: (state, action) => {
            state.formDishLoadingStatus = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(postFormDish.pending, state => {state.formDishLoadingStatus = 'loading'})
            .addCase(postFormDish.fulfilled, (state, action) => {
                        state.formDishLoadingStatus = 'idle';
                    })
            .addCase(postFormDish.rejected, state => {
                        state.formDishLoadingStatus = 'error';
                    })
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = formDishSlice;

export default reducer;

export const {formDishType,
            formDishNumberSliceOfPizza,
            formDishDiameterPizza,
            formDishSlicesOfBread,
            formDishSpicinessScale,
            formDishLoading} = actions;
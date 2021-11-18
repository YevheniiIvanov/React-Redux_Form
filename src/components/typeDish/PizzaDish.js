import { useDispatch } from "react-redux";
import {formDishNumberSliceOfPizza, formDishDiameterPizza} from '../form/FormDishSlice';

const PizzaDish = () => {

    const dispatch = useDispatch();

    return (
        <div style={{width: '330px',
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    margin: '0 auto', 
                    padding: '0 0 20px 0'}}>
            <input 
                required 
                placeholder="Number of pieces" 
                name="Number of pieces" 
                type="number" 
                className="modal__input-pizza"
                min='0'
                max='16' 
                onChange={(e) => dispatch(formDishNumberSliceOfPizza(e.target.value))}/>
            <select 
                required 
                className="modal__select-pizza" 
                id="element" 
                name="element" 
                onChange={(e) => dispatch(formDishDiameterPizza(e.target.value))}>
                    <option value=''>Pizza's diameter....</option>
                    <option value='33.4'>33.4</option>
                    <option value='22.5'>22.5</option>
                    <option value='18.0'>18.0</option>
            </select>
        </div>
    )
}

export default PizzaDish;
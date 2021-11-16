import { useDispatch } from 'react-redux';
import {formDishSlicesOfBread} from '../form/FormDishSlice';

const SandwichDish = () => {
    const dispatch = useDispatch();

    return (
        <input 
            required 
            placeholder="Number of slices of bread" 
            name="name" 
            type="number" 
            className="modal__input-sandwich"
            min='1'
            max='10'
            onChange={(e) => dispatch(formDishSlicesOfBread(e.target.value))}
            />
    )
}

export default SandwichDish;
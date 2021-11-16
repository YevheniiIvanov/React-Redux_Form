import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import PizzaDish from '../typeDish/PizzaDish';
import SoupDish from '../typeDish/SoupDish';
import SandwichDish from '../typeDish/SandwichDish';
import { useHttp } from '../../hooks/http.hook';

import { formDishType, 
        formDishNumberSliceOfPizza, 
        formDishDiameterPizza, 
        formDishSpicinessScale, 
        formDishSlicesOfBread } from './FormDishSlice';

import { v4 as uuidv4 } from 'uuid';

import './FormDish.scss';

const FormDish = () => {

    const {request} = useHttp();
    const {selectType, numberOfSlices, diameter, spicinessScale, slicesOfBread} = useSelector(state => state.formDish);
    const dispatch = useDispatch();

    const [dishName, setDishName] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [dishType, setDishType] = useState('');

    const onSetType = (e) => {
        const term = e.target.value;
        setDishType(term);
        dispatch(formDishType(term));
    }    

    const onSubmitDish = (e) => {
        e.preventDefault();
        let newDish = {};

        if(selectType === 'pizza'){
            newDish = {
                name: dishName,
                preparation: preparationTime,
                type: selectType,
                no_of_slices: numberOfSlices,
                diameter: diameter,
                id: uuidv4()
            }
        }else if(selectType === 'soup') {
            newDish = {
                name: dishName,
                preparation: preparationTime,
                type: selectType,
                spiciness_scale: spicinessScale,
                id: uuidv4()
            }
        }else if(selectType === 'sandwich') {
            newDish = {
                name: dishName,
                preparation: preparationTime,
                type: selectType,
                slices_of_bread: slicesOfBread,
                id: uuidv4()
            }
        }
        // http://localhost:3001/heroes
        request("https://frosty-wood-6558.getsandbox.com:443/dishes", "POST", JSON.stringify(newDish))
            .then(res => console.log(res, 'Отправка успешна'))
            .catch(err => err);

        setDishName('');
        setPreparationTime('');
        setDishType('');
        dispatch(formDishType(''));
        dispatch(formDishNumberSliceOfPizza(''));
        dispatch(formDishDiameterPizza(''));
        dispatch(formDishSpicinessScale(''));
        dispatch(formDishSlicesOfBread(''));
    }

    return(
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content">
                    <form onSubmit={onSubmitDish}>
                        <div className="modal__title">Order the Dish</div>
                        <input 
                            required 
                            placeholder="name" 
                            name="name" 
                            type="text" 
                            className="modal__input" 
                            value={dishName}
                            onChange= {(e) => setDishName(e.target.value)}
                            />
                        <input 
                            required 
                            placeholder="preparation time" 
                            name="preparation_time" 
                            type="time" 
                            className="modal__input" 
                            value={preparationTime}
                            onChange={(e) => setPreparationTime(e.target.value)}/>
                        <select 
                            required 
                            className="modal__select" 
                            id="element" 
                            name="element" 
                            value={dishType}
                            onChange={(e) => onSetType(e)}>
                                <option value=''>Type...</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='sandwich'>Sandwich</option>
                        </select>
                        {selectType === 'pizza' ? <PizzaDish/> : null}
                        {selectType === 'soup' ? <SoupDish/> : null}
                        {selectType === 'sandwich' ? <SandwichDish/> : null}
                        <button type="submit" className="modal__btn">Order</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormDish;
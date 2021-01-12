import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/actions/categories';
import './filter.scss';

function Filter({checkedItems, setCheckedItems}) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    const handleChange = (event) => {
        setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    };

    useEffect(() => {
       dispatch(fetchCategories())
      }, []);
    
    return (
        <ul className="list">
            {
                categories.map(category => {
                    return (
                    <li className="listItem"
                    key={category.id}>
                        <input className="checkbox"
                            type="checkbox" 
                            name={category.id} 
                            onChange={handleChange}/>
                        <label className="label">{category.categoryName}</label>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default Filter;
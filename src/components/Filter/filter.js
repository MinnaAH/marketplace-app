import React from 'react';
import Categories from '../../data/Items/categories.json';
import './filter.scss';

function Filter({checkedItems, setCheckedItems}) {

    const handleChange = (event) => {
        setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    }
    
    return (
        <ul className="list">
            {
                Categories.map(category => {
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
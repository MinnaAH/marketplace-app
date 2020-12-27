import React from 'react';
import './itemCard.scss';
import itemData from '../../data/Items/items.json';
import userData from '../../data/User/users.json';

function ItemCard ({searchText, checkedItems}) {
    const activeFilters = Object.keys(checkedItems).filter(item => checkedItems[item])
    const filteredItems = itemData.filter(item => { 
        if (activeFilters.length > 0) {
            return activeFilters.find(filter => filter === item.category)
        } else {
            return item;
        }
    })

    const items = (searchText !== "" && searchText.length > 0) ? filteredItems.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())) : filteredItems;

    return (

            items.map(item => {
                const user = userData.find(user => {
                    return user.id === item.userID
                })
                return (
                    <div className="card"
                    key={item.guid}>
                        <img src={item.image} alt={item.name} />
                        <h1>{item.name}</h1>
                        <p>{item.description} </p>
                        <p>
                            {item.location} <br />
                            {user.username} <br />
                            {item.showPhoneNumber ? user.phone : user.email}</p>
                    </div>
                )
            })

    )   
    
}

export default ItemCard;
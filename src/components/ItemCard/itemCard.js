import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/products';
import { fetchUsers } from '../../redux/actions/users';
import './itemCard.scss';

function ItemCard ({searchText, checkedItems}) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const users = useSelector(state => state.users.users);
    const userLoading = useSelector(state => state.users.loading);
    const allActions = [fetchUsers(), fetchProducts()];

    const activeFilters = Object.keys(checkedItems).filter(item => checkedItems[item])
    const filteredItems = products.filter(product => { 
        if (activeFilters.length > 0) {
            return activeFilters.find(filter => filter === product.category)
        } else {
            return product;
        }
    })

    const items = (searchText !== "" && searchText.length > 0) ? filteredItems.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())) : filteredItems;

    useEffect(() => {
        allActions.map((action) => dispatch(action));
      }, [])

    return (

        items.map(item => {
            const user = users.find(user => {
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
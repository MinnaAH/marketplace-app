import { combineReducers } from 'redux';
import products from './products';
import users from './users';
import categories from './categories';

const rootReducer = combineReducers({
    products: products,
    users: users,
    categories: categories,
});

export default rootReducer
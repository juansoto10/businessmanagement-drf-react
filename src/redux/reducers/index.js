import { combineReducers } from 'redux';
import items from './items';
import products from './products';
import productCategories from './productCategories'
import itemCategories from './itemCategories'


export default combineReducers({
    items,
    products,
    itemCategories,
    productCategories
})

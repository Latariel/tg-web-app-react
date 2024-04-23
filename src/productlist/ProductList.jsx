import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../components/productItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";


const products = [
        {id: '1', title: 'деплой', price: 5000, description: 'Синего цвета, прямые'},
        {id: '2', title: 'вебсокет', price: 12000, description: 'Зеленого цвета, теплая'},
        {id: '3', title: 'карандаш', price: 5000, description: 'Синего цвета, прямые'},
        {id: '4', title: 'алебастр', price: 122, description: 'Зеленого цвета, теплая'},
        {id: '5', title: 'ам ням', price: 5000, description: 'Синего цвета, прямые'},
        {id: '6', title: 'дирижабль', price: 600, description: 'Зеленого цвета, теплая'},
        {id: '7', title: 'анонс', price: 5500, description: 'Синего цвета, прямые'},
        {id: '8', title: 'рембрант', price: 12000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items = []) => {
return items.reduce((acc, item) => {
        return acc += item.price
}, 0)
}

const ProductList = () => {
        const [addedItems, setAddedItems] = useState([]);
        const {tg} = useTelegram();


        const onAdd = (product) => {
                const alreadyAdded = addedItems.find(item => item.id === product.id);
                let newItems = [];

                if (alreadyAdded) {
                        newItems = addedItems.filter(item => item.id !== product.id);
                } else {
                        newItems = [...addedItems, product];
                }

                setAddedItems(newItems)

                if(newItems.length === 0){
                        tg.MainButton.hide();
                } else {
                        tg.MainButton.show();
                        tg.MainButton.setParams({
                                text: `купитьь ${getTotalPrice(newItems)}`
                        });
                }
        }

        return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
</div>
        );

}

export default ProductList;
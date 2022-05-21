import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next'
import { useEffect, useLayoutEffect, useState } from 'react';
import { getUserProducts } from './src/api/productsApi';
import MainHeader from './src/components/MainHeader';
import ProductCard from './src/components/ProductCard';
import { useStore } from './src/stores/useStoreContext';
//import { ProductCard } from './src/components/ProductCard';
import { Product } from './src/types/types';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

const Products: NextPage = () => {
    const [products, setProducts] = useState<ReadonlyArray<Product>>([]);
    useLayoutEffect(() => {
        getUserProducts().then((data) => {
            setProducts(data.data);
        })
    }, []);
    const { userStore } = useStore();
    const { user } = userStore;
    useEffect(() => {
        setProducts([]);
    }, [user])


    return (
        <div>
            <MainHeader />
            <Container>
                {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </Container >
        </div>
    );
};

export default observer(Products);
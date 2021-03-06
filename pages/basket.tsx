import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next'

import { useEffect, useLayoutEffect, useState } from 'react';
import { getUserBets } from './src/api/betApi';
import { getUserLots } from './src/api/lotsApi';
import { getUserProducts } from './src/api/productsApi';
import { BetCard } from './src/components/BetCard';
import { LotCard } from './src/components/LotCard';
import MainHeader from './src/components/MainHeader';
import ProductCard from './src/components/ProductCard';
import { useStore } from './src/stores/useStoreContext';
import { Bet, Lot, Product } from './src/types/types';

const GlobalContainer = styled.div`
height: 100%;
align-items:center;
/* display: flex;
flex-direction:column;
align-items:center; */
`

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
`

const Main = styled.main`
`;


const PageHeader = styled.h1`
    color: white;
    margin-left: 770px;
`

const HeaderSection = styled.div`
    display: flex;
    align-items:center;
    flex-wrap:wrap;
    color:white;
    font-size: 20px;
`

const BasketDiv = styled.div`
    align-items: center;
`

const Basket: NextPage = () => {
    const [bets, setBets] = useState<ReadonlyArray<Bet>>([]);
    const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);
    const [products, setProducts] = useState<ReadonlyArray<Product>>([]);
    useLayoutEffect(() => {
        getUserBets().then((data) => {
            setBets(data.data);
        });
        getUserLots().then((data) => {
            setLots(data.data);
        });
        getUserProducts().then((data) => {
            setProducts(data.data);
        });
    }, []);

    const { userStore } = useStore();
    const { user } = userStore;

    useEffect(() => {
        setBets([]);
        setLots([]);
        setProducts([]);
    }, [user])

    return (

        <GlobalContainer>
            <MainHeader />
            <PageHeader>Моя корзина</PageHeader>

            <Container>

                <Main>
                    {lots.map((lot) => (
                        <LotCard key={lot.id} data={lot} />
                    ))}
                </Main>
                <Main>
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </Main>
                <Main>
                    {bets.map((bet) => (
                        <BetCard key={bet.id} data={bet} />
                    ))}
                </Main>
            </Container>
        </GlobalContainer >
    );
};

export default observer(Basket);
import type { NextPage } from 'next'
import styled from '@emotion/styled'
import ProductForm from '../src/components/ProductForm'
import { useStore } from '../src/stores/useStoreContext';
import MainHeader from '../src/components/MainHeader';




const Container = styled.div`   
    align-items:center;
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

const PageHeader = styled.h1`
    color: white;
`
const GlobalContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const Login: NextPage = () => {

  return (
    <div>
      <MainHeader />
      <GlobalContainer>
        <Container>
          <PageHeader>Добавление товара</PageHeader>
          <ProductForm />
        </Container>
      </GlobalContainer>
    </div>
  )
}

export default Login

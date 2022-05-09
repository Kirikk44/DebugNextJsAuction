import type { NextPage } from 'next'
import styled from '@emotion/styled'
import LoginForm from './src/components/LoginForm'


const Main = styled.main`
  align-items: center; // y
  //justify-content: center; // x
  //flex-direction: column;
  justify-content: center;
  height: 100vh;
  display: flex;
`;

const Container = styled.div`
    background-color:black;    
    & > * {
        
        max-width: 350px;
        width: 100%;
        margin: 10px auto; // середина 
    }
`;


const Home: NextPage = () => {
  return (
    <Main>
      <Container>
        <LoginForm />
      </Container>
    </Main >
  )
}

export default Home
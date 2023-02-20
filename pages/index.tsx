import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Home = () => {
 return (
  <PageContainer>

      <NavBar>
            <Link href='/'>
              <Logo>
                  Dev Landings
              </Logo>
            </Link>
            <Link href='/Login'>
              <ButtonNav>
                Entrar
              </ButtonNav>
            </Link>
      </NavBar>

      <Main>
            <HeadLine>
              Dev Landings
            </HeadLine>
            <SubHeadLine>
              Projetos atmosféricos e otimizados!
            </SubHeadLine>
            <MainActions>
                <Link href='/register'>
                   <ButtonActions>
                    Experimentar
                   </ButtonActions>
               </Link>
            <Link href='/about'>
                <ButtonActions>
                    Saiba Mais
                </ButtonActions>
             </Link>
          </MainActions>
      </Main>

  </PageContainer>
  
  )
}

export default Home

export const PageContainer = styled.div`
        width: 100vw;
        min-height: 100vh; 
   
        display: flex;
        flex-direction: column;
        align-items: center;
`
export const NavBar = styled.div`
    display: flex;
    align-items: center;    
    justify-content: space-between;

    max-width: 900px;
    width: 90%;
    height: 15vh;
`
export const Logo = styled.p`
    font-weight: bold;
    cursor: pointer;

`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    background: blue;
    max-width: 900px;
    width: 90%;
    height: 85vh;
    `

export const HeadLine = styled.h1``
export const SubHeadLine = styled.h2``
export const MainActions = styled.div`
      display: flex;
` 
export const Button = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;

      min-height: 45px;
      min-width: 90px; 

      padding: 0 15px;
    
      border: none;
      outline: none;
      cursor: pointer;

      font: inherit;
      font-size: 12px;

      background: #333;
      color: white;

      transition: 0.5s;

      &:hover {
        color: 333;
        background: #ccc;
        font-weight: bold;
      }
`
export const ButtonNav = styled(Button)``
export const ButtonActions = styled(Button)``

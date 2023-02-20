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

    background: red;
    max-width: 900px;
    width: 90%;
`
export const Logo = styled.p``
export const Main = styled.main`
    max-width: 900px;
    width: 90%`

export const HeadLine = styled.h1``
export const SubHeadLine = styled.h2``
export const MainActions = styled.div`` 
export const Button = styled.button``
export const ButtonNav = styled(Button)``
export const ButtonActions = styled(Button)``

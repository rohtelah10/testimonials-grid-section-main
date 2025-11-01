import GridPage from './pages/GridPage'
import styled from 'styled-components';

export default function App() {
  return (
    <PageWrapper>
        <GridPage/>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: white;
`;
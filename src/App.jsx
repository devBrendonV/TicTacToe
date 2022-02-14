import Quadro from './Componentes/Quadro';
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';

const Container = styled.div`
 width: 100vw;
  height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(76,9,121,1) 34%, rgba(0,212,255,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

function App() {
  return (
    <Container>
      <Quadro/>
    </Container>
  );
}

export default App;
import { Zds, ZdsCore, ZdsContainer, ZdsElement } from '@croquiscom/zds';
import styled from '@emotion/styled';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Zds />
      <ZdsCore />
      <ZdsElement />
      <ZdsContainer />
    </StyledApp>
  );
}

export default App;

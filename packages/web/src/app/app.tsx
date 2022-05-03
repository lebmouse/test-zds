import { Zds,ZdsCore,ZdsContainer,ZdsElement } from '@croquiscom/zds';
import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Zds />
      <ZdsCore />
      <ZdsElement/>
      <ZdsContainer/>
      <NxWelcome title="web" />
    </StyledApp>
  );
}

export default App;

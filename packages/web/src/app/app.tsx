import { Zds,ZdsCore } from '@croquiscom/zds';
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
      <NxWelcome title="web" />
    </StyledApp>
  );
}

export default App;

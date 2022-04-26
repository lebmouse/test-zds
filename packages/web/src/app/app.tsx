import { ZdsElement } from '@croquiscom-pvt/zds/element';
import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="web" />
      <ZdsElement/>
    </StyledApp>
  );
}

export default App;

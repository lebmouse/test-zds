import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ZdsCoreProps {}

const StyledZdsCore = styled.div`
  color: pink;
`;

export function ZdsCore(props: ZdsCoreProps) {
  return (
    <StyledZdsCore>
      <h1>Welcome to ZdsCore!2</h1>
    </StyledZdsCore>
  );
}

export default ZdsCore;

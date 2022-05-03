import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ZdsProps {}

const StyledZds = styled.div`
  color: pink;
`;

export function Zds(props: ZdsProps) {
  return (
    <StyledZds>
      <h1>Welcome to Zds!</h1>
    </StyledZds>
  );
}

export default Zds;

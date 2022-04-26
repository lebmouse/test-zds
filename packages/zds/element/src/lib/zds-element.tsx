import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ZdsElementProps {}

const StyledZdsElement = styled.div`
  color: pink;
`;

export function ZdsElement(props: ZdsElementProps) {
  return (
    <StyledZdsElement>
      <h1>Welcome to ZdsElement!</h1>
    </StyledZdsElement>
  );
}

export default ZdsElement;

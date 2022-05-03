import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ZdsContainerProps {}

const StyledZdsContainer = styled.div`
  color: pink;
`;

export function ZdsContainer(props: ZdsContainerProps) {
  return (
    <StyledZdsContainer>
      <h1>Welcome to ZdsContainer!</h1>
    </StyledZdsContainer>
  );
}

export default ZdsContainer;

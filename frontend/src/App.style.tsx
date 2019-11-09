import styled from "styled-components";

export const Title = styled.h1`
  font-size: calc(1rem + 2vmin);
  color: #606060;
`;

export const Logo = styled.img`
  height: 10vmin;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled(Container)`
  max-width: 50vw;
`;

export const LoadingLogo = styled.img`
  height: 40vmin;
  animation: roll 2s infinite;
  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

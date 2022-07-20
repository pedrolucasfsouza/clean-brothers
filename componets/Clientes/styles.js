import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    50% 50% at 43.18% 54.97%,
    #9eafe0 0%,
    #5674c9 100%
  );
  height: 250px;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
  h1,
  p {
    color: white;
    margin: 10px 0px;
    font-weight: 400;
  }
  p {
    font-weight: 500;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    color: var(--blue-hard);
    font-size: 1.2rem;
  }
`;

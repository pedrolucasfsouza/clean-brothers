import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  background: white;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
  h1,
  p {
    color: var(--text-title);
    margin: 10px 0px;
    font-weight: 400;
  }
  p {
    font-weight: 500;
  }
  h2 {
    color: #5674c9;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 0px 3rem;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0rem;
    flex-direction: column-reverse;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 2rem;
  @media (max-width: 650px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 200px;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #5674c9;
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  a:hover {
    background: transparent;
    border: 1px solid #5674c9;
    color: #5674c9;
  }
`;

export const AnimationContainer = styled.div``;

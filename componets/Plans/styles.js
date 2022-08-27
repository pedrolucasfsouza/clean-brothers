import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 0 5rem;
  @media (max-width: 650px) {
    padding: 0 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  padding: 0px 3rem;
  flex-direction: column;
  @media (max-width: 650px) {
    padding: 0;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #5674c9;
    line-height: 2;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  button {
    width: 200px;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--blue-hard);
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background: transparent;
    border: 1px solid var(--blue-hard);
    color: var(--blue-hard);
  }

  @media (max-width: 650px) {
    padding: 2rem 2rem;
    text-align: center;
    h1 {
      line-height: 1.3;
    }
  }
`;
export const Boxitem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerBoxers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  & > div {
    margin: 0 1rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }

  h2 {
    color: var(--blue-hard);
    font-size: 1.2rem;
  }
  h1{
    font-size: 1.7rem;
    font-weight: 300;
  }
`;

export const Box = styled.div`
  display: flex;

  & > div {
    margin: 0 0.5rem;
  }
`;

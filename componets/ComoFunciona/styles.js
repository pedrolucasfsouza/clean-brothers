import styled from "styled-components";

export const Container = styled.div`
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
    padding: 0rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;

  h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #5674c9;
    line-height: 1.5;
    text-align: center;
  }
  h2 {
    font-size: 1rem;
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
`;

export const ContainerBoxers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  h2 {
    color: var(--blue-hard);
    font-size: 1.2rem;
  }
`;

export const Box = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  padding: 2rem 0rem;
  border-radius: 1rem;
  margin-bottom: 10px;
  @media (max-width: 650px) {
    width: 45%;
    padding: 0rem 0rem;
    text-align: center;
  }
  p {
    font-weight: 200;
    font-size: 1.1rem;
    line-height: 1.35;
    color: var(--text-title);
    text-align: center;
  }
  h1 {
    color: var(--text-title);
    margin: 15px 0px;
    font-size: 1.1rem;
    text-align: center;
    font-weight: 600;
    line-height: 1.5;
  }
`;

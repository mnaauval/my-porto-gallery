import React from "react";
import styled from "styled-components";

const Button = ({ buttons, clicktoFilter }) => {
  return (
    <ButtonContainer>
      {buttons.map((category) => {
        return (
          <Buttons type="button" onClick={() => clicktoFilter(category)}>
            {category}
          </Buttons>
        );
      })}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  width: 70%;
  margin: 3rem auto;
  text-align: center;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.7rem;
  }
`;

const Buttons = styled.button`
  padding: 0.5rem 2rem;
  background-color: #0c3564;
  border: none;
  color: white;
  font-family: inherit;
  font-size: inherit;
  transition: all 0.1s cubic-bezier(1, -0.16, 0.6, 1.35);
  :not(:last-child) {
    margin-right: 1rem;
  }
  :hover {
    background-color: #037fff;
    cursor: pointer;
  }
  :active,
  :focus {
    background-color: #037fff;
    outline: none;
    border: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

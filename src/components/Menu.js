import React from "react";
import styled from "styled-components";

const Menu = ({ menuItem }) => {
  return (
    <ItemList>
      {menuItem.map((item) => {
        return (
          <ItemContainer>
            <ItemWrapper>
              <img src={item.image} alt={item.alt} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </ItemWrapper>
          </ItemContainer>
        );
      })}
    </ItemList>
  );
};

export default Menu;

const ItemList = styled.div`
  display: grid;
  padding-bottom: 3rem;
  @media only screen and (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  padding: 1.2rem 1.2rem;
  background-color: #19202e;
`;

const ItemWrapper = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    transition: all 0.1s ease-in-out;
    :hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 200;
    margin: 1rem 0;
    :hover {
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      color: #037fff;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.596);
  }
  @media only screen and (max-width: 991px) {
    margin: 1.5rem;
  }
`;

import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Menu from "./components/Menu";
import items from "./data";

const setCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons] = useState(setCategories);

  const clicktoFilter = (btnCategory) => {
    if (btnCategory === "All") {
      setMenuItem(items);
      return;
    }
    const filteredCategory = items.filter((item) => item.category === btnCategory);
    setMenuItem(filteredCategory);
  };

  return (
    <AppContainer>
      <Title>
        <h1>
          Portofolio <span>Gallery</span>
        </h1>
      </Title>
      <Button buttons={buttons} clicktoFilter={clicktoFilter} />
      <Menu menuItem={menuItem} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  padding: 0 10rem;
  @media only screen and (max-width: 991px) {
    padding: 0 1rem;
  }
`;

const Title = styled.div`
  padding: 2rem 0;
  text-align: center;
  h1 {
    font-size: 3rem;
  }
  span {
    color: #037fff;
  }
`;

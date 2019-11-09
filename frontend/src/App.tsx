import React, { useState, useEffect } from "react";
import logo from "./coffee.svg";
import { Menu } from "./types/index";
import MenuList from "./components/menu-list";
import { Title, Container, Wrapper, Logo, LoadingLogo } from "./App.style";

const url = 'https://staging-backend-oiyrveq75a-ew.a.run.app';

const App: React.FC = () => {
  const [menus, setMenus] = useState<Array<Menu>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await fetch(`${url}/menus`)
        .then(response => response.json())
        .then(menus => {
          setMenus(menus);
          setIsLoading(false);
        })
        .catch(e => {
          console.error(e);
        });
    };
    fetchData();
  }, []);

  if(isLoading) {
    return (
      <Container>
        <LoadingLogo src={logo} alt="logo"/>
      </Container> 
    );
  }

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="logo"/>
        <Title>Glasgow DevFest Coffee Shop</Title>
        <MenuList menuItems={menus} />{" "}
      </Wrapper>
    </Container>
  );
};

export default App;

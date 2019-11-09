import React from 'react'
import styled from 'styled-components';
import {Menu} from "../types/index"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 1rem 3rem;
    box-sizing: border-box;
    background-color: #f5f5f6;
    border-radius: 6px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Item = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    background-color: rgba(96, 96, 96, 0.2);
    color: #303030;
    font-size: calc(0.3rem + 1vmin);
    font-weight: 700;
    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    padding: 1rem 2rem;
    margin: 0.5rem 0;
`;

type MenuItemProps = Menu & {
    key: string;
};

const MenuItem: React.FC<MenuItemProps> = ({name, price}) => {
    return (
        <Item>
            <p>Name: <span>{name}</span></p>
            <p>Price: <span>{price}</span></p>
        </Item>    
    )
}

type MenuListProps = {
    menuItems: Menu[]
}

const MenuList: React.FC<MenuListProps> = ({menuItems}) => {
    return (
        <Container>
            {
                menuItems.map(({price, name}) => {
                    return (
                        <MenuItem key={name} name={name} price={price}/>
                    )
                })
            }
        </Container>
    )
}

export default MenuList;
import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Categories = () => {
  return (
    <CategoryList>
      <CLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h5>Italian</h5>
      </CLink>
      <CLink to={"/cuisine/American"}>
        <FaHamburger />
        <h5>American</h5>
      </CLink>
      <CLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h5>Thai</h5>
      </CLink>
      <CLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h5>Chinese</h5>
      </CLink>
    </CategoryList>
  );
};

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const CLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform:scale(0.8);
  h5{
    color: white;
  }
  svg{
      color: white;
  }
  &.active{
      background: linear-gradient(to right, #f27121, #e94057);
      svg{
          color: white;
      }
      h5{
          color:white;
      }
  }
  
`;

export default Categories;

import { styled } from "styled-components";

export const NavbarSection = styled.div``;
export const NavbarLogoImg = styled.img`
  width: 121px;
  height: 57px;

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 40px;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 100px;
`;

export const NavbarLogo = styled.div`
  cursor: pointer;
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const NavbarItem = styled.li`
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const NavbarButton = styled.button`
  width: 114.059px;
  height: 35px;
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  background: #ffb200;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.16);
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    width: 100.059px;
    padding: 10px 10px;
  }
`;

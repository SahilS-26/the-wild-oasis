import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const NAV_LINKS = [
  {
    id: 1,
    name: "Home",
    route: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    id: 2,
    name: "Bookings",
    route: "/bookings",
    icon: HiOutlineCalendar,
  },
  {
    id: 3,
    name: "Cabins",
    route: "/cabins",
    icon: HiOutlineHomeModern,
  },
  {
    id: 4,
    name: "Users",
    route: "/users",
    icon: HiOutlineUsers,
  },
  {
    id: 5,
    name: "Settings",
    route: "/settings",
    icon: HiOutlineCog6Tooth,
  },
];

function MainNav() {
  return (
    <nav>
      <NavList>
        {NAV_LINKS.map((cur) => {
          const IconComponent = cur?.icon;

          return (
            <li key={cur?.id}>
              <StyledNavLink to={cur?.route}>
                <IconComponent />
                <span>{cur?.name}</span>
              </StyledNavLink>
            </li>
          );
        })}
      </NavList>
    </nav>
  );
}

export default MainNav;

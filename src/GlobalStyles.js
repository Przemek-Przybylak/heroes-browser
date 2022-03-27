import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  list-style: none;
`;
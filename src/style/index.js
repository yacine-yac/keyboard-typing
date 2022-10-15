import { createGlobalStyle } from "styled-components"
import dark from "./dark"
import light from "./light" 
export const GlobalStyle= createGlobalStyle`
  ${props=>{return props.theme.mode== 'Dark' ?  dark : light} };
` 
  
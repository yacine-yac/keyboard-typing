import { createGlobalStyle } from "styled-components"
import dark from "./dark"
import light from "./light" 
export const GlobalStyle= createGlobalStyle`
 :root{
   --bar-color: ${props=>props.theme.colorBar}; 
  ${props=>{  return props.theme.mode== true ?  dark : light} };
 }  
` 
  
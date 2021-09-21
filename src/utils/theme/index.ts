import {DefaultTheme} from "styled-components"

const light: DefaultTheme = {
  type: "light",
  background: "#EFEFEF",
  colors: {
    default: "#FCFCFC",
    defaultAccent:" #F5F5F5",
    primary: "#636895",
    transparent: "#EFEFEF66"
  }
};

const dark: DefaultTheme = {
  type: "dark",
  background: "#4A4E73",
  colors: {
    default: "#636895",
    defaultAccent:"#585C87",
    primary: "#FAFAFA",
    transparent: "#63689566"
  }
}

export {light, dark};
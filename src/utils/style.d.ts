import "styled-components"

declare module "styled-components"{
  export interface DefaultTheme {
    type: "dark" | "light";
    background: string;
    colors: {
      default: string;
      defaultAccent: string;
      primary: string;
      transparent: string;
    }
  }

}
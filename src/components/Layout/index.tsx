import styled from "styled-components"
import Body from "../Body"
import Card from "../Card"
import Skills from "./Skills"
import Tools from "./Tools"

const Layout = styled(({className})=>{
  return (
    <div className={className}>
      <Skills />
      <Body />
      <Tools />
    </div>
  )
})`
display:flex;
flex-flow:row nowrap;

`

export default Layout;
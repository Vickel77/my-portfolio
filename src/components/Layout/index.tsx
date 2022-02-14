import styled from "styled-components";
import Body from "../Body";
import Skills from "./Skills";
import Tools from "./Tools";

const Layout = styled(({ className }) => {
  return (
    <div className={className}>
      <Skills />
      <Body />
      <Tools />
    </div>
  );
})`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 600px) {
    flex-flow: row wrap;
  }
`;

export default Layout;

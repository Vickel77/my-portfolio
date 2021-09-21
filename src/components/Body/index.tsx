import styled from "styled-components"
import Card from "../Card";
import Projects from "../Projects";

const Body = styled(({className})=>{
  return (
    <div className={className}>
      <Card size="90%">
        <div>
          I am a value based person who combines proactiveness
          and good work ethics to meet deadlines and deliver the best
          to every project i work on
        </div>
        <div className="work-experience">
          <Card size="33%">
            <h3>Graphic Design</h3>
            <h5>4 years experience</h5>
          </Card>
          <Card size="33%">
            <h3>Front End development</h3>
            <h5>3 years experience</h5>
          </Card>
          <Card size="33%">
            <h3>Back End development</h3>
            <h5>1 year experience</h5>
          </Card>
        </div>
        
      </Card>
      <Projects />
    </div>
  )
})`
display:flex; 
flex-flow:column nowrap;
justify-content:flex-start;
${Card} { 
  margin: 0 auto;
  .work-experience {
    width:100%;
    display:flex;
    justify-content:center;
    align-items:flex-end;
  }
}

padding-top:20px;

`

export default Body;
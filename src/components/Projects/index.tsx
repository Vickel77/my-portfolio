import styled from "styled-components";
import Card from "../Card"
interface ProjectProps {
  className?: any;
  title: string;
  description: string;
}
const Project =styled((props:ProjectProps)=>{
  return(
    <Card className={props.className} size="40%">
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="description">
        {props.description}
      </div>
    </Card>
  )
})`
  background: ${({theme})=>theme.colors.defaultAccent};
  height:200px;
  display:flex;
  justify-content:center;
  align-item:center;
  ${Card} {
    margin-bottom:20px;
  }
  

`

const Projects =styled(({className})=>{
  return(
    <div className={className}>
      <Project title="JAMSELECT" description="Built for the community of music lovers" />
      <Project title="GWOM" description="Here to help the female gender" />
      <Project title="Accounting World" description="creating accoutning solutions" />
      <Project title="HOTR KD" description="welcome to the mission house" />
    </div>
  )
})`
  margin-top:50px;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  border:1px solid red;
`

export default Projects;
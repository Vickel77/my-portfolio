import styled from "styled-components"
import Card from "../Card"

const Tools = styled(({className})=>{
  return (
    <div className={className}>
      <Card className="tools-wrap" title="SKILLS" >
        <ul className="tools">
          <h4>DESIGN</h4>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>CorelDraw</li>
          <br/>
          <h4>FRONT END</h4>
          <li>React</li>
          <li>Next.js</li>
          <li>HTML/CSS</li>
          <li>Three.js</li>
          <br/>
          <h4>BACK END</h4>
          <li>Node</li>
          <li>Exrpess</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
        </ul>
      </Card>
    </div>
  )
})`
  padding:20px 0;
  background:${({theme})=>theme.colors.defaultAccent};
  .tools-wrap {
    .tools > *{padding:2.5px;}
    ul, li {
      padding:0;
      margin:0;
    }
    li {
      list-style-type:none;
    }
  }

`

export default Tools;
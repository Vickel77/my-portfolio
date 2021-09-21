import styled from "styled-components"

interface CardProps {
  className?: any,
  image?: string,
  title?: string,
  children?: any,
  size?: string,
  
}

const Card = styled(({className, title, children, size}: CardProps)=>{
  return (
    <div className={className}>
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
})`
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  width: ${({size})=> size ?? "300px" };
  background: ${({theme})=>theme.colors.default};
  padding: 25px 20px;
  margin:10px;
  border-radius:15px;
  box-shadow:0 2px 5px ${({theme})=>theme.background};
  .card-title {
    margin-bottom:15px;
  }
  .card-content {
    text-align:center;
  }

 `

export default Card;

export const ProjectCard = styled(Card)`
  width:250px;
  height:250px;
  box-shadow: 4px 4px 10px rgba();
  box-shadow: -4px -4px 10px rgba();
`
import styled from "styled-components"

const StyledButton = styled.button`
  background: transparent;
  padding:10px 15px;
  border:2px solid ${({theme})=>theme.colors.primary};
  color:${({theme})=>theme.colors.primary};
  border-radius:20px;
  &:hover {
    transition:.3s;
    background: ${({theme})=>theme.colors.primary};
    color: ${({theme})=>theme.colors.default};
    cursor:pointer;
  }

`

const Button = ({onClick, label}:any)=>{
  return(
    <StyledButton onClick={onClick}>
      {label}
    </StyledButton>
  )
}


export default Button;
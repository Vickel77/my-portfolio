import styled from "styled-components";
import Button from "../Button";
import SocialMedia from "../SocialMedia";
// import Typical from "react-typical";

const Header = styled(({ className, setIsDarkMode, isDarkMode }) => {
  return (
    <div className={className}>
      <div className="first-section">
        {/* chartogne-tallet */}
        <div className="header-text">
          {/* use typical */}
          {/* <Typical
            loop={infinity}
            wrapper="b"
            steps = {[[
              "Web developer",
              "Graphic Designer",
              "web designer",
            ]]}
          /> */}

          <h3>JOB DESC</h3>
          <p>
            I love what i do and i do what i love this helps me bring out the
            best in every work i do{" "}
          </p>
          <div className="button">
            <Button onClick={()=>setIsDarkMode(!isDarkMode)}  label="LET's COLLABORATE" />
          </div>
          <SocialMedia size="2" />
        </div>
        <div className="center-circle">
          <h1>KELECHI ALIGWO</h1>
        </div>
      </div>
      <div className="second-section"></div>
    </div>
  );
})`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  .first-section {
    background: ${({theme})=>theme.colors.default};
    width: 55%;
    height: 100vh;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    .center-circle {
      background: inherit;
      display:flex;
      justify-content:center;
      align-items:center;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(45%, -50%);
    }
    .header-text {
      text-align:left;
      width: 50%;
    }
    .button {
      margin:50px 0;
    }
  }
  .second-section {
    width: 45%;
    height: 100vh;
    background: -webkit-linear-gradient(
        rgba(30, 30, 30, 0.5),
        rgba(30, 30, 30, 0.5)
      ),
      url("right-side.jpg");
    background-size: cover;
  }
  
`;

export default Header;

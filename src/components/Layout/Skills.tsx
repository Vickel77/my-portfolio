import { useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";
import SocialMedia from "../SocialMedia";

const MyProfile = styled(({ className }) => {
  return (
    <Card className={className} title="MY PROFILE">
      <div className="profile-picture"></div>
      <div className="profile-name">
        <h4>KELECHI ALIGWO</h4>
        <h5>Web developer</h5>
      </div>
    </Card>
  );
})`
  .profile-picture {
    background: url("kelechi.jpg");
    background-position: 20% 50%;
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .profile-name {
    padding: 20px 0 0 0;
  }
`;

const Stats = styled(({ className }) => {
  return (
    <Card className={className} title="STATS">
      <div className="stats">
        <div className="front-end-stat">
          <div className="front-end" />
          <h5 style={{ fontWeight: "lighter" }}>
            Frontend <br /> Development
          </h5>
        </div>
        <div className="back-end-stat">
          <div className="back-end" />
          <h5 style={{ fontWeight: "lighter" }}>
            Backend <br /> Development
          </h5>
        </div>
      </div>
    </Card>
  );
})`
  .stats {
    width: 250px;
    display: flex;
    justify-content: space-between;
    .front-end-stat,
    .back-end-stat {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
    .front-end,
    .back-end {
      width: 50px;
      height: 50px;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
    }
  }
`;

const Level = styled(({ className }) => {
  return (
    <Card className={className}>
      <Skill level="100%" title="HTML/CSS" />
      <Skill level="50%" title="JAVASCRIPT" />
      <Skill level="45%" title="TYPESCRIPT" />
      <Skill level="45%" title="REACT" />
      <Skill level="40%" title="NEXT.js" />
      <Skill level="30%" title="NODE" />
    </Card>
  );
})``;
interface skillProps {
  className?: any;
  title: string;
  level: string;
}
const Skill = styled(({ className, title, level }: skillProps) => {
  useEffect(() => {}, []);
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="level" />
    </div>
  );
})`
  width: 300px;
  text-align: left;
  margin-bottom: 10px;
  .level {
    margin-top: 2.5px;
    background: ${({ theme }) => theme.colors.primary};
    height: 3px;
    width: ${({ level }) => level};
  }
`;

const Skills = styled(({ className }) => {
  return (
    <div className={className}>
      <MyProfile />
      <Stats />
      <Level />
      <br />
      <SocialMedia size="1" />
    </div>
  );
})`
  // height: 100vh;

  // overflow-y: auto;
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.defaultAccent};
  ${SocialMedia} {
    margin: 0 auto;
  }
`;
export default Skills;

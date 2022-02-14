import styled from "styled-components";
import Card, { ProjectCard } from "../Card";
interface ProjectProps {
  className?: any;
  title: string;
  description: string;
  link: string;
}
const Project = styled((props: ProjectProps) => {
  return (
    <ProjectCard className={props.className} size="40%">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="description">{props.description}</div>
      </a>
    </ProjectCard>
  );
})`
  background: ${({ theme }) => theme.colors.defaultAccent};
  // height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  a,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${Card} {
    // margin-bottom: 20px;
  }
`;

const Projects = styled(({ className }) => {
  return (
    <div className={className}>
      <h2 className="header-text">PROJECTS</h2>
      <div className="content">
        <Project
          title="JAMSELECT"
          description="Built for the community of music lovers"
          link="https://www.jamselect.com"
        />
        <Project
          title="GWOM"
          description="Here to help the female gender"
          link="https://www.greatwomenmission.org/"
        />
        <Project
          title="Accounting World"
          description="creating accoutning solutions"
          link="https://accountingworld.netlify.app/#business"
        />
        <Project
          title="HOTR KD"
          description="welcome to the mission house"
          link="https://hotr-kd.vercel.app/"
        />
        <Project
          title="TIC TAC TOE"
          description="game"
          link="https://kelz-tac-toe.netlify.app"
        />
        <Project
          title="Staff Form"
          description="Form to input staff names and email addresses"
          link="https://kelzvueform.netlify.app/"
        />
      </div>
    </div>
  );
})`
  .header-text {
    text-align: center;
    padding: 20px 0;
    font-weight: 900;
    font-size: 2rem;
  }
  .content {
    // height: 60vh;
    overflow-y: auto;
    padding: 0px 0 30px;
    // display: flex;
    // flex-flow: row wrap;
    // justify-content: space-around;
    // border: 1px solid red;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export default Projects;

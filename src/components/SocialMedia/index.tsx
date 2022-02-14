import styled from "styled-components";

type sizeProp = "1" | "2" | "3";
interface socialProps {
  size: sizeProp;
  className?: any;
}
const getSize = (size: sizeProp) => {
  switch (size) {
    case "1":
      return "20px";
    case "2":
      return "30px";
    case "3":
      return "50px";
    default:
      return "40px";
  }
};
const SocialMedia = styled(({ className, size }: socialProps) => {
  return (
    <div className={className}>
      <img src="fb.png" alt="fb" height={getSize(size)} />
      <img src="github.png" alt="github" height={getSize(size)} />
      <img src="slack.png" alt="slack" height={getSize(size)} />
    </div>
  );
})`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  & > * {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  }
  img:hover {
    transition: 0.2s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default SocialMedia;

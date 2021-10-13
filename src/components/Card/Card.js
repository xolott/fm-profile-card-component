import styled from "styled-components";
import Avatar from "../Avatar";
import cardPattern from "../../assets/img/bg-pattern-card.svg";
import avatar from "../../assets/img/image-victor.jpg";
import CardInfo from "./CardInfo";
import CardStats from "./CardStats";
import UserInfo from "./UserInfo";

const CardContainer = styled.div`
  border-radius: 14px;
  overflow: hidden;
  background-color: ${(props) => props.theme.card.color};
  position: relative;
  .card--pattern {
    display: block;
    width: 100%;
    height: 140px;
  }
  animation: fadeIn 1.2s;

  @keyframes fadeIn {
    0% {
      top: 100px;
      opacity: 0%;
    }
    100% {
      top: 0px;
      opacity: 1;
    }
  }
`;

const Card = ({ user }) => {
  return (
    <CardContainer>
      <img
        src={cardPattern}
        alt="Card Pattern"
        aria-hidden="true"
        className="card--pattern"
      />
      <CardInfo>
        <Avatar src={avatar} alt={`${user.name}'s avatar`} />
        <UserInfo user={user} />
        <CardStats stats={user.stats} />
      </CardInfo>
    </CardContainer>
  );
};

export default Card;

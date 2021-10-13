import styled from "styled-components";

const UserInfoContainer = styled.div`
  margin: 24px 0px;
  text-align: center;
  h2 {
    color: ${(props) => props.theme.h3.color};
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 700;
    span {
      color: ${(props) => props.theme.text.color};
      margin-left: 4px;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1em;
    }
  }
  .user-info--location {
    display: block;
    font-size: 0.8rem;
    margin-top: 10px;
    color: ${(props) => props.theme.text.color};
  }
`;

const UserInfo = ({ user }) => {
  return (
    <UserInfoContainer>
      <h2>
        {user.name} <span>{user.age}</span>
      </h2>
      <span className="user-info--location">{user.location}</span>
    </UserInfoContainer>
  );
};

export default UserInfo;

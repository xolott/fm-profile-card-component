import styled from "styled-components";

const Avatar = styled.img.attrs({
  "aria-hidden": true,
})`
  width: ${(props) => props.size ?? 96};
  height: ${(props) => props.size ?? 96};
  border-radius: 100%;
  border: 4px solid ${(props) => props.theme.card.borderColor};
`;

export default Avatar;

import styled from "styled-components";
import bgPatternTop from "../assets/img/bg-pattern-top.svg";
import bgPatternBottom from "../assets/img/bg-pattern-bottom.svg";

const Layout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-image: url(${bgPatternTop}), url(${bgPatternBottom});
  background-position: left -755px top -600px, right -755px bottom -605px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media only screen and (min-width: 1000px) {
    background-position: left -300px top -480px, right -224px bottom -640px;
  }
`;

export default Layout;

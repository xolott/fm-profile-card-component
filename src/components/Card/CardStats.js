import styled from "styled-components";

const CardStatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #eee;
  padding: 28px 16px;

  h3 {
    color: ${(props) => props.theme.h3.color};
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 700;
    span {
      color: ${(props) => props.theme.text.color};
      margin-top: 8px;
      font-weight: 400;
      font-size: 0.625rem;
      letter-spacing: 0.15em;
      line-height: 1;
      display: block;
    }
  }
`;

const CardStats = ({ stats }) => {
  return (
    <CardStatsContainer>
      {stats.map((x) => (
        <h3 key={x.label}>
          {x.value} <span>{x.label}</span>
        </h3>
      ))}
    </CardStatsContainer>
  );
};

export default CardStats;

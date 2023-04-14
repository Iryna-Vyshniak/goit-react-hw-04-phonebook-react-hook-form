import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: rgba(251, 82, 3, 0.834);
  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;
  font-size: ${props => props.theme.fontSizes.l};
  letter-spacing: 1.5px;
`;

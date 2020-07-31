import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: unset;
    flex-direction: column;
  }
`;

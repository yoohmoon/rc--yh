import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

export const ModalHeader = styled.header`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderGray};

  h5 {
    font-weight: 700;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
export const StyledCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 7.5px;
  left: 9.5px;
`;

export const MainSection = styled.section`
  max-height: 70vh;
  padding: 20px 20px;
  padding-bottom: 0;

  color: ${({ theme }) => theme.color.mainBlack};

  overflow-y: auto;
`;

export const WelcomeMsg = styled.h4`
  margin: 8px 0 24px 0;
  font-size: 22px;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  margin: 16px 0 24px 0;
`;

export const SeparatorWrapper = styled.div`
  position: relative;
  margin: 16px 0;

  div {
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }

  span {
    position: absolute;
    top: -5px;
    left: 240px;
    background-color: #fff;
    font-size: 12px;
    padding: 0 15px;
    color: ${({ theme }) => theme.color.mainBlack};
  }
`;

export const ButtonsBox = styled.div``;
export const ButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

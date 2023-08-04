import React from 'react';
import { css, styled } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactElement;
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
  bgc?: string;
}

interface ButtonContainerProps {
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
  bgc?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  size = 'large',
  border,
  bgc,
}) => {
  return (
    <>
      <ButtonContainer size={size} border={border} bgc={bgc}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <TextWrapper>
          <span>{children}</span>
        </TextWrapper>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;

  background-color: ${(props) => props.bgc};
  color: ${(props) => (props.bgc ? '#fff' : props.theme.color.mainBlack)};
  border-radius: 8px;
  font-size: ${(props) => (props.border ? '14px' : '16px')};
  font-weight: 700;

  ${(props) => {
    if (props.size === 'large') {
      return css`
        padding: 13px 0px;
        /* padding: 13px 23px; */
        width: 520px;
      `;
    } else if (props.size === 'medium') {
      return css`
        width: 322px;
      `;
    } else if (props.size === 'small') {
      return css`
        width: 103px;
      `;
    }
  }}

  ${(props) => {
    if (props.border) {
      return css`
        border: 1px solid ${props.theme.color.mainBlack};
        font-size: 14px;
      `;
    }
  }}
`;

const IconWrapper = styled.div`
  /* margin-right: 100px; */
`;

const TextWrapper = styled.div`
  width: 440px;
`;

export default Button;

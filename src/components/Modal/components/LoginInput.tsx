import React from 'react';
import { styled } from 'styled-components';

const LoginInput = () => {
  return (
    <InputWrapper>
      <input
        type='email'
        id='floatingInput'
        placeholder=''
        data-testid='email-input'
      />
      <label htmlFor='floatingInput'>이메일</label>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 56px;
  border: 1px solid ${({ theme }) => theme.color.inputGray};
  border-radius: 7px;

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.color.mainBlack};
  }

  input {
    width: 95%;
    border: none;
    outline: none;
    cursor: text;
    margin: 26px 12px 6px;
    /* margin-right: 20px; */

    &:focus,
    /* 인풋 요소가 플레이스홀더를 보여주지 않을 때 = 인풋에 값이 입력됐을 때 */
    &:not(:placeholder-shown) {
      & + label {
        top: -10px;
        font-size: 12px;
      }
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 56px;
    padding-left: 12px;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export default LoginInput;

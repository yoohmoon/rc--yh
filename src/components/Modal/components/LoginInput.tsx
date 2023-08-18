import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import signupData from '../../../store/signupData';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

type InputProps = {
  isEmailValid: boolean;
};

const LoginInput = () => {
  const [signupInfo, setSignupInfo] = useRecoilState(signupData);
  // const [emailValue, setEmailValue] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  //반드시 '' 초기값 설정해줘야하나? 빈칸으로 두면 생길 수 있는 문제는 무엇일까? -> 초기값을 설정하지 않으면 undefined이 되므로, 예기치않은 결과를 파생시킬 수 있음.

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const currentEmail = e.target.value;
    setSignupInfo((prev) => ({ ...prev, email: currentEmail }));

    // setEmailValue(currentEmail);
    //setEmailValue했던 건 emailValue 값이 찍히는 게 한 문자씩 느림. currentEmail는 그대로 출력됨. 무슨 차이일까?
    // 초기값이 빈문자열이라서 그럴까? -> x 상태 설정 함수 setEmailValue가 비동기적으로 작동하기 때문.
    // console.log('emailValue? ', emailValue, currentEmail);

    if (!emailRegex.test(currentEmail)) {
      setEmailMsg('올바른 이메일 형식으로 입력해주세요.');
      setIsEmailValid(false);
    } else {
      setEmailMsg('');
      setIsEmailValid(true);
    }
  };

  return (
    <div>
      <InputWrapper isEmailValid={isEmailValid}>
        <input
          type='email'
          id='floatingInput'
          placeholder=''
          data-testid='email-input'
          value={signupInfo.email} // (권장 방식) Controlled Component로 만들기 위함 ->  React 상태와 연동
          onChange={onEmailChange}
        />
        <label htmlFor='floatingInput'>
          <FormattedMessage id='email.input' />
        </label>
      </InputWrapper>
      {signupInfo.email && !isEmailValid && (
        <ErrorMsg>
          <FontAwesomeIcon icon={faCircleExclamation} size='xs' />
          <span>{emailMsg}</span>
        </ErrorMsg>
      )}
    </div>
  );
};

const InputWrapper = styled.div<InputProps>`
  position: relative;
  width: 100%;
  min-height: 56px;
  border: 1px solid ${({ theme }) => theme.color.inputGray};
  border-radius: 7px;

  &:focus-within {
    border: 2px solid
      ${(props) =>
        props.isEmailValid
          ? props.theme.color.mainBlack
          : props.theme.color.alertRed};
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

        color: ${(props) =>
          props.isEmailValid
            ? props.theme.color.darkGray
            : props.theme.color.alertRed};
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

const ErrorMsg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.alertRed};

  span {
    margin-left: 8px;
    font-size: 12px;
  }
`;

export default LoginInput;

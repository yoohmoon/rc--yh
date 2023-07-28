import React, { ChangeEvent, useState } from 'react';
import { Todo } from './index.types';
import data from './datasource/data.json';

// let data: Todo[];

const TodoList: React.FC = () => {
  //   const todos: Todo = data;
  //
  const [todo, setTodo] = useState<Todo[]>(data);

  //   crud : 생성, 읽고(map 고차함수를 통해 구현), 업데이트, 지우기
  let [inputValue, setInputValue] = useState<string>('');
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const handleOnClick = () => {
    // 1. 새 배열을 만든다.
    const newTask: Todo = {
      id: todo.length + 1,
      content: inputValue,
      isChecked: false,
    };

    // 2. setTodo를 사용하여 1을 기존 배열에 추가한다.
    setTodo([...todo, newTask]);
    // todo.push(newTask);
    // e.target.value = '';
    // todo.inputValue = '';

    // 3.input에 남아있는 입력값을 초기화한다.
    setInputValue('');

    // +) 1,2번으로 만들어서 추가하는 이유?
    // 불변성: 배열의 주소값을 바꿔줘서 리액트가 변화를 감지할 수 있게 한다.
    // 목적 : 원본의 값을 지키기 위해 + 업데이트를 쳐주기 위해

    // 타입 지정
    // 1. 변수 선언부
    // 2. 함수 선언부 : 파라미터, 반환값
    // 3. 함수 호출부
  };

  const handleIsChecked = () => {
    // 숙제
  };

  return (
    <div className='TodoList'>
      <h1>TodoList</h1>
      <input type='text' value={inputValue} onChange={handleOnChange} />
      <button onClick={handleOnClick}>ADD</button>
      {
        // 고차 함수
        todo.map((data, index, todos) => (
          <div key={index}>
            <div>data: {data.id}</div>
            <div
              style={{
                textDecoration: data.isChecked ? 'line-through' : 'none',
              }}
            >
              <p onClick={handleIsChecked}>content: {data.content}</p>
            </div>
            <div>index: {index}</div>
            <div>todos: {todos.length}</div>
          </div>
        ))
      }
    </div>
  );
};

export default TodoList;

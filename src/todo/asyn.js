// 비동기 -> 추가자료 읽어보기

console.log('a');
console.log('b');
setTimeout(() => {
  console.log('timeout');
}, 0);
console.log('c');

// js는 동기적으로 실행되지만, setTimeOut은 따로 관리 된다. -> 타임아웃이 가장 나중에 출력됨

/* 
web api => axios, fetch, DOM, setTimeOut
브라우저 엔진이 따로 관리,
따로 관리되는 공간
: 이벤트 루프, 콜스택, 큐
*/

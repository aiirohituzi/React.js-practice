import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
 
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// 전체새로고침하지않고 수정된 부분만 갱신하도록 하는 코드
// 그러나 local state를 저장하지 않는 문제 발생 -> react-hot-loader 를 설정하여 해결
// constructor를 실행하지 않는 단점이 있다 직접 새로고침 해주어야함
if (module.hot) {
    module.hot.accept();
}
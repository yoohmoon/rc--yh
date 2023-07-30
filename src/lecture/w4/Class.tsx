import React from 'react';
import { useNavigate } from 'react-router-dom';

// 클래스
export default class ComponentA extends React.Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate?');
    return false;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Component A , class</h1>
        {/* <button onClick={() => {this.setState({count: this.state.count++})}}></button> */}
      </div>
    );
  }
}

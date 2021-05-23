import React, { PureComponent } from 'react';
import {
  Button,
} from 'antd';

interface StateProps {};
interface IProps {};

export default class Component extends PureComponent {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      title: 'this is a title',
    };
    this.handleReverseTitle = this.handleReverseTitle.bind(this);
  }

  handleReverseTitle(): void {
    this.setState((prevState) => ({
      title: prevState.title.split('').reverse().join(''),
    }));
  }

  render() {
    return (
      <>
        <div>component</div>
        <div>{this.state.title}</div>
        <Button onClick={this.handleReverseTitle}>反转</Button>
      </>
    )
  }
}
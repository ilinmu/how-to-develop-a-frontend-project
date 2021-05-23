import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect, Dispatch } from 'dva';
import {
  Button,
} from 'antd';

interface State {
  title: string;
};

interface StoreProps {
  name: string;
  count: number;
}

interface Props extends StoreProps {
  dispatch: Dispatch;
};

function mapStateToProps(state: { index: StoreProps; }) {
  return {
    name: state.index.name,
    count: state.index.count,
  };
}

class Component extends PureComponent<Props, State> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      title: 'this is a title',
    };
    this.handleReverseTitle = this.handleReverseTitle.bind(this);
  }

  handleReverseTitle(): void {
    const {
      dispatch,
      count,
    } = this.props;
    dispatch({
      type: 'index/add',
      payload: {
        count: count + 10,
      }
    })
    this.setState((prevState) => ({
      title: prevState.title.split('').reverse().join(''),
    }));
  }

  render() {
    const {
      name,
      count,
    } = this.props;
    return (
      <>
        <div>component</div>
        <div>hello {name}, count is {count}</div>
        <div>{this.state.title}</div>
        <Button onClick={this.handleReverseTitle}>反转</Button>
      </>
    )
  }
}

export default connect(mapStateToProps)(Component);
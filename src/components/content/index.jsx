import React, { Component } from 'react'
import { Accordion, List } from 'antd-mobile';
// Default SortableJS
import Sortable from 'sortablejs';
import { deepCopy } from '../../common/index'
import './index.less';
const Item = List.Item;

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  jumpLink = () =>{
    this.props.history.push('/sortList')
  }

  render() {
    return (
      <List className="my-list">
        <Item arrow="horizontal" multipleLine onClick={this.jumpLink}>
          可拖拽排序列表
        </Item>
      </List>
    );
  }
}
export default Content
import React, { Component } from 'react'
import { Accordion, List } from 'antd-mobile';
// Default SortableJS
import Sortable from 'sortablejs';
import './index.less';
const Item = List.Item;

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: []
    }
  }

  componentDidMount() {
    let {menus} = this.state
    for (let i=1; i<11;i++){
      menus.push({
        key:i,
        name:`item${i}`
      })
    }
    this.setState({menus})
  }

  sortableGroupDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {
        draggable: ".rows",
        // 列表的任何更改都会触发
        onSort: evt => {
          let { menus } = this.state
          //如果当前元素在拖动目标位置的下方，先将当前元素从数组拿出，数组长度-1，我们直接给数组拖动目标位置的地方新增一个和当前元素值一样的元素，
          //我们再把数组之前的那个拖动的元素删除掉，所以要len+1
          if (evt.oldIndex > evt.newIndex) {
            menus.splice(evt.newIndex, 0, menus[evt.oldIndex]);
            menus.splice(evt.oldIndex + 1, 1)
          } else {
            //如果当前元素在拖动目标位置的上方，先将当前元素从数组拿出，数组长度-1，我们直接给数组拖动目标位置+1的地方新增一个和当前元素值一样的元素，
            //这时，数组len不变，我们再把数组之前的那个拖动的元素删除掉，下标还是index
            menus.splice(evt.newIndex + 1, 0, menus[evt.oldIndex]);
            menus.splice(evt.oldIndex, 1)
          }
          console.log(menus, 'menus')//打印数组拖拽后的顺序
        },
      };
      Sortable.create(componentBackingInstance, options);
    }
  };
  renderSelectedItemView = (item, i) => {
    return (
      <Accordion className="rows" onChange={this.onChange}>
        <Accordion.Panel header={item.name} data-id={item.key} className="pad">
          <div>this is panel content2 or other</div>
          <div>this is panel content2 or other</div>
          <div>this is panel content2 or other</div>
        </Accordion.Panel>
      </Accordion>
      // <List className="rows">
      //   <Item>{item}</Item>
      // </List>
    )
  }
  render() {
    let { menus } = this.state
    return (
      <div className="grid-box" ref={this.sortableGroupDecorator}>
        {menus &&
          menus.map((item, i) => {
            return this.renderSelectedItemView(item, i);
          })}
      </div>
    );
  }
}
export default Content
import React, { Component } from 'react'
import { Accordion, List, Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile';
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
    let { menus } = this.state
    for (let i = 1; i < 21; i++) {
      menus.push({
        key: i,
        name: '马来西亚公司',
        score:2.51
      })
    }
    this.setState({ menus })
  }

  sortableGroupDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {
        draggable: ".rows", // 允许拖拽的项目类名
        forceFallback: true, // flse 忽略 HTML5拖拽行为，强制回调进行
        group: 'shared', // set both lists to same group
        animation: 150,//number 单位：ms，定义排序动画的时间；
        delay: 200,//number 定义鼠标选中列表单元可以开始拖动的延迟时间；
        // handle: ".my-handle", // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
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
      // <Accordion className="rows" onChange={this.onChange}>
      //   <Accordion.Panel header={item.name} data-id={item.key} className="pad">
      //     <div>this is panel content2 or other</div>
      //     <div>this is panel content2 or other</div>
      //     <div>this is panel content2 or other</div>
      //   </Accordion.Panel>
      // </Accordion>
      // <List className="rows">
      //   <Item>{item}</Item>
      // </List>
      <Card className="rows">
        <Card.Body data-id={item.key} className="pad">
          <div className='rowDiv'>
            {/* <Icon className='my-handle' type='ellipsis'/> */}
            <span>{item.key}</span>
            <span>{item.name}</span>
            <span>{item.score}</span>
          </div>
        </Card.Body>
      </Card>
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
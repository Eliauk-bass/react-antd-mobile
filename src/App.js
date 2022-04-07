import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import Top from"./components/top/index"
import Content from"./components/content/index"
import Footer from"./components/footer/index"
import SortList from"./components/content/sortList/index"
// import './App.css';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className='main'>
            {/* 顶部操作栏 */}
            <div className="top">
              <Switch>
                <Route path='*' component={Top} />
              </Switch>
            </div>
              <div className='content'>
                <Switch>
                    <Route exact path='/' component={Content}></Route>
                    <Route exact path='/sortList' component={SortList}></Route>
                </Switch>
              </div>
            {/* 底部操作栏 */}
            <div className="footer">
              <Switch>
                <Route path='*' component={Footer} />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="movie">
        <a href="/movie">영화</a>
      </Menu.Item>
      <Menu.Item key="favorite">
        <a href="/favorite">즐겨찾기</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu
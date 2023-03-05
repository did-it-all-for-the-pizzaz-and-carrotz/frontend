import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';
import './Button.scss'

const MyButton = ({title, onClick, type}) => {

  return (
    <>
        <button onClick={onClick} className={`button ${"button_"+type}`}>
          {title}
        </button>
    </>
  );
};
export default MyButton;
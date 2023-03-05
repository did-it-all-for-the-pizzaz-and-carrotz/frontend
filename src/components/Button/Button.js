import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';
const MyButton = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
        </Space>
      </Space>
    </>
  );
};
export default MyButton;
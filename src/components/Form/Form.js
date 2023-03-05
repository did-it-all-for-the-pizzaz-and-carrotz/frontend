import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Switch } from 'antd';
import MyButton from 'components/Button/Button';
import { useState } from 'react';

const LoginForm = ({mode}) => {
  const [checked, setChecked] = useState(true);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  if (mode == "login") return (
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <h1>Logowanie</h1>
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Wprowadz adres Email',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Wprowadz adres Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Wprowdz haslo',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Wprowdz haslo"
      />
    </Form.Item>
    <Form.Item>
      <MyButton title="Zaloguj" type="big" />
    </Form.Item>
  </Form>
  )

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Rejestracja</h1>

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Wprowadz imię',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Podaj swoje imię" />
      </Form.Item>

      <Form.Item
        name="surname"
        rules={[
          {
            required: true,
            message: 'Wprowadz imię',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Podaj swoje nazwisko" />
      </Form.Item>

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Wprowadz adres Email',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Wprowadz adres Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Wprowdz haslo',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Wprowdz haslo"
        />
      </Form.Item>

      <Form.Item
        name="repeatPassword"
        rules={[
          {
            required: true,
            message: 'Powtórz hasło',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Powtórz haslo"
        />
      </Form.Item>

      <Form.Item>
        <MyButton title="Zaloguj" type="big" />
      </Form.Item>
      
      <Form.Item
      name="terms"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Zapoznałem się i akceptuje warunki regulaminu</Checkbox>
    </Form.Item>

    <Form.Item
      name="agreeData"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Wyrażam zgodę na przetwarzanie moich danych</Checkbox>
    </Form.Item>

    </Form>
  );
};
export default LoginForm;
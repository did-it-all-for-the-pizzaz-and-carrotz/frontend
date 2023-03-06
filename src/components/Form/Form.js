import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Switch } from 'antd';
import MyButton from 'components/Button/Button';
import { register, selectUser, signIn } from 'features/currentUser/currentUserSlice';
import { useAppNavigate } from 'hooks/useAppNavigate';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = ({ mode }) => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const {navigateDashboard} = useAppNavigate()

  useEffect(() => {
    console.log(user.status)
    if (user.status === "succeeded") {
      console.log(user.token)
      navigateDashboard();
    }

  },[user])

  const onLogin = (values) => {
    dispatch(signIn(values))
  };

  const onRegister = (values) => {
    if (values.password !== values.repeatPassword) {
      alert("Hasla nie sa takie same")
      return;
    }
    dispatch(register(values))
  };

  if (mode == "login") return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onLogin}
    >
      <h1>Logowanie</h1>
      <Form.Item
        name="login"
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
      onFinish={onRegister}
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
        name="login"
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
        rules={[
          {
            required: true,
            message: 'Musisz wyrazić zgodę',
          },
        ]}
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
        rules={[
          {
            required: true,
            message: 'Musisz wyrazić zgodę',
          },
        ]}
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
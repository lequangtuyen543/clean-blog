import { Button, Card, Checkbox, Form, Input, message } from 'antd';
import { checkExist, createCompany } from '../../../services/companyService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import generateToken from '../../../helpers/generateToken';
import './Register.scss';

export const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      values.token = generateToken();

      const checkExistEmail = await checkExist("email", values.email);
      const checkExistPhone = await checkExist("phone", values.phone);

      if (checkExistEmail.length > 0) {
        messageApi.error('Email already exists!');
        return;
      } else if (checkExistPhone.length > 0) {
        messageApi.error('Phone already exists!');
        return
      }

      const res = await createCompany(values);

      if (res) {
        messageApi.success('Create company successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        messageApi.error('Create company failed!');
      }
    } catch (error) {
      messageApi.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      {contextHolder}

      <div className='container'>
        <div className="bg-white py-12 sm:py-16">
          <Card title={<>
            <h2 className='text-2xl font-bold py-2'>Create an Account</h2>
            <p>Enter your personal details to create account</p>
          </>} style={{ maxWidth: 400, margin: "0 auto" }}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Your Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="User Name"
                name="userName"
                rules={[{ required: true, message: 'Please input user name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="terms"
                rules={[{ required: true, message: 'You must agree before submitting.' }]}
              >
                <Checkbox>
                  I agree and accept the <a href="#">terms and conditions</a>
                </Checkbox>
              </Form.Item>



              <Form.Item label={null}>
                <Button type="primary" htmlType="submit" loading={loading} className='btn-primary'>
                  Create Account
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>

    </>
  );
}
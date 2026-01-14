import { UserOutlined, BookOutlined, DashboardOutlined, WechatOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const SiderApp = () => {
  const items = [
    {
      key: 'dashboard',
      label: <Link to="/admin/dashboard">Dashboard</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 'info-user',
      label: <Link to="/admin/info-user">Info User</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 'manage-job',
      label: <Link to="/admin/manage-job">Manage Job</Link>,
      icon: <WechatOutlined />,
    },
    {
      key: 'manage-cv',
      label: <Link to="/admin/manage-cv">Manage CV</Link>,
      icon: <BookOutlined />,
    },
  ];

  return (
    <Menu
      // onClick={onClick}
      // style={{ width: 256 }}
      defaultSelectedKeys={['dashboard']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
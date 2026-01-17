import { UserOutlined, BookOutlined, DashboardOutlined, UsergroupAddOutlined } from '@ant-design/icons';
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
      key: 'user-info',
      label: <Link to="/admin/user-info">User Info</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 'user-list',
      label: <Link to="/admin/user-list">User List</Link>,
      icon: <UsergroupAddOutlined />,
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
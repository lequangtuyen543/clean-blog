import { useEffect, useState } from "react";
import { getListCV } from "../../../services/cvService";
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { DeleteCV } from "./DeleteCV";
import { JobName } from "./JobName";
import { getListPosts } from "../../../services/postsServices";
import { UpdateJob } from "./UpdateJob";

export const BlogList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await getListPosts();
    if (res) {
      setData(res.reverse());
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleReload = () => {
    fetchData();
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => {
        return record.status === "active" ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Read">
            <Link to={`/admin/read-cv/${record.id}`}>
              <Button icon={<EyeOutlined />} type="default" />
            </Link>
          </Tooltip>
          <UpdateJob record={record} onReload={handleReload} />
          <DeleteCV record={record} onReload={handleReload} />          
        </Space>
      ),
    },
  ];

  console.log(data);

  return (
    <>
      <h3>Blog List</h3>
      <Table columns={columns} dataSource={data} />
    </>
  );
}
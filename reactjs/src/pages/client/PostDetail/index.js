import { useEffect, useState } from 'react';
import { getDetailPost } from '../../../services/postsServices';
import './PostDetail.scss';
import { GoBack } from '../../../components/GoBack';
import { useParams } from 'react-router-dom';

export const PostDetail = () => {
  const [data, setData] = useState();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDetailPost(param.id);
      if (res) {
        setData(res);
      }
    };
    fetchData();
  }, []);

  console.log('data', data);

  return (
    <>
      <GoBack />
      {data && (
        <>
          <p style={{ whiteSpace: "pre-line" }}>
            {data.content}
          </p>
        </>
      )}
    </>
  );
};
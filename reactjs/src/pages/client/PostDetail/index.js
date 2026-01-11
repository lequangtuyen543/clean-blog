import { useEffect, useState } from 'react';
import { getDetailPost } from '../../../services/postsServices';
import './PostDetail.scss';
import { GoBack } from '../../../components/GoBack';
import { useParams } from 'react-router-dom';
import { HeroPost } from '../../../components/HeroPost';

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
      <HeroPost data={data} />

      <div className='container'>
        {data && (
          <>
            <div className="bg-white py-12 sm:py-16">
              <p style={{ whiteSpace: "pre-line" }}>
                {data.content}
              </p>
            </div>
          </>
        )}
        <GoBack />
      </div>
    </>
  );
};
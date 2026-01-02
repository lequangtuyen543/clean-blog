import { useEffect, useState } from 'react';
import { getListPosts } from '../../../services/postsServices';
import './Home.scss';

export const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getListPosts();
      if (res) {
        setData(res);
      }
    };
    fetchData();
  }, []);

  console.log('data', data);

  return (
    <>
      <div className="bg-white py-24 sm:py-32 post">
        {data && data.map((post) => (
          <>
            <article className="flex flex-col items-start justify-between border-b border-gray-200 blog-card">
              <div className="group relative grow post-preview">
                <a href="/">
                  <h2 className="post-title">
                    {post.title}
                  </h2>
                  <h3 className="post-subtitle">
                    {post.subtitle}
                  </h3>
                </a>
              </div>
              <div className="flex items-center gap-x-4 text-xs mb-5 post-meta">
                Posted by <a href="/">{post.createdBy}</a> on <span>
                  {post.createdAt}
                </span>
              </div>
            </article>
          </>
        ))}
        <div className="d-flex justify-content-end mt-4"><a className="btn btn-primary text-uppercase post-btn" href="/posts">Older Posts →</a></div>
      </div>
    </>
  );
};
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
      <div className="relative isolate px-6 pt-14 lg:px-8 hero">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 hero-content">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Clean Blog
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A Blog Theme by Start Bootstrap
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="bg-white py-12 sm:py-16 post">
          {data && data.map((post) => (
            <>
              <article className="flex flex-col items-start justify-between border-b border-gray-200 blog-card">
                <div className="group relative grow post-preview">
                  <a href={`/post/${post.id}`}>
                    <h2 className="post-title">
                      {post.title}
                    </h2>
                    <h3 className="post-subtitle">
                      {post.subtitle}
                    </h3>
                  </a>
                </div>
                <div className="flex items-center gap-x-4 text-xs mb-5 post-meta">
                  Posted by <a href="/">{post.createdBy}</a> on {post.createdAt}
                </div>
              </article>
            </>
          ))}
          <div className="d-flex justify-content-end mt-4"><a className="btn btn-primary text-uppercase btn-primary" href="/posts">Older Posts →</a></div>
        </div>
      </div>
    </>
  );
};
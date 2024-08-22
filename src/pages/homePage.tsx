import CustomToast from '@/components/common/CustomToast';
import { usePostsStore } from '@/store';
import { useEffect } from 'react';

export const HomePage = () => {
  const loading = usePostsStore((state) => state.loading);
  const error = usePostsStore((state) => state.error);
  const posts = usePostsStore((state) => state.posts);
  const getPosts = usePostsStore((state) => state.getPosts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return (
      <p>
        <strong>Loading...</strong>
      </p>
    );
  }

  return (
    <section className='min-h-screen'>
      <CustomToast
        data={posts}
        error={error}
        msgSuccess='Posts fetched successfully'
        msgError='Error while fetching posts'
      />
      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        posts?.length > 0 && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <div>
                  <h4>Title: </h4>
                  <p>{post.title}</p>
                </div>
                <div>
                  <h4>Body: </h4>
                  <p>{post.body}</p>
                </div>
              </li>
            ))}
          </ul>
        )
      )}
      <h1>Home</h1>
    </section>
  );
};

export default HomePage;

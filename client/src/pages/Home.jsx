import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Homecard from "../components/Homecard";

export default function Home() {
  const { postSlug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null); // Default to an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch both the post and recent posts in parallel
        const [postRes, recentPostsRes] = await Promise.all([
          fetch(`/api/post/getall?limit=1&order=desc`),
          fetch("/api/post/getall?limit=6"),
        ]);

        const postData = await postRes.json();
        const recentPostsData = await recentPostsRes.json();

        if (!postRes.ok || !recentPostsRes.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        setPost(postData.posts[0]);
        setRecentPosts(recentPostsData.posts);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [postSlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <>
       {post && (
        <Link to={`/post/${post.slug}`}>
          <div className="flex justify-center pt-10 px-4">
            <div className="relative max-w-3xl w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
              <img
                  src={`${post.image}?f_auto&q_auto`}
                  alt="Featured"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                  loading="lazy"
                  srcSet={`${post.image}?w=320&f_auto&q_auto 320w, ${post.image}?w=640&f_auto&q_auto 640w, ${post.image}?w=1280&f_auto&q_auto 1280w`}
                  
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-200 mt-2">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-4">
                  <img
                    src={post.author?.profilePicture}
                    alt={post.slug}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
                  />
                  <span className="text-sm md:text-base font-medium">
                    {post.author?.username}{" "}
                    <span className="text-gray-300">- Author</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )} 

      <h3 className="text-2xl font-bold mt-12 text-center text-gray-900 dark:text-white">
        Popular Posts
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-center">
        Ideas, trends, and inspiration for a brighter future
      </p>

      <div className="flex justify-center mb-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts &&
            recentPosts.map((post) => <Homecard key={post._id} post={post} />)}
        </div>
      </div>
    </>
  );
}








// import { Spinner } from "flowbite-react";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// import Homecard from "../components/Homecard";

// export default function Home() {
//   const { postSlug } = useParams();
//   const [post, setPost] = useState(null);
//   const [recentPosts, setRecentPosts] = useState(null); // Default to an empty array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   // Fetch the selected blog post
//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const res = await fetch(`/api/post/getposts?limit=1&order=desc`);
//         const data = await res.json();

//         if (!res.ok) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         if (res.ok) {
//           setPost(data.posts[0]);

//           setLoading(false);
//           setError(false);
//         }
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [postSlug]);

//   // Fetch recent posts
//   useEffect(() => {
//     try {
//       const fetchRecentPosts = async () => {
//         const res = await fetch("/api/post/getposts?limit=6");
//         const data = await res.json();
//         if (res.ok) {
//           setRecentPosts(data.posts);
//         }
//       };
//       fetchRecentPosts();
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, []);

//   if (loading)
//     return (
//       <div className="flex  justify-center items-center min-h-screen">
//         <Spinner size="xl" />
//       </div>
//     );

//   return (

//     <>
//     <Link to={`/post/${post.slug}`}>
//       <div className="flex justify-center pt-10 px-4">
//   <div className="relative max-w-3xl w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//     {/* Background Image with Overlay */}
//     <div className="relative">
//       <img
//         src={post.image}
//         alt="Featured"
//         className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//     </div>

//     {/* Post Details */}
//     <div className="absolute inset-0 flex flex-col justify-between p-6">
//       <div>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
//           {post.title}
//         </h2>
//         <p className="text-sm text-gray-200 mt-2">
//           {new Date(post.createdAt).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//             year: "numeric",
//           })}
//         </p>
//       </div>

//       {/* Author Section */}
//       <div className="flex items-center space-x-3 mt-4">
//         <img
//           src={post.author?.profilePicture}
//           alt={post.slug}
//           className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
//         />
//         <span className="text-sm md:text-base font-medium">
//           {post.author?.username}{" "}
//           <span className="text-gray-300">- Author</span>
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
// </Link>


//       <h3 className="text-2xl font-bold mt-12 text-center text-gray-900 dark:text-white">
//         Popular Posts
//       </h3>
//       <p className="text-gray-500 dark:text-gray-400 text-center">
//         Ideas, trends, and inspiration for a brighter future
//       </p>

//       <div className="flex justify-center mb-6 mt-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recentPosts &&
//             recentPosts.map((post) => <Homecard key={post._id} post={post} />)}
//         </div>
//       </div>
//     </>
//   );
// }

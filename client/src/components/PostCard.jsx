import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full sm:w-[430px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* Blog Cover Image */}
      <Link to={`/post/${post.slug}`} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[250px] object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Blog Content */}
      <div className="p-5">
        <span className="text-sm font-medium text-teal-600 uppercase">
          {post.category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-teal-600 line-clamp-2">
          {post.title}
        </h3>
      </div>

      {/* Read More Button */}
      <div className="p-5 pt-0">
        <Link
          to={`/post/${post.slug}`}
          className="inline-block text-teal-600 font-medium hover:text-teal-700 transition-all duration-300"
        >
          Read Article →
        </Link>
      </div>
    </div>
  );
}

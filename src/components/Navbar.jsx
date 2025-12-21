import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Pullside Music</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/new-releases" className="hover:text-gray-300">New Releases</Link></li>
          <li><Link to="/trending" className="hover:text-gray-300">Trending</Link></li>
          <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
const Footer = () => {
  return (
    <footer className="bg-[#3C1B3B] text-white py-12 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-400">
              <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z" />
            </svg>
            <span className="font-bold text-2xl">Bolaka Restaurant</span>
          </div>
          <p className="text-sm text-gray-300">
            Providing delicious meals since 1992. Your taste, our passion.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bolaka Restaurant. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="/about" className="hover:text-yellow-400 transition">About Us</a>
          <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
         <div className="flex gap-4">
  {/* Twitter */}
  <a href="#" className="hover:text-blue-500 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.938 13.938 0 011.671 3.149 4.916 4.916 0 003.195 9.723a4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.17-.069a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
    </svg>
  </a>

  {/* YouTube */}
  <a href="#" className="hover:text-red-600 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  </a>

  {/* Facebook */}
  <a href="#" className="hover:text-blue-700 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" className="hover:text-pink-500 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.774.127 4.6.384 3.635 1.35 2.671 2.315 2.414 3.49 2.357 4.768 2.299 6.048 2.287 6.457 2.287 12s.012 5.952.07 7.232c.057 1.278.314 2.453 1.278 3.418.965.965 2.14 1.221 3.418 1.278 1.28.058 1.689.07 7.232.07s5.952-.012 7.232-.07c1.278-.057 2.453-.314 3.418-1.278.965-.965 1.221-2.14 1.278-3.418.058-1.28.07-1.689.07-7.232s-.012-5.952-.07-7.232c-.057-1.278-.314-2.453-1.278-3.418-.965-.965-2.14-1.221-3.418-1.278C17.952.012 17.543 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
    </svg>
  </a>
</div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-xs">
        Made with ❤️ by Md: Shoriful Islam
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

export default function NavBar() {
  return (
      
    <div className="w-full grid grid-cols-2 p-3">
      <div className=" group  cursor-pointer font-light hover:text-red-600 ">
          
        <div className="text-sky-300 text-4xl font-light text-center group-hover:text-red-500 ">
          B<a className="font-sans text-stone-50 text-2xl group-hover:text-green-500 ">log</a>K
          <a className="font-sans text-stone-50 text-2xl group-hover:text-blue-500 ">ro </a>
        </div>

      </div>

      <div className="m-auto">
        <ul className="grid grid-cols-3 text-center">
          <li>
            <Link href="/">
              <a className=" hover-underline-animation p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 hover:text-sky-500">
                Home
              </a>

            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 hover:text-sky-500 ">
              
                Blog
              </a>
            </Link>
          </li>
          <li>
            
            <Link href="/about">
              <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 hover:text-sky-500">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}






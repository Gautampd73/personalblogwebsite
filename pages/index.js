import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl2d0sue34old01yw898aggxm/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
    }
    
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts, projects }) {
  return (
    <div className="w-full h-full text-white">
      <div className="top-0 sticky bg-slate-800 text-white py-2">
        <h1 className="uppercase font-black text-center text-1xl tracking-wider ">
          {" "}
          <NavBar />
        </h1>
      </div>
      <hr className="w-full border-t border-gray-300 invisible "></hr>

      <section className="py-2 bg-white">
        <section className="px-2 py-32 bg-black-50 md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:  -5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Best Place to</span>
                    <span className="block text-indigo-600 xl:inline">
                      Tell Your Story!
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    It's never been easier to build beautiful websites that
                    convey your message and tell your story.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                  <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md text-sky-500">
                <h2 className="mb-4 text-4xl font-mono leading-tight tracking-tight sm:text-3xl font-heading ">
                  kindness is a language that the deaf can hear and the blind
                  can see.... 
                </h2>
                {/* <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  It's never been easier to build a business of your own. Our
                  tools will help you with the following:
                </p> */}
                <ul>
                  {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      Faster Processing and Delivery
                    </span>
                  </li> */}
                 
                  {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="font-medium text-gray-500">
                      100% Protection and Security for Your App
                    </span>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 h-full bg-white">
        <div>
          <div>
            <h2 className="text-black text-center bg-tale-600 text-2xl p-1 mb-2 font-extrabold">
              {" "}
              Latest articles <br></br>
              <br></br>
              <div className="max-w-md mx-auto bg-amber-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex md:flex-wrap ">
                  <div className="md:shrink-0 position-relative scroll-smooth  "></div>
                  <div className="p-8">
                    {/* <a
                      href="#"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      Finding customers for your new business
                    </a> */}

                    <div className="grid grid-cols-2">
                      {posts
                        .slice(0, 4)
                        .map(({ id, title, slug, coverPhoto }) => (
                          <div key={id}>
                            <h2 className="hover:text-pink-600 text-2xl text-red-500">
                              <Link href={`/post/${slug}`}>
                                <a> {title} </a>
                              </Link>
                            </h2>
                            
                            <Image
                              src={coverPhoto.url}
                              width={150}
                              height={150}
                            />
                          </div>
                        ))}
                    </div>

                    <p className="mt-2 text-slate-500">
                      Getting a new business off the ground is a lot of hard
                      work. Start Today with us
                    </p>
                  </div>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
      <section>
        
      </section>
      <Footer />
    </div>
  );
}

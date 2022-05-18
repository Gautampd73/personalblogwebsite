import NavBar from "../components/NavBar";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/container";
import Footer from "../components/Footer";
//  this is blog_demo

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl2d0sue34old01yw898aggxm/master"
);

const QUERY = gql`
  {
    posts {
      id
      slug
      title
      excerpt
      date

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

export default function Blog({ posts }) {
  return (
    <div className="w-full h-full text-white bg-cyan-100 ">
      <div className="top-0  bg-slate-800 text-white py-2">
        <h1 className="uppercase font-black text-center text-1xl tracking-wider ">
          <NavBar />
        </h1>
      </div>

      <hr className="w-full border-t border-gray-300"></hr>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm transform  hover transition duration-500 hover:scale-125">
            <img
              src="https://drifterplanet.com/wp-content/uploads/2020/01/Northern-Italy-by-Train-Itinerary.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-2 text-gray-700 text-lg leading-relaxed ">
                An epic Northern Italy Itinerary that has everything – lakes,
                mountains, historical towns, Italy has always been the centre of
                attention because of its because of its beauty and culture.
              </p>

              <a
                href=" https://drifterplanet.com/northern-italy-by-train/    "
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-right mr-2 mb-2"
                >
                  {" "}
                  Learn more{" "}
                </button>
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm transform  hover transition duration-500 hover:scale-125">
            <img
              src="https://drifterplanet.com/wp-content/uploads/2020/01/Lake-Bohinj-Slovenia.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-2 text-gray-700 text-lg leading-relaxed ">
                Imagine a lake with clear blue-green water that’s surrounded by
                mountains. To make things even better, there are multiple
                beaches where one can chill and enjoy the magic of Mother
                Nature.
              </p>
              <a
                href=" https://drifterplanet.com/northern-italy-by-train/    "
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-right mr-2 mb-2"
                >
                  {" "}
                  Learn more{" "}
                </button>
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm transform  hover transition duration-500 hover:scale-125">
            <img
              src="https://drifterplanet.com/wp-content/uploads/2019/08/Turkey-itinerary-10-days-Drifter-Planet.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-2 text-gray-700 text-lg leading-relaxed ">
                Is it Asia or Europe? Turkey is both – the best of two
                continents in just one country. At first it may appear that
                Turkey mostly suits cultural travelers. After all, it sits on
                the cusp of both Europe and Asia.
              </p>
              <a
                href=" https://drifterplanet.com/northern-italy-by-train/    "
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-red-500text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-600 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-right mr-2 mb-2"
                >
                  {" "}
                  Learn more{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-400">
                Technologies
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-sky-50 p-6 rounded-lg">
                <a href="https://code.visualstudio.com/">
                  <img
                    href="https://code.visualstudio.com"
                    className="h-40 rounded w-full object-fit object-center mb-6   transform  hover transition duration-500 hover:scale-125"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/visual-studio-code.svg"
                    alt="content"
                  />{" "}
                </a>

                <h2 className="text-lg text-indigo-500 font-medium title-font mb-4">
                  Visual Studio Code
                </h2>
                <p className="leading-relaxed text-base">
                  Visual Studio Code, also commonly referred to as VS Code, is a
                  source-code editor made by Microsoft for Windows, Linux and
                  macOS
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-sky-50 p-6 rounded-lg">
                <a href="https://tailwindcss.com/">
                  <img
                    className="h-40 rounded w-full object-fit object-center mb-6 transform  hover transition duration-500 hover:scale-125"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tailwind-css.svg"
                    alt="content"
                  />{" "}
                </a>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Tailwind CSS
                </h2>
                <p className="leading-relaxed text-base">
                  Tailwind CSS is basically a utility-first CSS framework for
                  rapidly building custom user interfaces. It is a highly
                  customizable, low-level CSS framework
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-sky-50 p-6 rounded-lg">
                <a href="https://nextjs.org/">
                  <img
                    className="h-40 rounded w-full object-fit object-center mb-6 transform  hover transition duration-500 hover:scale-125"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/nextjs.svg"
                    alt="content"
                  />{" "}
                </a>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Next.js
                </h2>
                <p className="leading-relaxed text-base">
                  Next.js is an open-source web development framework built on
                  top of Node.js enabling React based web applications.
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4 ">
              <div className="bg-sky-50 p-6 rounded-lg">
                <a href="https://graphcms.com/">
                  <img
                    className="h-40 rounded w-full object-fit object-center mb-6 transform  hover transition duration-500 hover:scale-125"
                    src="https://cdn.worldvectorlogo.com/logos/graphcms-1.svg"
                    alt="content"
                  />{" "}
                </a>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  GraphCMS
                </h2>
                <p className="leading-relaxed text-base">
                  GraphCMS is the Headless CMS allowing you to build digital
                  experiences the way you envisioned them - with all your
                  backends, frontends, and services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:w-1/2 w-full mb-6 lg:mb-0 mt-8">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-sky-400   px-5 py-2 mx-auto ">
          Featured Posts
        </h1>
      </div>

      <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-8 bg-white ">
        <div className="flex-1  p-2">
          {posts.map(
            ({
              id,
              slug,
              title,
              excerpt,
              date,
              author,
              details,
              coverPhoto,
            }) => (
              <div key={{ id }}>
                {/* <section className=" overflow-hidden"> */}

                <div className="container px-5 py-12 mx-auto bg-sky-50">
                  <div className="-my-8 divide-y divide-gray-200 dark:divide-gray-700">
                    <div className=" flex flex-wrap md:flex-nowrap ">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-green-700"></span>
                        <span className="text-sm text-pink-500 cursor-pointer ">
                          <Link href={`/post/${slug}`}>
                            <Image
                              className=""
                              src={coverPhoto.url}
                              alt="blog post cover image"
                              width={100}
                              height={100}
                            />
                          </Link>
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                          <Link href={`/post/${slug}`}>
                            <a>{title} </a>
                          </Link>
                        </h2>
                        <p className="leading-relaxed text-gray-500">
                          {excerpt}
                        </p>

                        <p className="text-indigo-500 inline-flex items-center mt-4 ">
                          <Link href={`/post/${slug}`}>
                            <a> Read</a>
                          </Link>
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>

                        <hr className="w-full border-t border-gray-900"></hr>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <br></br>

      <Footer />
    </div>
  );
}




// <div class="md:flex">
//   <div class="md:flex-shrink-0">
//     <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"/>
//   </div>
//   <div class="mt-4 md:mt-0 md:ml-6">
//     <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
//     <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
//     <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
//   </div>
// </div>
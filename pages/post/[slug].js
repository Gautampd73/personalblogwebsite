import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/Link"
import { RichText } from "@graphcms/rich-text-react-renderer";

import { GraphQLClient, gql } from "graphql-request";
import style from "../../components/Post.module.css";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl2d0sue34old01yw898aggxm/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      date
      author {
        name
      }
      details
      coverPhoto {
        url
      }
      content {
        html
      }
    }
  }
`;

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  return (
    <div className="w-full h-full text-white bg-sky-100">
      <div className="top-0 sticky bg-slate-800 text-white py-2">
        <h1 className="uppercase font-black text-center text-1xl tracking-wider ">
          {" "}
          <NavBar />
        </h1>
      </div>
      <hr className="w-full border-t border-gray-300 invisible "></hr>
      {/* <div>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-cyan-500 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">We start, welcome to Blogkro</h1>
      </div> */}

      <section>
        <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="w-full md:w-2/3 flex flex-col mb-2 items-center text-center">
          <h1 className="mb-2 text-3xl font-bold text-black md:text-5xl">{post.title}</h1>



            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-500">
              <div className="realative overflow-hidden shadow-md">
                <img
                  className=""
                  alt="hero"
                  src={post.coverPhoto.url}
                />
              </div>

              <br></br>
            </h1>

            <div className="text-black">
              {" "}
              {post.author.name}, {post.date}{" "} 
            </div>

            <div className="mb-2 leading-relaxed">
            <div className="text-black text-justify subpixel-antialiased " 
            dangerouslySetInnerHTML={{ __html: post.content.html }}

            />

            </div>

            {/* view on github  */}
            {/* <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
               
                <Link href={post.title}>{'View on GitHub'}</Link>
              </div> */}
          </div>
        </div>
      </section>

      


      <Footer />
    </div>
  );
}
















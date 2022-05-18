import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl2d0sue34old01yw898aggxm/master"
);

const QUERY = gql`
  {
    projects {
      id
      slug
      title
      projectImage {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { projects } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div className="w-full h-full text-white">
      <div className="top-0 sticky bg-slate-800 text-white py-2">
        <h1 className="uppercase font-black text-center text-1xl tracking-wider ">
          {" "}
          <NavBar />
        </h1>
      </div>
      <hr className="w-full border-t border-gray-300 invisible "></hr>


      
<section className="relative py-20 overflow-hidden bg-white">
    <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
    </span>

    <span className="absolute bottom-0 left-0"> </span>

    <div className="relative px-16 mx-auto max-w-7xl">
        <p className="font-medium tracking-wide text-blue-500 uppercase">OUR TEAM</p>
        <h2 className="relative max-w-lg mt-5 mb-10 text-4xl text-black font-semibold leading-tight lg:text-5xl">An incredible team of
         amazing individuals</h2>
        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
                    <img className="relative z-20 w-full rounded-full" src="https://cdn.devdojo.com/images/june2021/avt-20.jpg"/>
                    {/* https://cdn.devdojo.com/images/june2021/avt-20.jpg */}
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-black">Gagan Sharma</h3>

                        <p className="text-blue-600"> Co-Supervisor </p>
                    </div>
                    <div className="relative flex items-center justify-center space-x-3">
                        <a href="https://twitter.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img className="relative z-20 w-full rounded-full" src="./gautam2.png"/>
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-black"> Gautam Prasad </h3>

                        <p className="text-blue-600">Student</p>
                    </div>
                    <div className="relative flex items-center justify-center space-x-3">
                        <a href="https://twitter.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="https://github.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50"></div>
                    <img className="relative z-20 w-full rounded-full" src="./govind.jpg"/>
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-black">Govind  Raj </h3>

                        <p className="text-blue-600">Student </p>
                    </div>
                    <div className="relative flex items-center justify-center space-x-3">
                        <a href="https://twitter.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="https://github.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-green-50"></div>
                    <img className="relative z-20 w-full rounded-full" src="./ankit.jpg"/>
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-black"> Ankit Jha </h3>
                        <p className="text-blue-600">Student</p>
                    </div>
                    <div className="relative flex items-center justify-center space-x-3">
                        <a href="https://twitter.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="https://github.com/" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>



        
        </div>
    </div>
    


      <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"> Project Files</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">This project contains 4 Phase and Log Reports, 1 Research Paper, 1 Presentation and Source code .</p>
      <p className="text-center"> Click to Download </p>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-sky-50 rounded flex p-4 h-full items-center cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="https://www.dropbox.com/s/8xhz1euau81pbor/researchpaper.pdf?dl=0" className="text-red-500 hover:text-sky-400">

          <span class="title-font font-medium"> Research Paper</span>
          </a>
        </div>
      </div>
     
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-sky-50 rounded flex p-4 h-full items-center cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="https://www.dropbox.com/s/x7lhj42y08qbjsd/Final%20Project%20Report%20Format.pdf?dl=0" className="text-red-500 hover:text-sky-400">

          <span class="title-font font-medium"> Final Project Report </span>
          </a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-sky-50 rounded flex p-4 h-full items-center cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="https://www.dropbox.com/scl/fi/w8hkqpxhkw6ia3mn2abre/project_ppt.pptx?dl=0&rlkey=s2ez2w6rzpxzjcr9rpkks39ro" className="text-red-500 hover:text-sky-400">

          <span class="title-font font-medium"> Presentation </span>
          </a>
        </div>
      </div>


      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-sky-50 rounded flex p-4 h-full items-center cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="https://twitter.com/" className="text-red-500 hover:text-sky-400">

          <span class="title-font font-medium"> Source Code</span>
          </a>
        </div>
      </div>


      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-sky-50 rounded flex p-4 h-full items-center cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="https://www.dropbox.com/sh/hcp096k05wfzpnv/AAAb7Ms0haSz6rm1H5gHpwQFa?dl=0" className="text-red-500 hover:text-sky-400">

          <span class="title-font font-medium"> Phase Reports </span>
          </a>
        </div>
      </div>


      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-sky-50 rounded flex p-4 h-full items-center cursor-pointer">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="https://www.dropbox.com/sh/eglpis614hiyylt/AAC9jPdUvSUa15XKjZigdArma?dl=0" className="text-red-500 hover:text-sky-400">

          <span class="title-font font-medium"> Log Reports </span>
          </a>
        </div>
      </div>
    

    </div>
  </div>
</section>


<div className="px-8 py-2">
        <div className="grid gap-8 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600 -rotate-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="pr-6 text-sky-400 group-hover:text-indigo-100 transition duration-200">Have a Good Day</span>
              </span>
              <span className="pl-6 text-pink-400 group-hover:text-indigo-100 transition duration-200">
                See you Soon 
              </span>
            </button>
          </div>
        </div>
      </div>















      
</section>





 
      <Footer/>
    </div>
  );
}

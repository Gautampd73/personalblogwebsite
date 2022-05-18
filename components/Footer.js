import { Container } from "postcss";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
    
      <hr className="w-full border-t border-gray-300 invisible "></hr>

      <div className="flex gap-6  bg-slate-800 justify-center  pt-2">
        {/* <Link href="www.instagram.com">
          <a>
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
          </a>
        </Link> */}
        <a href="https://www.facebook.com" target={"_blank"} rel={"noreferrer"}>
          <Image
            className="gb"
            src="/fb.png"
            alt="facebook"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.github.com" target={"_blank"} rel={"noreferrer"}>
          <Image
            className="text-2xl cursor-pointer hover:text-pink-600"
            src="/github.png"
            alt="facebook"
            width={25}
            height={25}
          />
        </a>
        <a href="https://instagram.com/" >
        <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" /> 

                        </a>
        


                        <a href="https://twitter.com/" >
        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" /> 

                        </a>


                        <a href="https://linkedin.com/" >
        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" /> 

                        </a>



        <br></br>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-2 bg-slate-800 text-red">
        {/* <p className="text-sky-400/100">The quick brown fox...</p> */}
        <h1 className=" text-white-800 font-semibold">
          <a className="">
            {" "}
            2022-2023   ©   | Build with ❤ by
          </a>{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            gtm{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;



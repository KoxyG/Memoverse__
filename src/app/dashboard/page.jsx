
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Image from "next/image"
import Profile from "../../../public/profile.jpeg"
import Placeholder from "../../../public/Signin-Icon.png"
import Link from "next/link"
import Button from '../Component/Button'
import BlogDummy from '@/Utils/dummyData'
import BlogPost from '../Component/BlogPost'

const page = () => {
  return (
    <section className="text-white">
      {/* THIS SECTION IS FOR THE TOP MOST LAYER OF THE MAIN BODY OF THE DASHBOARD */}
      <div className="grid sm:flex justify-between">
        <div className="sm:w-2/5 w-full grid gap-2">
          <h2>Welcome to Memoverse.</h2>
          <p className="text-sm font-thin">Hello Primrose, welcome back!</p>
        </div>

        <div className="sm:w-3/5 w-full grid gap-2">
          <div className="sm:flex grid justify-evenly items-center">
            <div className="flex items-center gap-3">
              <Image
                src={Profile}
                alt="logged in user's profile picture"
                objectFit="cover"
                objectPosition="center"
                className="rounded-full w-8 h-8"
              />
              <p>Primrose Roberts</p>
            </div>
            <div className="font-bold text-gold flex justify-between mt-3 sm:mt-0 gap-5">
              <p>
                900 <span className="font-normal text-white">Following</span>
              </p>
              <p>
                120 <span className="font-normal text-white ">Blog Posts</span>
              </p>
              <p>
                12k <span className="font-normal text-white">Followers</span>
              </p>
            </div>
          </div>
          <p className="text-sm font-thin">Follow my journey explorers</p>
        </div>
      </div>

      {/* THIS SECTION IS FOR THE POST A BLOG AND HOW TO POST A BLOG INSTRUCTION BANNER */}
      <div className="sm:flex sm:gap-7 grid gap-3 justify-between mt-6">
        {/* FOR THE POST A BLOG POST BANNER */}
        <div className="bg-lightGold sm:flex grid justify-between gap-2 sm:gap-5 w-full sm:w-3/5 rounded-2xl p-3">
          <Image
            src={Placeholder}
            alt="Digital creative illustration"
            objectFit="cover"
            objectPosition="center"
            height="auto"
            priority
            className="block w-[60%] m-auto sm:w-1/2 h-auto"
          />
          <div className="grid justify-between place-items-center">
            <h2 className="text-gold font-bold sm:text-2xl text-lg">
              Memoverse - empower your Your Memories and Stories
            </h2>
            <p className="text-black text-xs font-semibold my-1">
              A Decentralized Application for Creative Expression and Eternal
              Photo Albums
            </p>
            <Link href="/post-blog" className='w-full'>

            <Button title="Post a blog" classname="w-full rounded-md py-1 px-2 text-sm" />
            </Link>
          </div>
        </div>

        {/* FOR THE HOW TO POST A BLOG POST INSTRUCTION */}
        <div className="w-full sm:w-2/5 bg-lightGold grid gap-3 rounded-2xl p-6">
          <h2 className="font-bold text-gold tracking-wider">
            How to create new blog post or photo ablum{" "}
          </h2>
          <ul className="text-black text-sm  grid gap-1 sm:text-base list-disc sm:pt-2 pt-1">
            <li>Create New Blog Post</li>
            <li>Fill out the form and input all the necessary details </li>
            <li>Compose Your Masterpiece</li>
            <li>
              {" "}
              Viola! 🎉 Let Memoverse create the magic as you hit the "Publish"
              button
            </li>
          </ul>
        </div>
      </div>

      {/* THIS SECTION IS FOR THE FEATURED BLOG POSTS */}
      <div className='sm:w-3/5 w-full pt-5'>
        <p className='flex items-center gap-4 font-bold'>
          Top Match Blog For You <IoIosArrowDown />
        </p>
        <div>
          <div className="sm:grid ">
            {BlogDummy.map((Blog) => (
              <BlogPost
                key={Blog.id} // Add the 'key' prop with a unique identifier
                imgSrc={Blog.imgSrc}
                title={Blog.title}
                content={Blog.content}
                more={Blog.more}
                classname="-px-6"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default page
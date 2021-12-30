import Link from "next/link"
import Image from "next/image"

import { AiOutlineClockCircle } from 'react-icons/ai'

export default function Post({ post }) {
  return <div className="shadow-gray-300 shadow-lg transition-shadow hover:shadow-2xl group my-5">
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Image width={350} height={350} className="rounded-t-md group-hover:contrast-150" src={post.frontmatter.cover_image} alt="Post" />
        <div className="p-4" >
          <div className="flex justify-between">
          <span className="text-xs uppercase text-gray-600">{post.frontmatter.date}</span>
          <span className="flex items-center text-xs uppercase text-gray-400"><AiOutlineClockCircle className="inline-block text-gray-400 mr-1" />{post.frontmatter.minutes}</span>
          </div>
          <h2 className="font-bold text-lg mt-6 text-gray-800">{post.frontmatter.title}</h2>
        </div>
      </a>
    </Link>
  </div>
}
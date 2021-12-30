import Link from "next/link";
import Image from "next/image";
import Hamburguer from "./hamburguer";
import { useState } from "react"
import useWindowSize from '../../../hooks/useWindowSize'

export default function Header() {
  const [ toggle, setToggle ] = useState(false)
  const size = useWindowSize()
  return <header className="relative bg-gray-50 p-3 md:p-6 flex justify-between">
  <Link href="/" passHref className="cursor-pointer"><a><Image width={150} height={50} alt="w3mind logo" src="/logo.png" className="hover:opacity-80 transition-opacity" /></a></Link>
  <Hamburguer toggle={toggle} setToggle={setToggle} />
  <div className={`${toggle ? `opacity-100` : `opacity-0 md:opacity-100`} transition-opacity flex absolute md:static top-20 md:top-0 z-50 md:z-0 bg-gray-100 md:bg-transparent w-screen md:w-auto left-0 flex-col md:flex-row items-center`}>
    {(size.width > 766 || toggle )&& <><span className="block hover:text-gray-700 transition-colors w-full md:inline-block m-3 pl-2 md:pl-0 cursor-pointer">Cursos</span>
    <span className="block hover:text-gray-700 transition-colors w-full md:inline-block m-3 pl-2 md:pl-0 cursor-pointer">Contato</span>
    </>}
  </div>
</header>
}
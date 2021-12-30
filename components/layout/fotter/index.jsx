import { BsSuitHeartFill } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai'

export default function Footer() {
  const year = new Date().getFullYear()
  return <footer>
    <section className="bg-gray-800 text-white w-full p-5">
      <div className=" inline-block md:text-center md:grid md:grid-cols-4">
        <div className='group'>
          <a href="https://www.linkedin.com/in/lucassalmeida/" >
            <AiOutlineLinkedin className='inline-block text-2xl md:text-2xl mx-3 text-gray-200' /><span className='align-middle md:inline-block group-hover:text-white transition-colors'>me adicione no Linkedin</span>
          </a>
        </div>
        <div className='group'>
          <a href="https://www.instagram.com/lucasalmeida.j/" >
            <AiOutlineInstagram className='inline-block text-2xl md:text-2xl mx-3 text-gray-200' /><span className='align-middle md:inline-block group-hover:text-white transition-colors'>junte-se a nós no Instagram</span>
          </a>
        </div>
        <div className='group'>
          <a href="https://www.youtube.com/c/lucasnopc/" >
            <AiOutlineYoutube className='inline-block text-2xl md:text-2xl mx-3 text-gray-200' /><span className='align-middle md:inline-block group-hover:text-white transition-colors'>Assista-nos no Youtube</span>
          </a>
        </div>
        <div className='group'>
          <a href="https://www.facebook.com/almeidanopc" >
            <AiOutlineFacebook className='inline-block text-2xl md:text-2xl mx-3 text-gray-200' /><span className='align-middle md:inline-block group-hover:text-white transition-colors'>Siga-nos no facebook</span>
          </a>
        </div>
      </div>
    </section>
    <section className='bg-gray-900 text-white w-full p-5'>
      <span className='text-right block w-full'>Feito com <BsSuitHeartFill className='inline-block text-red-500' /> por <i className='hover:text-white transition-colors'><a href="https://www.linkedin.com/in/lucassalmeida/" >Lucas Almeida</a></i> <span>©{year}</span></span>
    </section>
  </footer>
}
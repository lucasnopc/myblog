export default function Hamburguer({ toggle, setToggle }) {

  return <div className="md:hidden flex items-center" onClick={() => setToggle(!toggle)}>
    <span className="px-3">Menu</span>
    <div className="inline-block w-10 h-7">
      <span className={`${toggle ? 'rotate-45 translate-y-3' : ''} block w-full mb-2 h-1 bg-gray-900 transition-transform`}></span>
      <span className={`${toggle ? 'rotate-45':''} block w-full my-2 h-1 bg-gray-900 transition-transform`}></span>
      <span className={`${toggle ? '-rotate-45 -translate-y-3':''} block w-full mt-2 h-1 bg-gray-900 transition-transform`}></span>
    </div>
</div>
}
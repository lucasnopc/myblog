import Footer from "./fotter";
import Header from "./header";

export default function Layout({children}) {
  return <div>
    <Header />
    <main className="w-3/5 mx-auto mt-3 mb-8">
    {children}
    </main>
    <Footer />
  </div>
}
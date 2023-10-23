import Header from "@/components/header";
import Footer from "@/components/footer";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Page({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <div className="page">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

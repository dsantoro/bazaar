import Header from "./components/Header";
import Card from "./components/Card";

const products = [
  {
    id: 1,
    title: "Headset Beats EP com fio",
    image: require("./assets/headset.jpeg"),
    description:
      "Com algumas marcas de uso mas super bem cuidado. Tem o fio roído mas funciona legal. / With some marks of use but super well taken care of. Has the thread chewed but works fine.",
    slug: "Headset Beats EP",
    price: "40 euros",
    originalLink:
      "https://www.worten.pt/tv-video-e-som/som-portatil/auscultadores-e-auriculares/auscultadores/auscultadores-com-fio-beats-ep-on-ear-microfone-preto-5951411",
  },
  {
    id: 2,
    title: "Teclado Mecânico TKL Kernel",
    image: require("./assets/keyboard.jpeg"),
    description:
      "Teclado mecânico de alta qualidade. Com apoio em alumínio, luzes configuráveis e bem pouco uso. / High quality mechanical keyboard. With aluminum backing, configurable lights and very little use.",
    slug: "Teclado Mecânico TKL Kernel",
    price: "30 euros",
    originalLink:
      "https://www.worten.pt/gaming/acessorios-gaming-pc/teclados-gaming/teclado-gaming-krom-kernel-tkl-mecanico-layout-portugues-switch-red-outemu-iluminado-6882499",
  },
  {
    id: 4,
    title: "Suporte de Monitor",
    image: require("./assets/support.jpeg"),
    description:
      "Produto novo, nunca usado. Super robusto e flexível. / New product, never used. Super robust and flexible.",
    slug: "Suporte de Monitor",
    price: "30 euros",
    originalLink:
      "https://www.pccomponentes.pt/equip-soporte-de-mesa-inclinable-para-monitor-13-27-vesa-100x100-max-65kg",
  },
  {
    id: 5,
    title: "Microfone Trust GXT 232 Mantis Streaming",
    image: require("./assets/microfone.jpeg"),
    description: "Pouco uso e muito boa qualidade.",
    slug: "Microfone Trust GXT 232 Mantis Streaming",
    price: "15 euros",
    originalLink:
      "https://www.worten.pt/informatica-e-acessorios/acessorios-pc/mais-acessorios-pc/microfones/microfone-trust-gxt-232-mantis-streaming-com-cabo-preto-6725198?gclid=Cj0KCQjw08aYBhDlARIsAA_gb0ehEBc143stNd9aJrW4kCTe3xjM0frwIoWOoU217vS3ukDr3Pb9eEEaAt2gEALw_wcB",
  },
  {
    id: 6,
    title: "Auscultadores Bluetooth JBL T510 (Over Ear - Microfone - Preto)",
    image: require("./assets/fonejbl.jpeg"),
    description: "Menos de um mes de uso. Sem fio",
    slug: "Auscultadores Bluetooth JBL T510 (Over Ear - Microfone - Preto)",
    price: "25 euros",
    originalLink:
      "https://www.worten.pt/tv-video-e-som/som-portatil/auscultadores/auscultadores-sem-fios/auscultadores-bluetooth-jbl-t510-over-ear-microfone-preto-7374086",
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-body mt-8 mb-8">
          Itens disponíveis / <span className="text-lg">Available Items</span>
        </h2>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-4">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                slug={product.slug}
                originalLink={product.originalLink}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

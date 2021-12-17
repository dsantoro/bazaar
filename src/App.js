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
    id: 3,
    title: "Adaptador USB-C pra 8 saídas diversas",
    image: require("./assets/adaptor.jpeg"),
    description:
      "Usado apenas uma vez. Possibilita o uso de 3 monitores mas apenas em Windows e Linux. / Used only once. Allows the use of 3 monitors but only on Windows and Linux.",
    slug: "Adaptador USB-C pra 8 saídas diversas",
    price: "40 euros",
    originalLink:
      "https://www.amazon.es/gp/product/B09FXLZ1L3/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1",
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
    title: "Monitor ASUS VZ239HE (23'' - Full HD - LED IPS)",
    image: require("./assets/monitor.jpeg"),
    description:
      "Pouco usado. Funciona muito bem e está na caixa. / Pouco usado. Funciona muito bem e está na caixa.",
    slug: "Monitor ASUS VZ239HE",
    price: "70 euros",
    originalLink:
      "https://www.worten.pt/informatica-e-acessorios/monitores/monitores-pc/monitor-asus-vz239he-23-full-hd-led-ips-6418351",
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

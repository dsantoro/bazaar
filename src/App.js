import Header from "./components/Header";
import Card from "./components/Card";

const products = [
  {
    id: 1,
    title: "Headset Beats EP com fio",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    description:
      "Com algumas marcas de uso mas super bem cuidado. Tem o fio roído mas funciona legal. / With some marks of use but super well taken care of. Has the thread chewed but works fine.",
    slug: "Headset Beats EP",
  },
  {
    id: 2,
    title: "Teclado Mecânico TKL Kernel",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    description:
      "Teclado mecânico de alta qualidade. Com apoio em alumínio, luzes configuráveis e bem pouco uso. / High quality mechanical keyboard. With aluminum backing, configurable lights and very little use.",
    slug: "Teclado Mecânico TKL Kernel",
  },
  {
    id: 3,
    title: "Adaptador USB-C pra 8 saídas diversas",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    description:
      "Usado apenas uma vez. Possibilita o uso de 3 monitores mas apenas em Windows e Linux. / Used only once. Allows the use of 3 monitors but only on Windows and Linux.",
    slug: "Adaptador USB-C pra 8 saídas diversas",
  },
  {
    id: 4,
    title: "Suporte de Monitor",
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    description:
      "Produto novo, nunca usado. Super robusto e flexível. / New product, never used. Super robust and flexible.",
    slug: "Item",
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
                slug={product.slug}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

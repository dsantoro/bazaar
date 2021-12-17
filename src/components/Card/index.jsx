const Card = ({ image, title, description, price, originalLink, slug }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-5">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 h-16 overflow-hidden">
          {title}
        </h5>
        <p className="font- text-sm text-gray-700 mb-3 h-32">{description}</p>
        <p className="text-xl font-bold mb-4">{price}</p>
        <a
          className="text-white bg-blue-300 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mb-4"
          href={`https://api.whatsapp.com/send?phone=+351910272254&text=${slug}`}
          target="_blank"
          rel="noreferrer"
        >
          Tenho interesse / I want it
        </a>
        <hr className="mb-2" />
        <a
          className="text-sm text-gray-600"
          href={originalLink}
          target="_blank"
          rel="noreferrer"
        >
          Link do produto na loja / <small>Link of product in store</small>
        </a>
      </div>
    </div>
  );
};

export default Card;

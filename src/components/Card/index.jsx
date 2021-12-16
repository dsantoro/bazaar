const Card = ({ image, title, description, slug }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <img className="rounded-t-lg" src={image} alt={title} />
      <div className="p-5">
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 h-16">
          {title}
        </h5>
        <p className="font- text-sm text-gray-700 mb-3 h-36">{description}</p>
        <a
          className="text-white bg-blue-300 hover:bg-blue-800 ffont-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={`https://api.whatsapp.com/send?phone=+351910272254&text=${slug}`}
          target="_blank"
          rel="noreferrer"
        >
          Tenho interesse / I want it
        </a>
      </div>
    </div>
  );
};

export default Card;

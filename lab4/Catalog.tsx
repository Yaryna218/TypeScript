import React, { useState } from "react";

type Artwork = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  price: string;
  style: string;
  type: string;
};

const sampleArtworks: Artwork[] = [
  {
    id: 1,
    title: "Sunset Overdrive",
    author: "Anna Petrova",
    imageUrl: "https://gibbslang.co.nz/wp-content/uploads/2019/05/colin-gibbs-whanganui-1.jpg",
    price: "$120",
    style: "Impressionism",
    type: "Painting",
  },
  {
    id: 2,
    title: "Abstract Dreams",
    author: "Ivan Marchenko",
    imageUrl: "https://gibbslang.co.nz/wp-content/uploads/2019/05/colin-gibbs-after-the-rain-falls-3.jpg",
    price: "$150",
    style: "Abstract",
    type: "Digital Art",
  },
  {
    id: 3,
    title: "Ocean Breeze",
    author: "Olga Voronina",
    imageUrl: "https://gibbslang.co.nz/wp-content/uploads/2019/05/colin-gibbs-after-the-rain-falls-3.jpg",
    price: "$200",
    style: "Realism",
    type: "Photography",
  },
  // Add more sample artworks here
];

const Catalog: React.FC = () => {
  const [query, setQuery] = useState("");
  const [styleFilter, setStyleFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Function to filter artworks based on search and selected filters
  const filteredArtworks = sampleArtworks.filter((art) => {
    const matchesQuery = art.title.toLowerCase().includes(query.toLowerCase());
    const matchesStyle = styleFilter ? art.style.toLowerCase() === styleFilter.toLowerCase() : true;
    const matchesAuthor = authorFilter ? art.author.toLowerCase().includes(authorFilter.toLowerCase()) : true;
    const matchesPrice = priceFilter
      ? parseInt(art.price.replace('$', '').replace(',', '')) <= parseInt(priceFilter)
      : true;
    const matchesType = typeFilter ? art.type.toLowerCase() === typeFilter.toLowerCase() : true;

    return matchesQuery && matchesStyle && matchesAuthor && matchesPrice && matchesType;
  });

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-4">Каталог робіт</h1>
      <p className="text-lg text-center text-gray-600 mb-10">Оберіть найкраще з цифрового мистецтва</p>

      {/* Filter Panel */}
      <div className="mb-8 flex flex-wrap gap-6 justify-center">
        <div>
          <input
            type="text"
            placeholder="Пошук за назвою..."
            className="w-full p-4 border-2 border-indigo-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300 ease-in-out"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <select
            className="p-4 border-2 border-indigo-300 rounded-xl shadow-lg"
            value={styleFilter}
            onChange={(e) => setStyleFilter(e.target.value)}
          >
            <option value="">Виберіть стиль</option>
            <option value="Impressionism">Імпресіонізм</option>
            <option value="Abstract">Абстракція</option>
            <option value="Realism">Реалізм</option>
            <option value="Surrealism">Сюрреалізм</option>
          </select>
        </div>

        <div>
          <select
            className="p-4 border-2 border-indigo-300 rounded-xl shadow-lg"
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
          >
            <option value="">Виберіть автора</option>
            <option value="Anna Petrova">Anna Petrova</option>
            <option value="Ivan Marchenko">Ivan Marchenko</option>
            <option value="Olga Voronina">Olga Voronina</option>
            {/* Add more authors here */}
          </select>
        </div>

        <div>
          <select
            className="p-4 border-2 border-indigo-300 rounded-xl shadow-lg"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Максимальна ціна</option>
            <option value="150">$150</option>
            <option value="200">$200</option>
            <option value="250">$250</option>
            <option value="300">$300</option>
          </select>
        </div>

        <div>
          <select
            className="p-4 border-2 border-indigo-300 rounded-xl shadow-lg"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Виберіть тип твору</option>
            <option value="Painting">Живопис</option>
            <option value="Digital Art">Цифрове мистецтво</option>
            <option value="Photography">Фотографія</option>
            {/* Add more types here */}
          </select>
        </div>
      </div>

      {/* Grid of Artworks */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredArtworks.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={art.imageUrl}
              alt={art.title}
              className="w-full h-56 sm:h-64 object-cover rounded-t-3xl transition duration-300 ease-in-out"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{art.title}</h2>
              <p className="text-md text-gray-500 mt-2">Автор: {art.author}</p>
              <p className="mt-4 text-lg text-indigo-700 font-bold">{art.price}</p>
              <p className="text-sm text-gray-600 mt-2">Стиль: {art.style}</p>
              <p className="text-sm text-gray-600 mt-1">Тип: {art.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

import React, { useState } from "react";

// Mock user data
type UserProfile = {
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
};

const mockUser: UserProfile = {
  name: "Ярина Токарчук",
  email: "yarynatokarchuk17@gmail.com",
  avatarUrl: "/yaryna.jpg",
  bio: "Цифрова художниця з Івано-Франківська. Створюю абстрактні композиції з емоційним забарвленням.",
};

// Mock artwork data
type Artwork = {
  id: number;
  title: string;
  price: string;
  views: number;
  sales: number;
};

const mockArtworks: Artwork[] = [
  {
    id: 1,
    title: "Sunset Overdrive",
    price: "$120",
    views: 150,
    sales: 50,
  },
  {
    id: 2,
    title: "Abstract Dreams",
    price: "$150",
    views: 200,
    sales: 70,
  },
];

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"purchases" | "artworks">("artworks");
  const [newArtwork, setNewArtwork] = useState<string>("");

  // Handle artwork upload (for simplicity, we just add the title)
  const handleUploadArtwork = () => {
    if (newArtwork.trim()) {
      const newArt = {
        id: mockArtworks.length + 1,
        title: newArtwork,
        price: "$200", // Example static price
        views: 0,
        sales: 0,
      };
      mockArtworks.push(newArt);
      setNewArtwork(""); // Clear the input after upload
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Профіль користувача</h1>
      
      {/* User Info Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={mockUser.avatarUrl}
          alt={mockUser.name}
          className="w-32 h-32 rounded-full border-4 border-indigo-500"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-indigo-700">{mockUser.name}</h2>
          <p className="text-gray-600">{mockUser.email}</p>
          <p className="mt-4 text-gray-700">{mockUser.bio}</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            Редагувати профіль
          </button>
        </div>
      </div>

      {/* Tabs for navigation between Purchases and Artworks */}
      <div className="mt-8 flex gap-4 justify-center">
        <button
          onClick={() => setActiveTab("artworks")}
          className={`px-6 py-2 rounded-xl text-lg font-semibold ${
            activeTab === "artworks" ? "bg-indigo-600 text-white" : "bg-gray-100 text-indigo-600"
          } hover:bg-indigo-700 hover:text-white transition`}
        >
          Мої твори
        </button>
        <button
          onClick={() => setActiveTab("purchases")}
          className={`px-6 py-2 rounded-xl text-lg font-semibold ${
            activeTab === "purchases" ? "bg-indigo-600 text-white" : "bg-gray-100 text-indigo-600"
          } hover:bg-indigo-700 hover:text-white transition`}
        >
          Мої покупки
        </button>
      </div>

      {/* Tab Content: Artworks */}
      {activeTab === "artworks" && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Мої твори</h2>

          {/* Artwork Upload */}
          <div className="mb-6">
            <input
              type="text"
              value={newArtwork}
              onChange={(e) => setNewArtwork(e.target.value)}
              placeholder="Назва нового твору"
              className="w-full p-4 border-2 border-indigo-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300 ease-in-out"
            />
            <button
              onClick={handleUploadArtwork}
              className="mt-4 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              Завантажити твір
            </button>
          </div>

          {/* Displaying Artworks */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockArtworks.map((art) => (
              <div
                key={art.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{art.title}</h3>
                <p className="text-md text-gray-600 mt-2">Ціна: {art.price}</p>
                <p className="text-md text-gray-500 mt-2">Переглядів: {art.views}</p>
                <p className="text-md text-gray-500 mt-2">Продажів: {art.sales}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Purchases */}
      {activeTab === "purchases" && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Мої покупки</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800">Sunset Overdrive</h3>
              <p className="text-md text-gray-600 mt-2">Ціна: $120</p>
              <p className="text-md text-gray-500 mt-2">Дата покупки: 01.05.2025</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800">Abstract Dreams</h3>
              <p className="text-md text-gray-600 mt-2">Ціна: $150</p>
              <p className="text-md text-gray-500 mt-2">Дата покупки: 15.04.2025</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

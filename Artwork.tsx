import React, { useState } from "react";

type Artwork = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  price: string;
  description: string;
  authorBio: string;
  rating: number; // Average rating (e.g., 4.5/5)
  comments: string[];
};

const sampleArtwork: Artwork = {
  id: 1,
  title: "Sunset Overdrive",
  author: "Anna Petrova",
  imageUrl: "https://gibbslang.co.nz/wp-content/uploads/2019/05/colin-gibbs-whanganui-1.jpg",
  price: "$120",
  description: "A beautiful digital painting capturing the essence of a sunset over the cityscape. The blending of warm tones creates a feeling of tranquility and wonder.",
  authorBio: "Anna Petrova is a renowned digital artist with a passion for landscapes and surrealism. Her works have been exhibited in several galleries across Europe.",
  rating: 4.5,
  comments: [
    "Amazing work! The colors are so vibrant.",
    "I love the composition. Truly inspiring!",
    "Great piece of art! Would love to see more from this artist."
  ],
};

const ArtworkPage: React.FC = () => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      sampleArtwork.comments.push(newComment);
      setNewComment(""); // Clear the input after adding the comment
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      {/* Artwork Details Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Artwork Image */}
        <div className="flex-1">
          <img
            src={sampleArtwork.imageUrl}
            alt={sampleArtwork.title}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Artwork Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">{sampleArtwork.title}</h1>
          <h3 className="text-xl font-medium text-gray-700 mb-4">Автор: {sampleArtwork.author}</h3>
          <p className="text-md text-gray-600 mb-6">{sampleArtwork.description}</p>
          <p className="text-md text-gray-500 mb-4"><strong>Про автора:</strong> {sampleArtwork.authorBio}</p>

          {/* Rating */}
          <div className="mb-6">
            <p className="text-md text-indigo-600">Рейтинг: {sampleArtwork.rating} / 5</p>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-indigo-800 mb-6">{sampleArtwork.price}</p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Купити
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
              Додати до обраного
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition duration-300 transform hover:scale-105">
              Поділитися
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Коментарі користувачів</h2>
        <div className="space-y-4">
          {sampleArtwork.comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-md text-gray-600">{comment}</p>
            </div>
          ))}
        </div>

        {/* Add Comment */}
        <div className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ваш коментар..."
            className="w-full p-4 border-2 border-indigo-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300 ease-in-out"
            rows={4}
          />
          <button
            onClick={handleAddComment}
            className="mt-4 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Додати коментар
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkPage;

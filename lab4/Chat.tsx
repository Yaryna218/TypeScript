import React, { useState } from "react";

// Types for messages and image uploads
type Message = {
  id: number;
  author: string;
  content: string;
  imageUrl?: string; // Optional image URL
};

const initialMessages: Message[] = [
  { id: 1, author: "Anna", content: "Привіт! Цікавить ваша робота 😊" },
  { id: 2, author: "You", content: "Вітаю! Так, вона доступна." },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [image, setImage] = useState<File | null>(null); // For handling image upload

  // Function to handle sending the message
  const sendMessage = () => {
    if (newMessage.trim() === "" && !image) return; // Don't send empty messages

    const newMsg: Message = {
      id: Date.now(),
      author: "You",
      content: newMessage,
      imageUrl: image ? URL.createObjectURL(image) : undefined, // Convert image to URL if it exists
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
    setImage(null); // Clear image after sending
  };

  // Function to handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]); // Store the first selected image
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Чат із художником</h1>
      
      {/* Chat container */}
      <div className="bg-white rounded-2xl shadow-lg p-4 h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {/* Map over the messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-xl max-w-xs ${
                msg.author === "You"
                  ? "ml-auto bg-indigo-100 text-right"
                  : "mr-auto bg-gray-100"
              }`}
            >
              <p className="text-sm text-gray-600">{msg.author}</p>
              <p>{msg.content}</p>
              {msg.imageUrl && (
                <img src={msg.imageUrl} alt="Attached" className="mt-2 max-w-xs rounded-lg" />
              )}
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Напишіть повідомлення..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          {/* Image upload input */}
          <input
            type="file"
            accept="image/*"
            className="p-2 border rounded-xl focus:outline-none"
            onChange={handleImageChange}
          />

          <button
            onClick={sendMessage}
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Надіслати
          </button>
        </div>
      </div>

      {/* Order Details (Optional) */}
      <div className="mt-6 p-4 bg-gray-100 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-800">Обговорення замовлення</h3>
        <p className="text-gray-600 mt-2">Обговоріть деталі вашого замовлення або запитайте про щось додатково.</p>
        <textarea
          className="w-full mt-4 p-4 border-2 border-indigo-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
          rows={4}
          placeholder="Напишіть деталі замовлення..."
        />
        <button
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Зберегти зміни
        </button>
      </div>
    </div>
  );
};

export default Chat;

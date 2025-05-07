import React from "react";

type Tip = {
  id: number;
  title: string;
  description: string;
};

const educationTips: Tip[] = [
  {
    id: 1,
    title: "Основи цифрового живопису",
    description: "Дізнайтесь, як почати створювати цифрове мистецтво з нуля – програми, планшети, техніки.",
  },
  {
    id: 2,
    title: "Кольорова теорія",
    description: "Вивчіть, як поєднання кольорів впливає на настрій та враження від вашої роботи.",
  },
  {
    id: 3,
    title: "Маркетинг для художників",
    description: "Як просувати свої роботи онлайн, вести соціальні мережі та будувати бренд.",
  },
];

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">Освітній розділ</h1>
      <p className="text-gray-600 text-center mb-10">
        Навчальні матеріали для покращення вашого мистецтва та навичок.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {educationTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">{tip.title}</h2>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

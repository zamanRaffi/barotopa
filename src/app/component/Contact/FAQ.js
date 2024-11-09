'use client'
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How does it work?',
      answer: 'Book a demo with us today, and we will show you in real time the power of showcaseX. We then will discuss what package might be best suited to your brand, dependent on your requirements.',
    },
    {
      question: 'How long does it take?',
      answer: 'The duration varies based on your specific requirements. Contact us for a detailed timeline.',
    },
    {
      question: 'What is your brand promise?',
      answer: 'Our brand promise is to deliver exceptional quality and support.',
    },
    {
      question: 'What is your brand promise?',
      answer: 'We commit to meeting your needs and ensuring satisfaction with our services.',
    },
    {
        question: 'What is your brand promise?',
        answer: 'We commit to meeting your needs and ensuring satisfaction with our services.',
      },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 mb-32">
      <h2 className="text-6xl font-bold text-center text-[#00aeef] mb-20">Frequently Asked Questions</h2>
      <div className="space-y-4 px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#171717] text-white rounded-2xl shadow-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full p-4 text-left"
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                className={`w-6 h-6 transition-transform transform border rounded-full ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 text-sm">
                <p className='text-[#c0c0c0]'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


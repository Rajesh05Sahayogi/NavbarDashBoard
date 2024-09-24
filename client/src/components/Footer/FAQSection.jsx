import React, { useState } from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including copywriting, content creation, SEO optimization, website design, and social media management."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing depends on the scope and type of service. We offer custom packages tailored to your needs."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach out to us through the contact form on our website or via email at contact@oursite.com."
  },
  {
    question: "What is your turnaround time?",
    answer: "Turnaround times vary depending on the project, but most services are delivered within 7-10 business days."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we offer up to two rounds of revisions with most of our services to ensure client satisfaction."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex px-3 overflow-hidden flex-col items-center pt-4 sm:pt-6 md:pt-10 bg-white w-full max-w-[1100px] mx-auto">
    <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-center text-blue-800">
      FAQ
    </h1>
    <div className="flex flex-col mt-3 w-full sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px]">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => toggleAnswer(index)}
        />
      ))}
    </div>
  </section>
  
  );
};

export default FAQSection;

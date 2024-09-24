import React from 'react';
import FAQSection from './FAQSection';
import Footer from './Footer';

function MainComponent() {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-1 bg-white">
      <FAQSection />
      {/* <Footer /> */}
    </main>
  );
}

export default MainComponent;
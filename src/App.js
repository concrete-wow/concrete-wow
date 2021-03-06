import React from 'react';
import Search from './Components/Search';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="body">
        <Logo />
        <header className="">
          <h1 className="title">Factually</h1>
          <div className="tagline">
            <h3>Spot bad information. Fight COVID-19. Stay safe.</h3>
            <h3>Want to know if you can trust a website?</h3>
          </div>
          <Search />
        </header>
        <div className="white-bg">
          <div className="more-info">
            <div className="screenshot-wrapper">
              <img
                className="screenshot"
                src="/icons-images/Screenshot.jpg"
                alt="Screenshot of a news website"
              />
              <img id="over_image" src="/icons-images/thumbsup.svg" alt="thumpsdown icon" />
            </div>
            <div className="para-wrapper">
              <h2>No fuss and no frills</h2>
              <p>We simply tell you if you can trust COVID-19 information on a website or not.</p>
              <p className="important">
                Solid information and credible sources?
                <br />
                <br />
                <img className="icon" src="/icons-images/thumbsup.svg" alt="thumpsdown icon" />{' '}
                <span className="span-container">Thumbs up. You can trust this website.</span>
              </p>
              <p className="important">
                Pandering conspiracy theories and claims bleaching your lungs kills Coronavirus?
                <br />
                <br />
                <img
                  className="icon"
                  src="/icons-images/thumbsdown.svg"
                  alt="thumpsdown icon"
                />{' '}
                <span className="span-container">Thumbs down. Stay away from this site.</span>
              </p>
              <p>
                <strong>Simple!</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="more-info third-section">
          <h2>There is a lot of information out there</h2>
          <p>
            And more keeps coming out every day. It’s hard to know what you can trust, and bad
            information can be very dangerous. Factually is a platform that lets you check the
            credibility of a website.
          </p>
          <p>
            We do this by going through the content of the website and looking at its sources of
            information. This makes it easier to spot real facts about COVID-19, helping you take
            care of yourself and others.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

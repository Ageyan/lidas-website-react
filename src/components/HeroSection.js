import Modal from './Modal';

function HeroSection({modal}) {
  const [showModal, openModal, closeModal] = modal;

  return (
    <section className="hero-section">
      <div className="container">
          <div className="hero-section__title-container">
              <h1 className="hero-section__title"><span className="hero-section__title-white">Welcome to Von</span> a — a little <span className="hero-section__title-white">haven for </span>your skin.</h1>
              <button className="hero-section__button" onClick={openModal}>Consultation</button>
              <Modal show={showModal} closeModal={closeModal} />
          </div>
          <div className="hero-section__wave">
            <svg
              className="hero-section__wave-bottom"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,100 C360,20 720,120 1080,40 C1260,0 1440,0 1440,0 L1440,100 L0,100 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
      </div>
    </section>
  );
}

export default HeroSection;
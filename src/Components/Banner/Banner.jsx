import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>Limited Time Offer!</h2>
        <p>Get up to <span>50% OFF</span> on selected products. Hurry up before the deal ends!</p>
        <a href="/shop" className="banner-btn">Shop Now</a>
      </div>
    </section>
  );
};

export default Banner;

import "./FeaturedProperties.css";

const FeaturedProperties = () => {
    return (

        <div className="fp">
        <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/31159733.webp?k=99fa3261b159d0a25fbd865fd32dc7cd54e3bd3b8b35d3e416adfea49b8bb9e9&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Leela Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from Rs.16,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>

        <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/309583583.webp?k=c1b5bd1d0692c098fc2e43147aa3043dd3444b0aa0cb799db5cb2824889f75fb&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mizzle Exotica</span>
        <span className="fpCity">Lonavala</span>
        <span className="fpPrice">Starting from Rs.11,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>

        <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/288596292.webp?k=b0e584d58e2293dbfc027141e287d7b988245ce1905e77bc0b62dfde29767071&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Grand Mercure</span>
        <span className="fpCity">Banglore</span>
        <span className="fpPrice">Starting from Rs.13,500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
        </div>







        </div>



    );

};

export default FeaturedProperties;
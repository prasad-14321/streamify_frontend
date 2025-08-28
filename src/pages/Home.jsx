import React, { useState } from "react";

const moviesNowPlaying = [
  {
    title: "Dune: Part Two",
    img: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    rating: 8.3,
    genres: ["Science Fiction", "Adventure"],
    date: "Feb 27, 2024"
  },
  {
    title: "Kung Fu Panda 4",
    img: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    rating: 7.2,
    genres: ["Animation", "Action"],
    date: "Mar 2, 2024"
  },
  {
    title: "Godzilla x Kong: The New Empire",
    img: "https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    rating: 6.7,
    genres: ["Action", "Science Fiction"],
    date: "Mar 27, 2024"
  },
  {
    title: "The Wages of Fear",
    img: "https://image.tmdb.org/t/p/w500/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
    rating: 5.8,
    genres: ["Action", "Thriller"],
    date: "Mar 28, 2024"
  },
  {
    title: "Madame Web",
    img: "https://image.tmdb.org/t/p/w500/3E3D6Yy3dZ6Fqj1hJbGmF2Z5r2C.jpg",
    rating: 5.7,
    genres: ["Action", "Fantasy"],
    date: "Feb 14, 2024"
  }
];

const trendingMovies = [
  {
    title: "Dune: Part Two",
    img: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    rating: 8.3,
    genres: ["Science Fiction", "Adventure"],
    date: "Feb 27, 2024"
  },
  {
    title: "Immaculate",
    img: "https://image.tmdb.org/t/p/w500/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
    rating: 6.4,
    genres: ["Horror", "Mystery"],
    date: "Mar 20, 2024"
  },
  {
    title: "Ghostbusters: Frozen Empire",
    img: "https://image.tmdb.org/t/p/w500/6faYaQyiBPhqAizldJKq21mIVaE.jpg",
    rating: 6.5,
    genres: ["Fantasy", "Adventure"],
    date: "Mar 20, 2024"
  },
  {
    title: "Civil War",
    img: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    rating: 7.4,
    genres: ["Action", "War"],
    date: "Apr 10, 2024"
  },
  {
    title: "Dune",
    img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 7.8,
    genres: ["Science Fiction", "Adventure"],
    date: "Sep 15, 2021"
  }
];

const topRatedMovies = [
  {
    title: "The Shawshank Redemption",
    img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 8.7,
    genres: ["Drama", "Crime"],
    date: "Sep 23, 1994"
  },
  {
    title: "The Godfather",
    img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 8.7,
    genres: ["Drama", "Crime"],
    date: "Mar 14, 1972"
  },
  {
    title: "The Godfather Part II",
    img: "https://image.tmdb.org/t/p/w500/amvmeQWheahG3StKwIE1f7jRnkZ.jpg",
    rating: 8.6,
    genres: ["Drama", "Crime"],
    date: "Dec 20, 1974"
  },
  {
    title: "Schindler's List",
    img: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    rating: 8.6,
    genres: ["Drama", "History"],
    date: "Dec 15, 1993"
  },
  {
    title: "12 Angry Men",
    img: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    rating: 8.5,
    genres: ["Drama"],
    date: "Apr 10, 1957"
  }
];

export default function Home() {
  const [trendingToggle, setTrendingToggle] = useState("Day");
  const [topRatedToggle, setTopRatedToggle] = useState("Movies");

  return (
    <div className="home-root">
      <nav className="navbar-fixed">
        <div className="brand-gradient home-logo">Streamify</div>
        <div className="nav-links">
          <a href="#" className="nav-link">Movies</a>
          <a href="#" className="nav-link">TV Shows</a>
          <a href="#" className="nav-link">Upcoming</a>
          <a href="#" className="nav-link">Top Rated</a>
          <a href="#" className="nav-link">Popular</a>
          <a href="#" className="nav-link">WatchList</a>
          <a href="#" className="nav-link">Logout</a>
          <span className="nav-search-icon">🔍</span>
        </div>
      </nav>
      <div className="main-content">
        <section className="section">
          <h2 className="section-title">Playing in theatres</h2>
          <div className="movie-row">
            {moviesNowPlaying.map((movie, idx) => (
              <MovieCard key={idx} {...movie} />
            ))}
          </div>
        </section>
        <section className="section">
          <div className="section-title-row">
            <h2 className="section-title">Trending</h2>
            <div className="toggle-group">
              <button className={trendingToggle === "Day" ? "toggle-btn active" : "toggle-btn"} onClick={() => setTrendingToggle("Day")}>Day</button>
              <button className={trendingToggle === "Week" ? "toggle-btn active" : "toggle-btn"} onClick={() => setTrendingToggle("Week")}>Week</button>
            </div>
          </div>
          <div className="movie-row">
            {trendingMovies.map((movie, idx) => (
              <MovieCard key={idx} {...movie} />
            ))}
          </div>
        </section>
        <section className="section">
          <div className="section-title-row">
            <h2 className="section-title">Top Rated</h2>
            <div className="toggle-group">
              <button className={topRatedToggle === "Movies" ? "toggle-btn active" : "toggle-btn"} onClick={() => setTopRatedToggle("Movies")}>Movies</button>
              <button className={topRatedToggle === "TV Shows" ? "toggle-btn active" : "toggle-btn"} onClick={() => setTopRatedToggle("TV Shows")}>TV Shows</button>
            </div>
          </div>
          <div className="movie-row">
            {topRatedMovies.map((movie, idx) => (
              <MovieCard key={idx} {...movie} />
            ))}
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy-Policy</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-desc">
          Experience the future of entertainment at your fingertips with Streamify's intuitive interface, empowering users to navigate effortlessly through a vast library of high-quality, on-demand content.
        </div>
      </footer>
      <style>{`
        html, body, #root, .home-root {
          height: 100%;
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .home-root {
          min-height: 100vh;
          width: 100vw;
          background: #07162b;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }
        .navbar-fixed {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          z-index: 100;
          background: rgba(10,10,20,0.95);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 3rem 0.5rem 3rem;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
        }
        .home-logo {
          font-size: 2.1rem;
          font-weight: bold;
        }
        .brand-gradient {
          background: linear-gradient(90deg, #ffb347, #ff0844);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.1rem;
        }
        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 1.08rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #ffb347;
        }
        .nav-search-icon {
          font-size: 1.2rem;
          color: #fff;
          cursor: pointer;
          margin-left: 0.5rem;
        }
        .main-content {
          flex: 1 0 auto;
          margin-top: 90px;
          padding: 2.5rem 2.5vw 2.5rem 2.5vw;
          min-height: 0;
        }
        .section {
          margin-bottom: 2.8rem;
        }
        .section-title {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }
        .section-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .toggle-group {
          background: #12203a;
          border-radius: 2rem;
          padding: 0.2rem;
          display: flex;
          gap: 0.2rem;
        }
        .toggle-btn {
          background: none;
          border: none;
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.4rem 1.2rem;
          border-radius: 2rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .toggle-btn.active {
          background: linear-gradient(90deg, #ffb347, #ff0844);
          color: #fff;
        }
        .movie-row {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: thin;
          scrollbar-color: #1a2a44 #07162b;
        }
        .movie-row::-webkit-scrollbar {
          height: 8px;
        }
        .movie-row::-webkit-scrollbar-thumb {
          background: #1a2a44;
          border-radius: 4px;
        }
        .footer {
          flex-shrink: 0;
          background: #0a1a2f;
          color: #fff;
          padding: 2rem 2vw 1.2rem 2vw;
          text-align: center;
        }
        .footer-links {
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #ffb347;
          margin: 0 1.2rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .footer-desc {
          color: #b0b0b0;
          font-size: 1rem;
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 700px) {
          .navbar-fixed {
            padding: 1rem 1.2rem 0.5rem 1.2rem;
          }
          .main-content {
            padding: 1.2rem 0.5vw 1.2rem 0.5vw;
          }
          .footer-links a {
            margin: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

function MovieCard({ title, img, rating, genres, date }) {
  return (
    <div className="movie-card">
      <div className="movie-img-wrap">
        <img src={img} alt={title} className="movie-img" />
        <div className="movie-rating">{rating}</div>
        <div className="movie-genres">
          {genres.map((g, i) => (
            <span className="movie-genre" key={i}>{g}</span>
          ))}
        </div>
      </div>
      <div className="movie-title">{title}</div>
      <div className="movie-date">{date}</div>
      <style>{`
        .movie-card {
          background: #12203a;
          border-radius: 1.2rem;
          width: 180px;
          min-width: 180px;
          padding: 0.7rem 0.7rem 1rem 0.7rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
        }
        .movie-img-wrap {
          position: relative;
          width: 100%;
        }
        .movie-img {
          width: 100%;
          border-radius: 0.7rem;
          margin-bottom: 0.7rem;
        }
        .movie-rating {
          position: absolute;
          left: 0.5rem;
          bottom: 0.5rem;
          background: #fff;
          color: #1db954;
          font-weight: bold;
          border-radius: 50%;
          width: 2.1rem;
          height: 2.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
        }
        .movie-genres {
          position: absolute;
          right: 0.5rem;
          bottom: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
        }
        .movie-genre {
          background: linear-gradient(90deg, #ffb347, #ff0844);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 0.7rem;
          padding: 0.1rem 0.7rem;
          margin-left: 0.2rem;
          margin-bottom: 0.1rem;
          white-space: nowrap;
        }
        .movie-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 600;
          margin-top: 0.5rem;
          margin-bottom: 0.1rem;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .movie-date {
          color: #b0b0b0;
          font-size: 0.95rem;
          margin-top: 0.1rem;
        }
      `}</style>
    </div>
  );
}

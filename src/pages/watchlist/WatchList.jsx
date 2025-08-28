import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import MovieCard from "../../components/movieCard/MovieCard";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import "./style.scss";
import { TailSpin } from "react-loader-spinner";
import Cookies from "js-cookie";
import backendHost from "../../api";

const WatchList = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState();

  const fetchSavedMovies = async () => {
    try {
      setLoading(true);
      const jwtToken = Cookies.get("jwtToken");
      const host = `${backendHost}/api/saved/getmovies`;
      const { data } = await axios.get(host, {
        headers: {
          "auth-token": jwtToken,
        },
      });
      if (data.status) {
        setMoviesData(data?.movies);
        setLoading(false);
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  return (
    <>
      <Header />

      {!loading ? (
        <div className="watchlistContainer">
          {moviesData.length > 0 && (
            <ContentWrapper>
              {moviesData?.map((movie, index) => {
                return (
                  <MovieCard
                    data={movie}
                    mediaType={movie?.mediaType}
                    key={index}
                  />
                );
              })}
            </ContentWrapper>
          )}
          {moviesData.length == 0 && (
            <>
              <img className="noResultsImage" src={noResults} />
              <h1>Watchlist is empty</h1>
            </>
          )}
        </div>
      ) : (
        <div className="loadingContainer">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default WatchList;

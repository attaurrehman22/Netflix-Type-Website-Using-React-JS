import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

function Home(props) {
  const [carouseldata, setCarouseldata] = useState([]);
  const [trendingdata, setTrendingdata] = useState([]);
  const [actiondata,setActiondata]=useState([]);
  const [adventuredata,setAdventuredata]=useState([]);
  const [animationdata,setAnimationdata]=useState([]);
  const [comedydata,setComedydata]=useState([]);
  const [documentrydata,setDocumentrydata]=useState([]);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setCarouseldata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingdata(data.results);
        // console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`)
      .then((response) => response.json())
      .then((data) => {
        setActiondata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=12`)
      .then((response) => response.json())
      .then((data) => {
        setAdventuredata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`)
      .then((response) => response.json())
      .then((data) => {
        setAnimationdata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`)
      .then((response) => response.json())
      .then((data) => {
        setComedydata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiKey = "08cc33bd5ae3a747598ce2ad84376e66";
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`)
      .then((response) => response.json())
      .then((data) => {
        setDocumentrydata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="body-div">
        <div className="div-relative">
          <Carousel>
            {carouseldata.map((item, index) => (
              <Carousel.Item>
                <div className="carousel-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt="First slide"
                  />
                </div>

                <Carousel.Caption>
                  <h3>{item.original_title}</h3>
                  <p>{item.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="div-absolute">
            <nav class="navbar navbar-expand-lg fixed-top">
              <div class="container-fluid">
                <a class="navbar-brand text-white">SHOWTIME</a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link active text-white" aria-current="page">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white">Search</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <Navbar className="div-relative justify-content-start">
            <Container className="justify-content-start">
              <Navbar.Brand href="#home" className="text-white">
                Show Time
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end bg-danger">
                <Navbar.Text>
                  <a className="a-div text-white justify-content-end" href="#login">
                    Home
                  </a>
                </Navbar.Text>
                <Navbar.Text className="mx-4">
                  <a className="a-div text-white justify-content-end" href="#login">
                    Search
                  </a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar> */}
          </div>
        </div>

        <div className="trending-div">
          <div className="row">
            <h3 className="text-white text-margin">Trending</h3>
          </div>
          <div className="row">
            <div class="rowposter mt-3">
              {trendingdata.map((t) => (
                <div className="trn-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                    class="rowimg mx-2 largeposter"
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trending-div mt-5">
          <div className="row">
            <h3 className="text-white text-margin">Actions</h3>
          </div>
          <div className="row">
            <div class="rowposter mt-3">
              {actiondata.map((t) => (
                <div className="trn-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                    class="rowimg mx-2 largeposter"
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trending-div mt-5">
          <div className="row">
            <h3 className="text-white text-margin">Adventures</h3>
          </div>
          <div className="row">
            <div class="rowposter mt-3">
              {adventuredata.map((t) => (
                <div className="trn-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                    class="rowimg mx-2 largeposter"
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trending-div mt-5">
          <div className="row">
            <h3 className="text-white text-margin">Animation</h3>
          </div>
          <div className="row">
            <div class="rowposter mt-3">
              {animationdata.map((t) => (
                <div className="trn-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                    class="rowimg mx-2 largeposter"
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trending-div mt-5">
          <div className="row">
            <h3 className="text-white text-margin">Commedy</h3>
          </div>
          <div className="row">
            <div class="rowposter mt-3">
              {comedydata.map((t) => (
                <div className="trn-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                    class="rowimg mx-2 largeposter"
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trending-div mt-5">
          <div className="row">
            <h3 className="text-white text-margin">Documentry</h3>
          </div>
          <div className="row">
            <div class="rowposter mt-3">
              {documentrydata.map((t) => (
                <div className="trn-img-div">
                  <img
                    src={`https://image.tmdb.org/t/p/original${t.poster_path}`}
                    class="rowimg mx-2 largeposter"
                    alt="..."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

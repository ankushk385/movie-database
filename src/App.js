import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Requests from "./requests";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

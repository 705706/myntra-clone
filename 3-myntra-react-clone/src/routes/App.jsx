import Header from "../Componenets/Header";
import Footer from "../Componenets/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../Componenets/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Componenets/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;

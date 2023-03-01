import LinksInicio from "../components/LinksInicio";
import NoticiasInicio from "../components/NoticiasInicio";
import CalendarioInicio from "../components/CalendarioInicio";
import ActividadesInicio from "../components/ActividadesInicio";
import BannerInicio from "../components/BannerInicio";
import useWindowSize from "../hooks/useWindowSize";

function Inicio({ evaluaciones, actividades, news }) {
  const windowSize = useWindowSize().width;
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          height: "100vh",
        }}
      >
        <BannerInicio />
      </div>

      <div
        className="row"
        style={{ backgroundColor: windowSize <= 768 ? "#e0d8b0" : "#fff" }}
      >
        <NoticiasInicio news={news} />
      </div>

      <div
        className="row"
        style={{ backgroundColor: windowSize <= 768 ? "#ead0ad" : "#fff" }}
      >
        <CalendarioInicio evaluaciones={evaluaciones} />
      </div>

      <div
        className="row"
        style={{ backgroundColor: windowSize <= 768 ? "#f4bdbc" : "#fff" }}
      >
        <ActividadesInicio actividades={actividades} />
      </div>
      <div
        className="row"
        style={{ backgroundColor: windowSize <= 768 ? "#c4b7de" : "#fff" }}
      >
        <LinksInicio />
      </div>
    </div>
  );
}

export default Inicio;

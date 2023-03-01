import director from "../assets/director-perfil.jpg";
import useWindowSize from "../hooks/useWindowSize";

export default function PalabrasDirectorNosotros() {
  const size = useWindowSize().width;

  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: size <= 756 ? "#e0d8b0" : "#fff" }}
      >
        <div className="d-flex align-items-center">
          <div className="container">
            <div
              className="row text-center text-md-start py-4 p-md-5 mx-md-5 justify-content-around"
              style={{ backgroundColor: "#e0d8b0" }}
            >
              <div className="col-12 col-md-7 p-md-5">
                <h2>Palabras del Director</h2>
                <img
                  src={director}
                  className="img-fluid mx-auto d-block img-thumbnail d-md-none"
                  style={{
                    width: "100%",
                    maxHeight: "auto",
                  }}
                  alt="foto del director"
                />
                <h4>
                  "Queridos estudiantes, padres y miembros de la comunidad,
                </h4>
                <p>
                  Es un honor para mí dirigir el Centro Educativo Arturo Pérez
                  Canto en la hermosa comuna de Recoleta, Chile. Aquí, nos
                  enorgullecemos de ofrecer una educación de alta calidad y de
                  fomentar un ambiente de aprendizaje acogedor y seguro.
                  <br />
                  En el Centro Educativo Arturo Pérez Canto, creemos en la
                  importancia de formar jóvenes líderes y ciudadanos
                  responsables. Nos esforzamos por brindar una educación
                  integral que fomente el desarrollo de habilidades cognitivas,
                  sociales y emocionales en nuestros estudiantes.
                  <br />
                  Nuestro compromiso con la excelencia educativa se refleja en
                  la dedicación de nuestro personal docente, quienes trabajan
                  incansablemente para brindar una educación de calidad y ayudar
                  a nuestros estudiantes a alcanzar su máximo potencial.
                  <br />
                  Estamos comprometidos con mantener una comunicación abierta y
                  efectiva con nuestra comunidad educativa. Nos esforzamos por
                  fomentar un diálogo constante con los padres y estudiantes
                  para garantizar que sus necesidades y preocupaciones sean
                  atendidas adecuadamente.
                  <br />
                  En el Centro Educativo Arturo Pérez Canto, estamos emocionados
                  por seguir brindando una educación excepcional a nuestros
                  estudiantes y esperamos trabajar juntos para garantizar el
                  éxito de todos.
                  <br />
                  Atentamente,
                  <br />
                  <strong>[Nombre del Director]</strong>"
                </p>
              </div>
              <div className="col-12 col-md-3 align-self-center d-none d-md-flex">
                <img
                  src={director}
                  className="img-fluid mx-auto d-block img-thumbnail"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt="foto del director"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

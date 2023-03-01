import useWindowSize from "../hooks/useWindowSize";

const EquipoCATI = () => {
  const size = useWindowSize().width;

  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: size <= 768 ? "#e9d5da" : "#fff" }}
      >
        <div className="d-flex align-items-center">
          <div className="container">
            <div
              className="row py-4 p-md-5 mx-md-5 justify-content-around text-center"
              style={{ backgroundColor: "#e9d5da" }}
            >
              <div className="col-12 col-md-6 order-0 text-md-start">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                  quibusdam velit dicta voluptate, molestiae amet alias
                  provident dignissimos dolore ipsum repellendus voluptatum
                  similique iste tenetur dolores tempore asperiores iusto maxime
                  facere libero. Blanditiis ratione fugiat neque sint corrupti,
                  ab repellendus? Quas tempora eveniet in repudiandae deserunt
                  praesentium voluptates provident excepturi!
                </p>
              </div>
              <div className="col-12 col-md-4 order-1">
                <div className="card border-secondary text-bg-secondary mb-3">
                  <img
                    src="https://source.unsplash.com/400x300/?woman"
                    className="card-img-top"
                    alt="Orientadora y coordinadora del equipo CATI"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Orientadora y coordinadora del equipo CATI
                    </h5>
                    <p className="card-text">
                      Información sobre la orientadora y coordinadora del equipo
                      CATI
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="col-12 col-md-4 order-3 order-md-2">
                <div className="card border-secondary text-bg-secondary mb-3">
                  <img
                    src="https://source.unsplash.com/400x300/?man"
                    className="card-img-top"
                    alt="Psicólogo 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Psicólogo 1</h5>
                    <p className="card-text">
                      Información sobre el psicólogo 1
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 order-2 order-md-3 text-md-end">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti, consequatur? Sequi distinctio non, officia ad ullam
                  saepe! Aperiam fugiat voluptas, hic expedita eum pariatur
                  impedit deleniti omnis quidem, maiores saepe! Repellat nam,
                  iure consequuntur earum repudiandae tenetur quos quod, aliquid
                  consequatur iste optio eius reprehenderit vitae modi
                  perspiciatis culpa. Sed neque nostrum dolorum reprehenderit
                  incidunt saepe in a itaque fugiat!
                </p>
              </div>
              <div className="col-12 col-md-6 order-4 text-md-start">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  dolore ipsam hic, doloribus optio fugit. Nihil, minima. Ad
                  alias, hic repellat beatae nobis aspernatur quidem culpa autem
                  porro omnis laudantium reiciendis, voluptas, numquam ipsam
                  ratione dicta eum exercitationem dolorum nesciunt?
                </p>
              </div>
              <div className="col-12 col-md-4 order-5">
                <div className="card border-secondary text-bg-secondary mb-3">
                  <img
                    src="https://source.unsplash.com/400x300/?people"
                    className="card-img-top"
                    alt="Trabajador social"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Trabajador social</h5>
                    <p className="card-text">
                      Información sobre el trabajador social
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipoCATI;

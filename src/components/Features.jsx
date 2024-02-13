import IconWhatsapp from "./icons/IconWhatsapp";
import IconPhone from "./icons/IconPhone";
import IconSecurity from "./icons/IconSecurity";

const Features = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-lg-3">
            <div className="col col-md-5 p-lg-0">
                <div className="card py-2 bg-header text-white fw-bold">
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="pe-2 fs-3 text-success"><IconWhatsapp/></span><span>Compras vía WhatsApp</span>
                    </div>
                </div>
            </div>
            <div className="col col-md-3 my-2 my-md-0 my-lg-0">
                <div className="card py-2 bg-header text-white fw-bold">
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="pe-2 fs-3"><IconPhone/></span><span>Soporte</span>
                    </div>
                </div>
            </div>
            <div className="col col-md-4 p-lg-0">
                <div className="card py-2 bg-header text-white fw-bold">
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="pe-2 fs-3 text-warning"><IconSecurity/></span><span>Seguridad 100%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Features;
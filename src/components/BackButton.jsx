import { NavLink } from "react-router-dom";
import IconArrow from "./icons/IconArrow";


const BackButton = () => {
  return (
    <div className="container p-0">
        <NavLink to="/" className="bg-header border-0 text-white px-3 py-2 rounded-3 text-decoration-none  d-inline-flex align-items-center mt-4 mb-3 mb-lg-0 fw-bold"><IconArrow/><span className="ps-1">Volver</span></NavLink>
    </div>
  )
}
export default BackButton;
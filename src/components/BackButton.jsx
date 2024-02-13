import { NavLink } from "react-router-dom";


const BackButton = () => {
  return (
    <div className="container p-0">
        <NavLink to="/" className="bg-header border-0 text-white px-3 py-2 rounded-3 text-decoration-none d-block d-lg-inline-block mt-4 mb-3 mb-lg-0">🡠 Volver</NavLink>
    </div>
  )
}
export default BackButton;
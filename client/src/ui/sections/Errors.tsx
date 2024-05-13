import { Link } from "react-router-dom";
import Container from "../containers/Container";
import './Errors.scss';

const Errors = () => <section className="errors">
  <Container>
    <section className="error">
      <h4 className="error__status">404</h4>
      <h5 className="error__title">Oops! Lo sentimos.</h5>
      <p className="error__description">
        El producto que estás buscando no se encuentra disponible en este momento. Es posible que haya sido retirado del stock o que no esté disponible actualmente. Por favor, presiona el botón 'Volver al inicio' para regresar a la página principal y explorar otros productos. ¡Gracias por tu comprensión!
      </p>
      <Link to={'/'} className="error__button green">Volver al inicio</Link>
    </section>
  </Container>
</section>

export default Errors;
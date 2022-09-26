import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import TurismorealContext from '../../context/TurismorealContext';
import logoTR from './../../assets/images/icon_png.png';
import './header.css';

function Header() {
  
  const {user,logoutUser} = useContext(TurismorealContext)

  const handleLogout = () => {
    /* añadir spinner/msje modal */
    logoutUser()
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <img src={logoTR} alt="tr" className='img img-fluid' width={100}/> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/departamentos">Departamentos</Nav.Link>
            <Nav.Link href="/">Nosotros</Nav.Link>
            
          </Nav>
          <Nav>
            {user ? 
            
            (
              <>
              <Nav.Link href="/mis-reservas">Mis Reservas</Nav.Link>
              <button onClick={handleLogout} className='btn btn-secondary'>Cerrar Sesión</button>
              </>
            )
            :
            (
              <>
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
              <Nav.Link href="/registro">Crear Cuenta</Nav.Link>
              </>              
            )
          }
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
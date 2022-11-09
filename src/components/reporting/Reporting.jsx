import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoTR from '../../assets/images/icon_png.png';


export const Reporting = () => {
  return (
    <>

    <Container fluid className='bg-dark mb-4'>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/reporting">
            <img src={logoTR} alt="tr" className='img img-fluid' width={100}/> 
            </Navbar.Brand>

            <Container>
              <Navbar.Brand href="/reporting">Reporteria</Navbar.Brand>
            </Container>
          </Container>
        </Navbar>
    </Container>


    <div className="container d-flex ">

    {/* <div> */}
        <iframe title="turismo real - Zona" width="1140" height="541.25" 
                src="https://app.powerbi.com/reportEmbed?reportId=ec2007a6-8ee1-4677-ae06-994d1409de76&autoAuth=true&ctid=72fd0b5a-8a6a-4cff-89f6-bde961f7e250" 
                frameborder="0" allowFullScreen="true"/>
    {/* </div> */}

    </div>
    </>
  )
}
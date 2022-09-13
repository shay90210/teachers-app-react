import LogoBrand from '../app/assets/img/brandLogo2.png';
import {
    Container,
    Row, 
    Col
} from 'reactstrap';

const Header = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <img src={LogoBrand} alt='the teachers club logo' width='400px' className='mt-5' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className='mt-3'>THE TEACHERS' CLUB</h1>
                </Col>
            </Row>
        </Container>
    )
};

export default Header; 
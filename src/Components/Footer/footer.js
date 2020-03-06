import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
/*import FontAwesomeIcon from 'react-fontawesome'; */
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookF,TiSocialTwitter,FaLinkedinIn,AiOutlineInstagram,facebooksquare,} from '@fortawesome/free-solid-svg-icons'
*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
class Footer extends Component {

    render() {
        return (
            <>
                <div style={{ backgroundColor: '#ff7c24' }}>
                    <Container className="container">
                        <Row className="row py-4 d-flex align-items-center">
                            <Col className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0"> Conecte-se conosco nas redes sociais!</h6>
                            </Col >
                            <Col className="col-md-6 col-lg-7 text-center text-md-right">
                                <a className="fb-ic">
                                    <FaFacebookF />
                                </a>
                                <a className="tw-ic">
                                    <FaTwitter />
                                </a>
                                <a className="li-ic">
                                    <FaInstagram />
                                </a>
                                <a className="ins-ic">
                                    <FaLinkedin />
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="container text-center text-md-left mt-5">
                    <Row className="row mt-3 dark-grey-text">
                        <Col className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Company Ome</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p> É uma empresa multinacional petrolífera anglo-holandesa, que tem como principais atividades a refinação de petróleo e a extração de gás natural.</p>
                        </Col>
                        <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Produtos</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <a className="dark-grey-text" href="#!">Gasolina Adtivada</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Etanol Adtivado</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Diesel</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Gás Natural</a>
                            </p>
                        </Col>
                        <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">links Uteis</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <a className="dark-grey-text" href="#!">Sua conta</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Torne-se um afiliado</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Taxas de Envio</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Ajuda</a>
                            </p>
                        </Col>
                        <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contato</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
                            <p>
                                <i className="fas fa-home mr-3" /> Sao Paulo, Capão Redondo, SP</p>
                            <p>
                                <i className="fas fa-envelope mr-3" /> ome@gmail.com</p>
                            <p>
                                <i className="fas fa-phone mr-3" /> + 55 11 4002-8922</p>
                            <p>
                                <i className="fas fa-print mr-3" /> + 55 11 2002-0022</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
          <a className="dark-grey-text" href="https://ome.com.br"> ome.com.br</a>
                </div>


            </>
        )
    }
}
export default Footer;
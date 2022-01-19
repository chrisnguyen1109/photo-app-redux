import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import clsx from 'clsx';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className={clsx(styles.header__link, styles.header__title)}
                            href="https://github.com/chrisnguyen1999"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Chris Nguyen
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className={styles.header__link}
                            to="/photos"
                            activeClassName={styles['header__link--active']}
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;

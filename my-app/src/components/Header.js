import PropTypes from 'prop-types';
import logo from '../VSF.svg';
import curency from '../Frame 2.svg';
import Vector1 from '../Vector1.svg'
import Vector from '../Vector.svg'
import headerStyle from './headerStyle.module.css'



const Header = function () {
    return (<header className={headerStyle.header}>
        <div className={headerStyle.container}>
            <nav className={headerStyle.nav}>

                <ul className={headerStyle.navList}>
                    <li className={headerStyle.navListItem}>
                        <a className={headerStyle.navListLink && headerStyle.navListItemCurrent} href="./index.html">WOMEN</a>
                    </li>
                    <li className={headerStyle.navListItem}>
                        <a className={headerStyle.navListLink} href="portfolio.html">men</a>
                    </li>
                    <li className={headerStyle.navListItem}>
                        <a className={headerStyle.navListLink} href="2">kids</a>
                    </li>
                </ul>

            </nav>
            <img src={logo} className={headerStyle.logo} alt="logo" />

            <div className={headerStyle.actionsDiv}>
                <p>
                    <span className={headerStyle.curency}>$</span>

                    <img src={Vector1} className={headerStyle.curencyPick} alt="curency-pick" />

                </p>
                <a className={headerStyle.shopLink} href="http://google.com">
                    <img src={Vector} className={headerStyle.shopCart} alt="shop-cart" />
                </a>
            </div>
        </div>
    </header>
    )
}

// Header.propTypes = {
//     women: PropTypes.string,
//     men: PropTypes.string,
//     kids: PropTypes.string,
// }

export default Header 
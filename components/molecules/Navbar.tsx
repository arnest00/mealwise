/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBowlFood, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="cmp-nav">
    <ul className="cmp-nav__link-list">
      <li className="smaller text-align-center cmp-nav__list-item">
        <Link href="/recipes">
          <a className="cmp-nav__link">
            <FontAwesomeIcon icon={faBook} className="cmp-nav__link-icon" />
            Recipe Book
          </a>
        </Link>
      </li>
      <li className="smaller text-align-center cmp-nav__list-item">
        <Link href="/planner">
          <a className="cmp-nav__link">
            <FontAwesomeIcon icon={faBowlFood} className="cmp-nav__link-icon" />
            Meal Plan
          </a>
        </Link>
      </li>
      <li className="smaller text-align-center cmp-nav__list-item">
        <Link href="/shopping-list">
          <a className="cmp-nav__link">
            <FontAwesomeIcon icon={faShoppingCart} className="cmp-nav__link-icon" />
            Shopping List
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

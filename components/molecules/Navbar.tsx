import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__link-list">
        <li className="smaller text-align-center nav__list-item">
          <Link href="/recipes">
            <a className="nav__link">
              <FontAwesomeIcon icon={faBook} className="nav__link-icon" />
              Recipe Book
            </a>
          </Link>
        </li>
        <li className="smaller text-align-center nav__list-item">
          <Link href="/planner">
            <a className="nav__link">
              <FontAwesomeIcon icon={faBowlFood} className="nav__link-icon" />
              Meal Plan
            </a>
          </Link>
        </li>
        <li className="smaller text-align-center nav__list-item">
          <Link href="/shopping-list">
            <a className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} className="nav__link-icon" />
              Shopping List
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

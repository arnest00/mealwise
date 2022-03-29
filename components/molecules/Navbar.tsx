import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recipes">Recipe Book</Link>
        </li>
        <li>
          <Link href="/planner">Meal Plan</Link>
        </li>
        <li>
          <Link href="/shopping-list">Shopping List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

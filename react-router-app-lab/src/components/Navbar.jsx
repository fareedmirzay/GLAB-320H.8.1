import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
        <Link to='/'>CRYPTO PRICES</Link>
        <Link to='/currencies'>CURRENCIES</Link>
    </nav>

    );
  }




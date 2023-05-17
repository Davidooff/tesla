import "./header.scss";

type Props = { color: string };

function Header({ color }: Props) {
  return (
    <header style={{ color }}>
      <h1 className="logo">Logo</h1>
      <nav>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>Shop</li>
          <li>Account</li>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

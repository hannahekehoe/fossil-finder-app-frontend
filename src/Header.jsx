import { Signup } from "./Signup";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <a href="#">Link</a>
        <Signup />
      </nav>
    </header>
  );
}

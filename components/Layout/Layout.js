import Link from "next/link";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/budgets"}>Budgets</Link>
            </li>
            <li>
              <Link href={"/transactions"}>Transactions</Link>
            </li>
            <li>
              <Link href={"/sign-in"}>Sign-in</Link>
            </li>
            <li>
              <Link href={"/sign-up"}>Sign-up</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {props.children}
      </main>

      <footer>@felix.fedronic</footer>
    </Fragment>
  );
}

export default Layout;

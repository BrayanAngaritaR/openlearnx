import React from "react";
import {connect} from "frontity";
import Link from "./Link";

const Header = () => {
   return(
      <>
      <Link href="/">Products</Link>
      <Link href="/customers">Customers</Link>
      <Link href="/community">Community</Link>
      <Link href="/company">Company</Link>
      </>
   )
}

export default connect(Header)
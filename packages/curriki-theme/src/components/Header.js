import React from "react";
import {connect} from "frontity";
import Link from "./Link";

const Header = () => {
   return(
      <>
      <Link href="/">Home</Link>
      <Link href="/webinar">Webinars</Link>
      <Link href="/showcase">Showcases</Link>
      <Link href="/customers">Customers</Link>
      <Link href="/community">Community</Link>
      <Link href="/company">Company</Link>
      <Link href="/politica-privacidad/">Privacy</Link>
      </>
   )
}

export default connect(Header)
import React from "react"
import { Nav } from "react-bootstrap"
import sideBarStyles from "./SideBar.module.css"

export default ({ children }) => (
  <div className={sideBarStyles.div}>
    <Nav defaultActiveKey="/usluge/fasade" className="flex-column">
      <Nav.Link href="/usluge/fasade" className={sideBarStyles.navLink}>Fasade</Nav.Link>
      <Nav.Link href="/usluge/gipsarski-radovi" className={sideBarStyles.navLink}>Gipsarski Radovi</Nav.Link>
      <Nav.Link href="/usluge/hidroizolacija-krova" className={sideBarStyles.navLink}>Hidroizolacija krova</Nav.Link>
      <Nav.Link href="/usluge/keramika" className={sideBarStyles.navLink}>Keramika</Nav.Link>
      <Nav.Link href="/usluge/masinsko-gletovanje" className={sideBarStyles.navLink}>Mašinsko gletovanje</Nav.Link>
      <Nav.Link href="/usluge/masinsko-krecenje" className={sideBarStyles.navLink}>Mašinsko krečenje</Nav.Link>
      <Nav.Link href="/usluge/molersko-farbarski-radovi" className={sideBarStyles.navLink}>Molersko-farbarski radovi</Nav.Link>
      <Nav.Link href="/usluge/montaza-vodovodne-mreze-sanitarija" className={sideBarStyles.navLink}>Montaža vodovodne mreže i sanitarija</Nav.Link>
      <Nav.Link href="/usluge/vodoinstalaterski-radovi" className={sideBarStyles.navLink}>Vodoinstalaterski radovi</Nav.Link>
    </Nav>
  </div>
)

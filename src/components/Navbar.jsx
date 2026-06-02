import OverlayMenu from "./OverlayMenu";

export default function Navbar(){
  const[menuOpen , setMenu] = useState(false);
  const[visible , setVisible] = useState(true);
  return(
    <>
    <nav className={`fixed top-0 left-0 w-full flex itme-center justfy-between px-6 pt-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}>

    </nav>


    <OverlayMenu.jsx/>
    </>
  )
}
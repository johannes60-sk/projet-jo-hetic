import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,

  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import logo from '../assets/logo_jo.png'
import { Link } from "react-router-dom"

  

const Header = () => {
  return (
    <header className="w-screen fixed mb-5 shadow-md flex justify-between py-4 px-2 ">
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to='/'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Accueil</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to='/news'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>News</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to='/planning'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Planning</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Classement</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to='/athletes'>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Athlètes</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <Link to='/'>
            <div className="w-16 absolute top-0 left-[47%] z-10">
                <img src={logo} alt="logo" />
            </div>
        </Link>

        <NavigationMenu>
            <NavigationMenuList className=''>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Connexion</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inscription</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </header>
  )
}

export default Header
import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Drawer,Button} from "antd"
import {GiHamburgerMenu} from "react-icons/gi"
import "./navbarstyle.css"
import { Logo } from '../assets/images'
import {FaUserNinja} from "react-icons/fa"
import { auth } from '../FirebaseConfig'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [user,setUser]=useState()
    useEffect(() => {
        auth.onAuthStateChanged(function(users) {
            if (users) {
              setUser(users)
            } else {
                setUser(null)
            }
          });
    }, [user])

    const SignOut=()=>
    {
        auth.signOut()
    }

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={Logo} alt="SOUND PERCEPTION" /></Link>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="/products/guitars">GUITARRAS</Link></li>
                    <li><Link to="/products/drums">BATERÍAS</Link></li>
                    <li><Link to="/products/keyboards">TECLADOS</Link></li>
                    {
                        user ? <li>Hola {user.email} <button className="logout-button" onClick={SignOut}>Log Out</button></li>: <li><Link to="/login"><FaUserNinja color="yellow"/></Link></li>
                    }
                </ul> 
            </div>
            <div className="mobileVisible">
                <GiHamburgerMenu onClick={showDrawer} color="white" size="2em" className="icon_menu"/>
                <Drawer
                    title={<span translate="no">SOUND PERCEPTION</span>}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    headerStyle={{background:"yellow"}}
                    bodyStyle={{background:"black"}}
                >
                    <div className="navbar__menu">
                        {
                            user ? 
                            <div className="navbar__menu__item">
                                <Link to="/" onClick={onClose} style={{color:"yellow"}}>{user.email}</Link>
                                <button className="logout-button" onClick={SignOut}>Log Out</button>
                            </div>
                        : <div className="navbar__menu__item">
                            <Link to="/login" onClick={onClose} style={{color:"yellow"}}>CUENTA</Link>
                        </div>
                        }
                        <div className="navbar__menu__item">
                            <Link to="/products/guitars" onClick={onClose}>GUITARRAS</Link>
                        </div>
                        <div className="navbar__menu__item">
                            <Link to="/products/drums" onClick={onClose}>BATERÍAS</Link>
                        </div>
                        <div className="navbar__menu__item">
                            <Link to="/products/keyboards" onClick={onClose}>TECLADOS</Link>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar

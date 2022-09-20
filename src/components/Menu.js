import  '../styles/Menu.css'

function Menu({homeIsOpen, homeIsClose, aboutIsClose}) {
    if(homeIsOpen === true){
        return(
            <div className='kasa-menu'>
                <ul className='kasa-menu-ul'>
                    <li className='home underline' onClick={()=>{homeIsClose(true); aboutIsClose(false)}}>Accueil</li>
                    <li className='about' onClick={()=>{homeIsClose(false); aboutIsClose(true)}}>A Propos</li>
                </ul>
            </div>
        )
    }
    else{  
        return(
            <div className='kasa-menu'>
                <ul className='kasa-menu-ul'>
                    <li className='home' onClick={()=>{homeIsClose(true); aboutIsClose(false)}}>Accueil</li>
                    <li className='about underline' onClick={()=>{homeIsClose(false); aboutIsClose(true)}}>A Propos</li>
                </ul>
            </div>
        )
    }
}

export default Menu
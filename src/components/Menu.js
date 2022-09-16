import  '../styles/Menu.css'

function Menu({homeIsOpen, setIsClose}) {

    return(
        <div className='kasa-menu'>
            <ul className='kasa-menu-ul'>
                <li className='home' onClick={()=>setIsClose(true)}>Accueil</li>
                <li className='about' onClick={()=>setIsClose(false)}>A Propos</li>
            </ul>
        </div>
    )
}

export default Menu
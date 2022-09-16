import  '../styles/Banner.css'

function Banner({Img, h1Banner}) {
    return h1Banner? (
        // n'affiche pas le h2 pour la page "about"
        <div className='kasa-banner'>
            <img src={Img} alt ="Img" className='kasa-img'/>
            <div className='kasa-img-filter'></div>
        </div>
    ):
    (
        //affiche le h2 pour la page "about"
        <div>
            <div className='kasa-banner'>
                <img src={Img} alt ="Img" className='kasa-img'/>
                <div className='kasa-img-filter'></div>
                <h1 className='kasa-h1'>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner
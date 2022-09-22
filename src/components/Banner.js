import  '../styles/Banner.css'
import miniBanner  from '../assets/mini-img-banner-about.png'
import React from'react'
import Debounce from './Debounce'


function Banner({Img, h1Banner}) {
    //Recupère la taille d'ecran
    const [dimensions, setDimensions] = React.useState({ 
        width: window.innerWidth
      })
      React.useEffect(() => {
        const debouncedHandleResize = Debounce(function handleResize() {
          setDimensions({
            width: window.innerWidth
          })
        }, 1000)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        }
      })
      console.log(Img)
      //adapte l'image de la banner selon la taille d'ecran
      if(dimensions.width <= "575" && Img === "/static/media/img-banner-about.fce6fc3e9ed27433e9b0.png"){
        Img=miniBanner
      }
    return h1Banner? (
        // n'affiche pas le h2 pour la page "about"
        <div className='kasa-sectionBanner width-about'>
            <div className='kasa-sectionBanner-banner width-about'>
                <img src={Img} alt ="Img" className='kasa-sectionBanner-banner-img width-about'/>
                <div className='kasa-sectionBanner-banner-img-filter width-about'></div>
            </div>
        </div>
    ):
    (
        //affiche le h2 pour la page "Home"
        <div className='kasa-sectionBanner'>
            <div className='kasa-sectionBanner-banner'>
                <img src={Img} alt ="Img" className='kasa-sectionBanner-banner-img'/>
                <div className='kasa-sectionBanner-banner-img-filter'></div>
                <h1 className='kasa-sectionBanner-banner-h1'>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner
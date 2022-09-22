//function limitant le nombre de fois ou est calculé le resize de l'ecran
function Debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

export default Debounce
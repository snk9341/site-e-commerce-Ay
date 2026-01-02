import Logo from '/src/assets/logo-lumiere.png'
import Name from '/src/assets/name-lumiere.png'

export default function Header() {
    return (
         <>
      <header id='header-page'>
        <div id='header-div'>
          <div className="button-menu">
            <button>
              <span className="material-symbols-outlined">
                menu
              </span>
            </button> 
          </div>
          <img src={Name} alt="logo" />
          <div className="button-menu">
            <button>
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
    )
}
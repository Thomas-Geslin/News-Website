import Logo from '../assets/logo.png'

export default function Header() {
    /* Permet de récupérer la date du jour pour l'afficher */
    let date = new Date().toDateString();

    /* Header */
    return(<div className='header'>
                <p className='header__date'>{date}</p>
                <img src={Logo} alt="Logo du site d'actualité" className='header__logo' />
            </div>)
}


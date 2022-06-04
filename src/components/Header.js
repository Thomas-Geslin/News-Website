import Logo from '../assets/logo.png'

export default function Header() {
    let date = new Date().toDateString();

    return(<div className='header'>
                <p className='header__date'>{date}</p>
                <img src={Logo} alt="Logo du site d'actualité" className='header__logo' />
            </div>)
}


import '../../style/reset.scss';
import '../../style/common.scss';
import './Header.scss';

function Header () {
    return (
        <header className="header-wrapper large-container">
            <img src="/assets/vector/header/mitla-logo.svg" alt="logo" className="header-wrapper__logo" />
            <button className="burger-action">
                <img className="burger-action__logo" src="/assets/vector/header/burger.svg" alt="logo"  />
            </button>
            <div className="contacts">
                <a href="tel:+48 797 524 604" className="contacts__telephone">+48 797 524 604</a>
                <a href="https://google.com" className="link" target="_blank" rel="noreferrer">
                    <img src="/assets/vector/header/contacts/telegram_logo.svg" alt="telegram logo" className="link__logo" />
                </a>
                <a href="https://google.com" className="link" target="_blank" rel="noreferrer">
                    <img src="/assets/vector/header/contacts/whatsapp_logo.svg" alt="whatsapp logo" className="link__logo" />
                </a>
                <a href="tel:+48 797 524 605" className="link">
                    <img src="/assets/vector/header/contacts/telephone_logo.svg" alt="telephone logo" className="link__logo" />
                </a>
            </div>
            <div className="offers">
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Standard cleaning</p>
                </div>
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Cleaning after repair</p>
                </div>
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Minor repairs</p>
                </div>
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Office cleaning</p>
                </div>
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Transportation or Moving</p>
                </div>
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Disinfection</p>
                </div>
                <div className="service">
                    <div className="service__logo-container"></div>
                    <p className="service__title">Assistant housework</p>
                </div>
            </div>
            <a className="partners" href="https://www.bing.com/" >
                <img className="partners__logo" src="/assets/vector/header/partners.svg" alt="partners" />
                <p className="partners__title">Partners</p>
            </a>
            <div className="profile">
                <img src="/assets/vector/header/user.svg" alt="profile logo" className="profile__logo"/>
            </div>
        </header>
    );
}

export default Header;

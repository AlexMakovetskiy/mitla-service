import { MAILING_ADDRESS } from '../../utils/Footer';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Footer.scss';

function Footer () {
    return (
        <footer className="footer-wrapper large-container">
            <div className="footer-content medium-container">
                <div className="about">
                    <div className="requisites">
                        <img className="requisites__logo" src="/assets/vector/footer/bank/logo__footer.svg" alt="logo company" />
                        <p className="requisites__title">Milta Sp. z o.o., <br /> KRS 0000868230,<br />NIP: 6751738063,<br />REGON: 38745511400000
                        </p>
                        <div className="bank-cards">
                            <img className="bank-cards__logo" src="/assets/vector/footer/bank/visa_check.svg" alt="verified visa" />
                            <img className="bank-cards__logo" src="/assets/vector/footer/bank/visa_logo.svg" alt="visa" />
                            <img className="bank-cards__logo" src="/assets/vector/footer/bank/mastercard_logo.svg" alt="mastercard" />
                            <img className="bank-cards__logo" src="/assets/vector/footer/bank/mastercard_check.svg" alt="verified mastercard" />
                        </div>
                    </div>
                    <div className="company-info">
                        <h2 className="company-info__title">mitla</h2>
                        <hr className="company-info__line about-line" />
                        <a className="company-info__link about-link" href="/">About company</a>
                        <a className="company-info__link about-link" href="/">Questions and answers</a>
                        <a className="company-info__link about-link" href="/">Reviews</a>
                        <a className="company-info__link about-link" href="/">Cleaning services</a>
                        <a className="company-info__link about-link" href="/">Discounts and promotions</a>
                        <a className="company-info__link about-link" href="/">What are we cleaning?</a>
                        <a className="company-info__link about-link" href="/">Jobs</a>
                    </div>
                    <div className="services">
                        <h2 className="services__title">Services</h2>
                        <hr className="services__line about-line" />
                        <a className="services__link about-link" href="/">Cleaning of the apartment</a>
                        <a className="services__link about-link" href="/">Cleaning after renovation</a>
                        <a className="services__link about-link" href="/">House helper</a>
                        <a className="services__link about-link" href="/">Office cleaning</a>
                        <a className="services__link about-link" href="/">Transportation / Moving</a>
                        <a className="services__link about-link" href="/">Disinfection</a>
                        <a className="services__link about-link" href="/">Additional services</a>
                    </div>
                    <div className="promotions">
                        <h2 className="promotions__title">Discounts and promotions</h2>
                        <hr className="promotions__line about-line" />
                        <a className="promotions__link about-link" href="/">Corporate discounts and programs</a>
                        <a className="promotions__link about-link" href="/">Become our partner</a>
                        <a className="promotions__link about-link" href="/">Jobs</a>
                        <a className="promotions__link about-link" href="/">Prices for services</a>
                    </div>
                </div>
                <div className="contacts">
                    <a className="mailing-address" href={MAILING_ADDRESS} target="_blank" rel="noreferrer">
                        <img src="/assets/vector/footer/contacts/address.svg" alt="mailing address logo" className="mailing-address__logo" />
                        <address className="mailing-address__title">U Sluncové, 186 00 Praha 8-Invalidovna, Czech</address>
                    </a>
                    <img src="/assets/vector/footer/contacts/mail.svg" alt="mail logo" className="contacts__mail-logo" />
                    <a className="contacts__email" href="mailto:info@mitla.cz">info@mitla.cz</a>
                    <img src="/assets/vector/footer/contacts/phone.svg" alt="phone logo" className="contacts__phone-logo" />
                    <a className="contacts__phone-number" href="tel:+420797524604">+420 797 524 604</a>
                </div>
                <div className="documents">
                    <a href="https://european-union.europa.eu/live-work-study/public-contracts_en" className="documents__link" target="_blank" rel="noreferrer">Public contract</a>
                    <a href="https://policies.google.com/privacy?hl=en-US" className="documents__link" target="_blank" rel="noreferrer">Privacy policy</a>
                    <a href="https://commission.europa.eu/cookies-policy_en" className="documents__link" target="_blank" rel="noreferrer">Policy cookies</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
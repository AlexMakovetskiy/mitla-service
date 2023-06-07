import Title from '../title/Title';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Services.scss';

function Services () {
    return (
        <section className="services-container medium-container">
            <Title content="Our services" fontSize={48} fontWeight={700} lineHeight={60}/>
            <div className="services-content">
                <div className="service-container">
                    <img src="/assets/vector/services/cleaning.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Standard cleaning</p>
                </div>
                <div className="service-container">
                    <img src="/assets/vector/services/repair.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Cleaning after repair</p>
                </div>
                <div className="service-container">
                    <img src="/assets/vector/services/minor repairs.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Minor repairs</p>
                </div>
                <div className="service-container">
                    <img src="/assets/vector/services/office.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Office cleaning</p>
                </div>
                <div className="service-container">
                    <img src="/assets/vector/services/transportation.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Transportation or Moving</p>
                </div>
                <div className="service-container">
                    <img src="/assets/vector/services/disinfection.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Disinfection</p>
                </div>
                <div className="service-container">
                    <img src="/assets/vector/services/helper.svg" alt="service logo" className="service-container__logo" />
                    <p className="service-container__title">Assistant housework</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
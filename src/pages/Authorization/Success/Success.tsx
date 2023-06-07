import Title from '../../../components/title/Title';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './Success.scss';

function Success () {
    return (
        <div className="success-page-wrap medium-container">
            <Title content="Sign in process was successful!" fontSize="42" lineHeight="46" fontWeight="600" />
        </div>
    );
}

export default Success;
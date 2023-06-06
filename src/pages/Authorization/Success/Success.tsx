import React from 'react';

import Title from '../../../components/Title/Title';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './Success.scss';

class Success extends React.Component {
    render () {
        return (
            <div className="success-page-wrap medium-container">
                <Title content="Sign in process was successful!" fontSize="42" lineHeight="46" fontWeight="600" />
            </div>
        );
    }
}

export default Success;
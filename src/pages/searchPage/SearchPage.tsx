import { FC } from 'react';

import { ISearchPageProps } from '../../interfaces/pages/Main';
import Title from '../../ui/title/Title';

import '../../style/reset.scss';
import '../../style/common.scss';
import './SearchPage.scss';

const SearchPage: FC<ISearchPageProps> = (props) => {
    return (
        <div className="search-page-wrap medium-container">
            <Title content="Search" fontSize="42" lineHeight="46" fontWeight="600" />
            <Title content={`Results of  '${props.searchLine}'`}  fontSize="42" lineHeight="46" fontWeight="600" />
            <div data-testid="search-results-test">some reviews</div>
        </div>
    );
};

export default SearchPage;
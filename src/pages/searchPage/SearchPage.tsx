import Title from '../../components/title/Title';

import '../../style/reset.scss';
import '../../style/common.scss';
import './SearchPage.scss';

function SearchPage (props: { searchLine: string; }) {
    return (
        <div className="search-page-wrap medium-container">
            <Title content="Search" fontSize="42" lineHeight="46" fontWeight="600" />
            <Title content={`Results of  '${props.searchLine}'`}  fontSize="42" lineHeight="46" fontWeight="600" />
        </div>
    );
}

export default SearchPage;
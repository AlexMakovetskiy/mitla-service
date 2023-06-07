import Title from '../../components/title/Title';
import ReviewList from '../../components/reviewList/ReviewList';
import data from '../../response_1668708166439.json';

import '../../style/reset.scss';
import '../../style/common.scss';
import './SearchPage.scss';

const postsData = data.results;

function SearchPage (props: { searchLine: string; }) {
    return (
        <div className="search-page-wrap medium-container">
            <Title content="Search" fontSize="42" lineHeight="46" fontWeight="600" />
            <Title content={`Results of  '${props.searchLine}'`}  fontSize="42" lineHeight="46" fontWeight="600" />
            <ReviewList reviews={postsData} elementCount={postsData.length-1}/>
        </div>
    );
}

export default SearchPage;
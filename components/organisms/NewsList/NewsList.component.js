import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Loader from '../../atoms/Loader/Loader.component';
import StyledNewsList from './NewsList.style';
import Pagination from '../../molecules/Pagination/Pagination.component';

export default function NewsList(props) {
    const {news} = props;

    // history back handler
    useEffect(() => {
        window.onpopstate = function(e){
            if(e.state !== null) {
                fetchNewsPage(e.state.page);
            }
        }
    }, []);


    const hideNewsItem = (id) => {
        props.hideNewsItem(id);
    };

    const upvoteNewsItem = (newsItem) => {
        props.upvoteNewsItem(newsItem.objectID, newsItem.points ? newsItem.points + 1 : 1);
    };

    const fetchNewsPage = (page = 0) => {
        window.history.pushState({page}, `Hacker news: Page ${page + 1}`, `?page=${page}`);

        props.fetchNews({
            params: {
                page
            }
        });
    };

    if (news.hits.length === 0) {
        return <p className="no-results">Sorry, currently no results available for your request. Please try later.</p>
    }

    return (
        <StyledNewsList>
            { props.fullPageLoader && <Loader /> }
            <div className="header">
                <ul className="links">
                    <li className="logo-link">
                        <span className="logo"><img src="images/y18.gif" alt="Site Logo" /></span>
                    </li>
                    <li className="link">
                        <button onClick={() => fetchNewsPage(0)}>top</button>
                    </li>
                    <li className="link">
                        <button onClick={() => fetchNewsPage(0)}>new</button>
                    </li>
                </ul>
            </div>
            <ul className="newsitems">
            {
                news.hits.map(newsItem => (
                        <li className="newsitem" key={newsItem.objectID}>
                            <div className="title">{newsItem.title}</div>
                            <div className="additional-info">
                            {
                            `${newsItem._domain ? '('+newsItem._domain+') ' : ''}by ${newsItem.author} ${newsItem._createdOn}`
                            }                                
                            </div>
                            <div className="comments">
                                {newsItem.num_comments || 0}
                            </div>
                            <div className="upvotes">
                                <span className="upvote">{newsItem.points}</span>
                                <button className="icon" onClick={() => upvoteNewsItem(newsItem)}>upvote</button>
                            </div>
                            <div className="hide-info">
                                <button className="hide-link" onClick={() => hideNewsItem(newsItem.objectID)}>{" [ hide ] "}</button>
                            </div>
                        </li>
                    )
                )
            }
            </ul>
            <Pagination onPaginate={fetchNewsPage} totalPages={news.nbPages} currentPage={news.page} />
            <div className="footer">React SSR Demo</div>
        </StyledNewsList>
    );
}

NewsList.propTypes = {
    news: PropTypes.object,
    fetchNews: PropTypes.func.isRequired,
    hideNewsItem: PropTypes.func.isRequired,
    upvoteNewsItem: PropTypes.func.isRequired,
};
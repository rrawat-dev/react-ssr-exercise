import styled from 'styled-components';

export default styled.div`
    margin: 1rem auto;
    width: 200px;
    text-align: center;

    .pagination-cta {
        font-size: .9rem;
        padding: .4rem;

        &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
`;
import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';

export default styled.div`
    margin: 1rem auto;
    width: 200px;
    text-align: center;

    .pagination-info {
        font-size: .8rem;
        color: ${COLORS.orange};
    }

    .pagination-cta {
        font-size: .8rem;
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
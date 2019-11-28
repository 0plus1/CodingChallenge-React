import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    :active {
        text-decoration: none;
    }

    :visited {
        text-decoration: none;
    }
`;

export default StyledLink;

import Button from './clip-path/ClipPath';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Home () {

    return (
        <Main>
            <Link to='/clip-path'>
                <Button>Clip Path</Button>
            </Link>
            <Link to='/masonry'>
                <Button>Masonry</Button>
            </Link>
        </Main>
    )
}
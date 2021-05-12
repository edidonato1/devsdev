import {useState} from 'react';
import styled from 'styled-components';
import pineapple from '../../svg/pineapple.svg';

const ClipMain = styled.div`
    padding: 50px;
    h2 {    
        color: lightgray;
        margin-top: 50px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgContainer = styled.div`
    border: ${({showBorder}) => showBorder ? '2px solid gray' : '2px solid transparent'};
    margin: 40px;
`

const Img = styled.img.attrs(props => ({
    src: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
}))`
    width: 600px;
`

const Circle = styled(Img)`
    clip-path: circle(33%);
`

const Ellipse = styled(Img)`
    clip-path: ellipse(100% 100% at 0 100%);
`

const Polygon = styled(Img)`
    // top corner x | top corner y | right corner y | right corner x | right corner y | bottom corner x | bottom corner y | left corner x | left corner y
    clip-path: polygon(50% 10%, 90% 20%, 50% 100%, 0 50%);
`

const InsetCustom = styled(Img)`
    clip-path: inset(80px 20px 40px 0);
`
const Button = styled.button`
    background: aqua;
    border: 2px solid #fe0b3b;
    color: #fe0b3b;
    font-family: avenir;
    font-size: 20px;
    padding: 10px;

    &:hover {
        border: 2px solid white;
    }
`


export const ClipPath = () => {
    const [showBorder, setShowBorder] = useState(false);

    return (
        <ClipMain>
            <h2>original</h2>
            <ImgContainer showBorder={showBorder}>
                <Img />
            </ImgContainer>
            <h2>circle</h2>
            <ImgContainer showBorder={showBorder}>
                <Circle />
            </ImgContainer>
            <h2>ellipse</h2>
            <ImgContainer showBorder={showBorder}>
                <Ellipse />
            </ImgContainer>
            <h2>polygon</h2>
            <ImgContainer showBorder={showBorder}>
                <Polygon />
            </ImgContainer>
            <h2>inset custom</h2>
            <ImgContainer showBorder={showBorder}>
                <InsetCustom />
            </ImgContainer>
            <Button onClick={() => setShowBorder(!showBorder)}>{!showBorder ? 'show borders' : 'hide borders'}</Button>
        </ClipMain>
    )
}

export default ClipPath;
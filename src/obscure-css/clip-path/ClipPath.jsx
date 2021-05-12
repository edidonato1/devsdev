import {useState} from 'react';
import styled from 'styled-components';


const ClipMain = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {    
        color: lightgray;
        margin-top: 150px;
        font-weight: 400;
        font-family: courier;
        &:first-of-type {
            margin-top: 50px;
        }
    }
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
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    &:hover {   
        clip-path: polygon(50% 10%, 90% 20%, 50% 100%, 0 50%);
    }
    transition: 1s;
`

const InsetCustom = styled(Img)`
    clip-path: inset(80px 20px 40px 0);
`

const Leaf = styled(Img)`
    clip-path: path('M256 203C150 309 150 309 44 203 15 174 15 126 44 97 73 68 121 68 150 97 179 68 227 68 256 97 285 126 285 174 256 203')
`


const ShapeContainer = styled.div`
    width: 800px;
    text-align: justify;
    color: lightgray;
    font-family: menlo;
    font-size: 17px;
    margin: 40px;

`
const ShapeOutside = styled(Img)`
    float: left;
    shape-outside: polygon(50% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    margin: 20px;
`

const Button = styled.button`
    background: aqua;
    border: 2px solid #fe0b3b;
    color: #fe0b3b;
    font-family: avenir;
    font-size: 20px;
    padding: 10px;
    margin: 50px;

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
            <h2>clip-path: circle(33%);</h2>
            <ImgContainer showBorder={showBorder}>
                <Circle />
            </ImgContainer>
            <h2>clip-path: ellipse(100% 100% at 0 100%);</h2>
            <ImgContainer showBorder={showBorder}>
                <Ellipse />
            </ImgContainer>
            <h2>clip-path: polygon(50% 10%, 90% 20%, 50% 100%, 0 50%);</h2>
            <ImgContainer showBorder={showBorder}>
                <Polygon />
            </ImgContainer>
            <h2>clip-path: inset(80px 20px 40px 0);</h2>
            <ImgContainer showBorder={showBorder}>
                <InsetCustom />
            </ImgContainer>
            <h2>clip-path: svg</h2>
            <ImgContainer showBorder={showBorder}>
                <Leaf />
            </ImgContainer>
            <Button onClick={() => setShowBorder(!showBorder)}>{!showBorder ? 'show borders' : 'hide borders'}</Button>
            <h2>shape-outside</h2>
            <ShapeContainer>
                <ShapeOutside />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </ShapeContainer>
        </ClipMain>
    )
}

export default ClipPath;
import styled from 'styled-components';


const MasonryMain = styled.div`
    padding: 50px;

    h2 {    
        color: lightgray;
        margin-top: 50px;
    }
`
const MasonryColumn = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: masonry;
    width: 600px;
    margin: 0 auto;
    border: 2px solid lightgray;
    padding: 20px;


    
                                    // auto-flow
    /* masonry-auto-flow: next; */

                                    // align-tracks


     align-tracks: end, start, end;
    // align-tracks: space-evenly;
    // align-tracks: space-around;
    
                                    // align-tracks multiple values


                                    // feature queries
     @supports not (grid-template-rows: masonry) {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-evenly;
         //gap: 20px;
         column-gap: 40px;
         div {
             block-size: 4em !important;
             width: 30%;
         }
     }

`
const MasonryRow = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: masonry;                 
    grid-template-rows: repeat(3, 100px);
    width: 600px;
    margin: 0 auto;
    border: 2px solid lightgray;
    padding: 20px;
    /* justify-tracks: end; */
    // justify-tracks: center;
`  

const MasonrySpan = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: masonry;
    width: 600px;
    margin: 0 auto;
    border: 2px solid lightgray;
    padding: 20px;
`
const Block = styled.div`
    background: ${props => props.firstHalf ? '#fe0b3b' : 'aqua'};
    box-shadow: 2px 2px 2px 0px gray;
    font-family: avenir;
    color: ${props => props.firstHalf ? 'aqua' : '#fe0b3b'};
    font-weight: 600;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`


const GridMasonry = () => {
    

    return (
        <MasonryMain> 
        <h2>Masonry Column</h2>
            <MasonryColumn>
                <Block  firstHalf style={{blockSize: '4em'}}>1</Block>
                <Block  firstHalf style={{blockSize: '6em'}}>2</Block>
                <Block  firstHalf style={{blockSize: '3.6em'}}>3</Block>
                <Block  firstHalf style={{blockSize: '9em'}}>4</Block>
                <Block  firstHalf style={{blockSize: '4.2em'}}>5</Block>
                <Block  style={{blockSize: '6em'}}>6</Block>
                <Block  style={{blockSize: '8.5em'}}>7</Block>
                <Block  style={{blockSize: '2em'}}>8</Block>
                <Block  style={{blockSize: '7em'}}>9</Block>
                <Block  style={{blockSize: '4.8em'}}>10</Block>
            </MasonryColumn>
        <h2>Masonry Row</h2>
            <MasonryRow>
                <Block  firstHalf style={{inlineSize: '4em'}}>1</Block>
                <Block  firstHalf style={{inlineSize: '6em'}}>2</Block>
                <Block  firstHalf style={{inlineSize: '3.6em'}}>3</Block>
                <Block  firstHalf style={{inlineSize: '9em'}}>4</Block>
                <Block  firstHalf style={{inlineSize: '4.2em'}}>5</Block>
                <Block  style={{inlineSize: '6em'}}>6</Block>
                <Block  style={{inlineSize: '8.5em'}}>7</Block>
                <Block  style={{inlineSize: '2em'}}>8</Block>
                <Block  style={{inlineSize: '7em'}}>9</Block>
                <Block  style={{inlineSize: '4.8em'}}>10</Block>
            </MasonryRow>
        <h2>Masonry Span</h2>
            <MasonrySpan>
                <Block  firstHalf style={{blockSize: '4em'}}>1</Block>
                <Block  firstHalf style={{blockSize: '6em', gridColumnEnd: 'span 2'}}>2</Block>
                <Block  firstHalf style={{blockSize: '3.6em'}}>3</Block>
                <Block  firstHalf style={{blockSize: '9em'}}>4</Block>
                <Block  firstHalf style={{blockSize: '4.2em' , gridColumnEnd: 'span 2'}}>5</Block>
                <Block  style={{blockSize: '6em'}}>6</Block>
                <Block  style={{blockSize: '8.5em'}}>7</Block>
                <Block  style={{blockSize: '2em', gridColumnEnd: 'span 2'}}>8</Block>
                <Block  style={{blockSize: '7em'}}>9</Block>
                <Block  style={{blockSize: '4.8em', gridColumnEnd: 'span 2'}}>10</Block>
            </MasonrySpan>
        </MasonryMain>
    )
}

export default GridMasonry;
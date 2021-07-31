import * as WP from './WordPriceCounter.styles';

export interface WordPriceCounterProps {
    wordsCount: number;
    pricePerWord: number;
}

function WordPriceCounter(props: WordPriceCounterProps){

    if(props.wordsCount < 0){
        throw Error('A quantidade de palavras não pode ser negativa');
    }

    return <WP.Wrapper>
       <WP.WordCounter> {props.wordsCount} PALAVRAS</WP.WordCounter>
       <WP.PricePreview>{(props.wordsCount * props.pricePerWord).toLocaleString('pt-br', {
           style: 'currency',
           currency: 'BRL',
           maximumFractionDigits: 2
       })}</WP.PricePreview>
    </WP.Wrapper>
}


export default WordPriceCounter;
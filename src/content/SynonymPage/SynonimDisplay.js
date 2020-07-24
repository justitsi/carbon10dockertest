import React, { Component } from 'react';
import ItemList from '../../components/ItemList';

const headers = [
    {
      key: "word",
      header: "Word",
    },
    {
      key: "score",
      header: "Score (/100000)",
    }
  ];


class WordDisplay extends React.Component {
    state = {
        loading : true
    }

    getWordList (){
        console.log("getting synonyms for word "+this.props.word)
        fetch('https://api.datamuse.com/words?ml='+this.props.word)
        .then(res => res.json())
        .then((data) => {
            this.setState ({
                word : this.props.word,
                rows : data.map((dataPoint, index)=>({
                    id:index,
                    word:dataPoint.word,
                    score:dataPoint.score,
                })),
                loading:false
            });
        }).then(()=>{
            return 
        })
        .catch(console.log)
    }

    componentDidMount() {
        this.getWordList();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.word!==nextProps.word){
            this.getWordList();
        }
        if (this.state.loading === false) return true;
            else return false
    }

    render (){
        if (this.state.loading === true) return <p>Loading...</p>;
        return (
            <> 
                <h3>Showing synonyms for {this.state.word}</h3>
                <ItemList
                    headers = {headers}
                    rows = {this.state.rows}
                />
            </>
        );
    }
}
export default WordDisplay;
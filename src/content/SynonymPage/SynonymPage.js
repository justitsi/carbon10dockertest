import React from 'react';
import WordDisplay from './SynonimDisplay';
import WordPicker from './WordPicker'



class SynonymPage extends React.Component {
  constructor(props) {
    super(props)

    this.setWord = this.setWord.bind(this)
  }
  
  
  state = {
    word : ""
  }
  setWord (newWord){
    this.setState ({
      word:newWord
    })
  }

  render (){
    return (
      <div>
        <WordPicker setWordFunction = {this.setWord}/>
        <WordDisplay word = {this.state.word}/>
      </div>
    );
  }
};
export default SynonymPage;

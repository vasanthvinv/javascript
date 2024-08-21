import _ from 'lodash';
class MyDictionary {
    constructor(word, mean) {
      this.word = word;
      this.mean = mean;
      this.dictionary = {}; 
    }
  
    displayDictionary() {         
      console.log(this.dictionary);
    }

    addNewMeaning(word,newMean){
      if (this.dictionary[word]){
        this.dictionary[word] =[...this.dictionary[word],newMean];
      }else {
        this.dictionary[word] = newMean;
      }
    }
  
    searchWord(searchWord){
  const allMean = _.flattenDeep(Object.entries(this.dictionary));
  const news = this.dictionary

  if(this.dictionary[searchWord]){
    console.log({[searchWord]:this.dictionary[searchWord]});
  }
   
    else if (allMean.includes(searchWord)){
      const gopi = _.map(this.dictionary,(meanings,word) => [word,...meanings]  )
      for(let element of gopi){
        if(element.includes(searchWord)){
          const answer = {};
          answer[searchWord] = _.without(element,searchWord)
          console.log(answer)
        }
      }

    }
     console.log('word not defined' );
    }
  }
  
  const myObject = new MyDictionary();
  myObject.addNewMeaning('fruit',['banana']);
  myObject.addNewMeaning('fruit','apple');
  myObject.addNewMeaning('vegtable',['tomato']);
  myObject.addNewMeaning('vegtable','onion');
  myObject.searchWord('banana');
  // myObject.displayDictionary();




import { Answer } from '../models/Answer'
import { Question } from '../models/Question'
import { scan } from './UtilService';
import {connectDB} from '../DB';

// QNA Unit
interface IQna {
  type: typeof Question | typeof Answer;
  text : string;
}

export const initQna = async (input: IQna) => {
  /*
  Creates Answer or question unit
    Scans DB for existing Units
    Terminates with Initial conditions

  Runs with making the requested input into the db 
  */ 
  await connectDB();
  console.log('Initiating QNA Initiation to DB');

  if (input.type === Question){
    // Logic for Initiating questions
    console.log(`Input text for the entry part : ${input.text}`);
    let qnaDoc = await scan(Question, 'question_text', input.text);
    console.log(`Question DOC scan : ${qnaDoc}`)
    if (!qnaDoc){
      qnaDoc = new Question({question_text: input.text.trim()});
      await qnaDoc.save();
      console.log(`QNA Unit Created with given ID Information : ${qnaDoc._id}`)
      return qnaDoc._id;
    }else {
      console.log(`Existing QNA unit found in DB scan: ${qnaDoc._id}`)
      return 0;
    }

  }else if (input.type === Answer){
    // Logic for the answer Initialization
    console.log('Making answer unit');
  }else{
    console.log('Not the Question or Answer is initiated');
  }
}

var test: IQna = {
  type : Question,
  text : 'Hello I am New Question which we need to address into the main DB right ? '
}

console.log('Initiating information unit plugger');
var resp = initQna(test);
console.log(`Response with initiating information : ${resp}`)


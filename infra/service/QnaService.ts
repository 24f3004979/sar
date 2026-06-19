import { Answer } from '../models/Answer'
import { Question } from '../models/Question'
import { scan } from './UtilService';

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
  console.log('Initiating QNA Initiation to DB');

  if (input.type === Question){
    // Logic for Initiating questions
    console.log("Making Question Entry");

    let questionDoc = await scan(Question, 'question_text', input.text);
    if (!questionDoc){
      questionDoc = new Question({question_text: input.text.trim()});
      await questionDoc.save();
      return questionDoc._id;
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
  input_text : "I am question"
}

console.log('Initiating information unit plugger');
var resp = initQna(test);
console.log(`Response with initiating information : ${resp}`)


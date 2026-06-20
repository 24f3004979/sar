import { Question } from '../models/Question';
import { InfoUnit } from '../models/Info'
import { Answer } from '../models/Answer'
import { connectDB } from '../DB';


interface IInitInput {
  question_text : string;
  answer_text: string;
}

const scan = async (model: Model<any>, Feild:string, value:string)=>{
  return await model.findOne({
    [Feild]: value.trim()
  });
};


export const initInfoUnit = async (input: IInitInput) => {
  // INFO: Adding Scan at Question and Answer Initialization unit no need for refrences
  console.log("Running DB unit")
  await connectDB();

  const { question_text, answer_text } = input;
  
  // Process Answer Unit
  let answerDoc = await scan(Answer, 'answer_text', answer_text);
  // try except based structure required
  if (!answerDoc) {
    answerDoc = new Answer({answer_text: answer_text.trim()});
    await answerDoc.save();
    console.log(`Created Answer Unit : ${answerDoc._id}`)
  }else{
    console.log(`Terminating with existing Answer unit :)`)
  }

  // Question Unit part
  let questionDoc = await scan(Question, 'question_text', question_text);
  if (!questionDoc){
    questionDoc = new Question({question_text:question_text.trim()});
    await questionDoc.save();
    console.log(`Question Object Initiated with ${questionDoc._id}`);
  }

  // Info unit creation logic 
  const newInfoUnit = new InfoUnit({
    question_id : questionDoc._id,
    answer_id : answerDoc._id
  });

  const saved = await newInfoUnit.save();
  console.log('Stiching questions and answers into DB')
  return saved;
}

// Testing String
var i:IInitInput = {
  'question_text' : 'Question is what ?',
  'answer_text' : 'Answer Text is the answer texting'
};

initInfoUnit(i);

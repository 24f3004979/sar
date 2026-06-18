import { Schema, model, Document } from 'mongoose';

export interface IQuestion extends Document {
  _id : Types.ObjectId; // Native Id
  question_text : string;
}

const QuestionSchema = new Schema<IQuestion>({
  question_text : {type: String, required: true}
});

export const Question = model<IQuestion>('Question', QuestionSchema);


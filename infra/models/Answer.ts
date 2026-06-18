import { Schema, model, Document } from 'mongoose';

// Interface for answer flow status
export interface IAnswer extends Documents {
  _id : Types.ObjectId;  // Native id generations
  answer_text : string;
}

// Initiating Mongo schema for data structure
const AnswerSchema = new Schema<IAnswer>({
  answer_text : { type:String, required:true }
});

export const Answer = model<IAnswer>('Answer', AnswerSchema);


import { Schema, model, Document } from 'mongoose';

export interface IInfoUnit extends Document {
  question_id : Types.ObjectId;
  answer_id : Types.ObjectId;
}
// INFO: Not adding time stamp for now | Excluded answer selection and quetion 

const InfoUnitSchema = new Schema<IInfoUnit>({
  question_id : {type: Schema.Types.ObjectId, ref:'Question'},
  answer_id : {type: Schema.Types.ObjectId, ref:'Answer'}
});

export const InfoUnit = model<IInfoUnit>('InfoUnit', InfoUnitSchema)


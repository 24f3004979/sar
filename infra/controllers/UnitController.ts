import { Request, Response } from 'express';
import { initInfoUnit } from '../service/UnitService';

export const initDataWorkFlow = async (req:Request, res:Response): Promise<void> => {
  try{
    const {question_text, answer_text } = req.body;

    if (!question_text || !answer_text ){
      res.status(400).json({'success':false, message:'Mising required information'});
      return;
    }
    const result = await  initInfoUnit({
      question_text, answer_text
    });
    res.status(201).json({
      success:true, data: result
    });
  }catch(error){
    res.status(500).json({
      success:false, error:(error as Error).message
    });
  }
};

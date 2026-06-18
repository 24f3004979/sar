//  MONGO DB CONNECTION UNIT

import mongoose from  'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const connStr = 'mongodb://localhost:27017/mern_quiz_db';
    
    const connection = await mongoose.connect(connStr);
  } catch (error){
    console.error(`Data Base Initiation Error : ${error as Error}`)
    process.exit(1);
  }
};




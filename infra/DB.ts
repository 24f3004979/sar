//  MONGO DB CONNECTION UNIT

import mongoose from  'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const connStr = 'mongodb://127.0.0.1:27017/sar';
    
    const connection = await mongoose.connect(connStr);
  } catch (error){
    console.error(`Data Base Initiation Error : ${error as Error}`)
    process.exit(1);
  }
};




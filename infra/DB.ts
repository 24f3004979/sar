//  MONGO DB CONNECTION UNIT

import mongoose from  'mongoose';

/*
DB connection with mongodb is not working
  Failing with unexpected crash without any traces

Needs diagnosis for the given crash and get to know why even the containers are not working

*/

export const connectDB = async (): Promise<void> => {
  try {
    const connStr = 'mongodb://127.0.0.1:27017/sar';
    
    const connection = await mongoose.connect(connStr);
  } catch (error){
    console.error(`Data Base Initiation Error : ${error as Error}`)
    process.exit(1);
  }
};




//  MONGO DB CONNECTION UNIT

import mongoose from  'mongoose';


export const connectDB = async (): Promise<void> => {
  try {
    const dbName = "my-new-mongodb"; 
    const uri = `mongodb://mongo:1234@127.0.0.1:27017/${dbName}?authSource=admin`;

    const connection = await mongoose.connect(uri);
    console.log(`Connection Initiation Ouutput : ${connection}`)
    return;
  } catch (error){
    console.error(`Data Base Initiation Error : ${error as Error}`)
    process.exit(1);
  }
};


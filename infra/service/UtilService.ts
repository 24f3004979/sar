
// Scan DB for existing Questions for early termination for request
export const scan = async (model: Model<any>, Feild:string, value:string)=>{
  return await model.findOne({
    // BUG: Making trim error with this module
    [Feild]: value.trim()
  });
};



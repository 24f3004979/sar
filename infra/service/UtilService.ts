
// Scan DB for existing Questions for early termination for request
export const scan = async (model: Model<any>, Feild:string, value:string)=>{
  console.log(`Utility function with given stuff : ${Feild} || ${value}`)
  return await model.findOne({
    [Feild]: value.trim()
  });
};



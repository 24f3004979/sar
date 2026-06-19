# Back-end Initialization flow
1. Initiate npm for package flow 
  `npm init`
2. Dependency Installation for backend
  `typescript | @types/node @types/express ts-node`
ts node compilation tools for running application
3. Initiate with the ts based notations for safe build

Using tsx in place of ts-node why ?
What is the new import schema and whats wrong with the imports error ?

Making mongod running its depended into avx based cpu for its process what it really means ? 

Ubuntu Armours blocking mongod permisions to run into the machine led the mongo to crash after it starts into the free kubuntu environment, 
Making us to choose containers
    Q What containers are and how they work ?
Installed podman container for the mongod to run with now we would connect the application DB unit into the data base part

Kubuntu kernels dont allow mongod to run, their is compatibility issue with the kubuntu kernel and mongodb

FIX : Downgraded mongo version and using lower version of MongoDB along with following credential command for log into the DB shell

podman exec -it my-new-mongodb mongosh -u mongo -p 1234 --authenticationDatabase admin

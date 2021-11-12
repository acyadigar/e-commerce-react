import mongoose from 'mongoose'

async function main() {
  await mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/new_local_project",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  console.log("Mongo connected!");
}

main();

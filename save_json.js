const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

// require('dotenv').config()
// console.log(process.env)


const save = async (favNumber) => {
  console.log("saving");
  await s3.putObject({
    Body: JSON.stringify(favNumber, null, 2),
    Bucket: 'cyclic-misty-tutu-deer-eu-west-1',
    Key: "number.json",
  }).promise()
};

module.exports = { save };
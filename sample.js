// load AWS SDK
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

// set the region to Oregon
AWS.config.update({region:'us-west-2'});

// create EC2 service object
const ec2 = new AWS.EC2();

// empty params object, needed to pass into describeSubnets function
const params = {};

// ec2.describeRegions(params, function(err, data) {
//     if (err) {
//         console.log("Error", err);
//       } else {
//         console.log("Regions: ", data.Regions);
//       } 
//   });

// ec2.describeVpcEndpointServices(params, function(err, data) {
// if (err) {
//     console.log(err, err.stack); // an error occurred
// } else {
//     console.log(data);           // successful response
// }  
// });

ec2.describeSubnets(params, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    console.log(data);           // successful response
  }  
});
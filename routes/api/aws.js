const express = require('express');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

// create EC2 service object
const ec2 = new AWS.EC2();

// Gets All regions
router.get('/listRegions', (req, res) => {
  ec2.describeRegions({}, function(err, data) {
    if (err) {
        console.log("Error", err);
      } else {
        region = data.Regions.map((item) => item.RegionName)
        res.json(region)
      } 
  });
});

// Gets All VPCS
router.get('/listVPCs', (req, res) => {
  const ec2 = new AWS.EC2({region:req.query.region});
  ec2.describeVpcEndpointServices({}, function(err, data) {
    if (err) {
        console.log("Error", err);
      } else {
        res.json(data.ServiceNames)
      } 
  });
});

// Gets All Subnets
router.get('/listSubnets', (req, res) => {
  AWS.config.update({region:req.query.region});
  const ec2 = new AWS.EC2();
  ec2.describeSubnets({}, function(err, data) {
    if (err) {
        console.log("Error", err);
      } else {
        subnets = data.Subnets.map((item) => item.AvailabilityZone)
        res.json(subnets)
      } 
  });
});



module.exports = router;

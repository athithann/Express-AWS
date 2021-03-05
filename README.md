## Quick Start

# Install dependencies
npm install

# Serve on localhost:5000
npm run dev

# Enter the AWS Key and AWS Secret in the .env File

# Region is defaulted to 'us-west-1'. Feel free to change that.

# Gets All regions
http://localhost:5000/aws/listRegions

# Gets All VPCS for given region
http://localhost:5000/aws/listVPCs?region=us-west-1

# Gets All Subnets for given region
http://localhost:5000/aws/listSubnets?region=us-west-2

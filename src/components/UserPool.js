import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_Kr6idyRu1",
    ClientId: "297n8dlphkaq3st1hujpabaogv"
};

export default new CognitoUserPool(poolData);
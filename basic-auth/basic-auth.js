const crypto = require('crypto');
const hashing = crypto.createHash('sha1');

function sha1Encode(data) {
    // hashing
    hashing.update(data);
    return hashing.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    const authorization = request.headers.authorization;

    const encoded = authorization.replace('Basic ', '');

    const decoded = Buffer.from(encoded, 'base64').toString('utf8');

    const authentication = decoded.split(':');

    //login => node, pwd => password 
    const isValid = authentication[0] === 'node' && authentication[1] === sha1Encode('password');

    const error_401  = 401; //varibale pour resoudre le probleme de "no magic number : 401"
    isValid ? next() : response.sendStatus(error_401);                                              //isValid ? next() : response.sendStatus(401);

}


/*
const crypto = require('crypto');

function sha1Encode(data) {
    const sha1Encode = crypto.createHash('sha1');
    sha1Encode.update(data);
    return sha1Encode.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;

    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString("utf8");
    
    const authentification = decoded.split(':');

    const isValid = authentification[0] === 'node' && authentification[1] === sha1Encode('password');
    
    const HTTP_CODE_UNAUTHORIZED = 401; 
    isValid ? next() : response.sendStatus(HTTP_CODE_UNAUTHORIZED);
}
*/
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
    const isValid = authentication[0] === sha1Encode('node') && authentication[1] === sha1Encode('password');

    const error_401  = 401; //varibale pour resoudre le probleme de "no magic number : 401"
    isValid ? next() : response.sendStatus(error_401);                                           //isValid ? next() : response.sendStatus(401);

}
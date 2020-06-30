const boom = require('@hapi/boom');

function validate(data, schema) {
    const { error } = schema.validate(data)
    return error;
}

function validationHandler(schema, check = 'body') {
    return (request, response, next) => {
        const error = validate(request[check], schema);
        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationHandler;
import boom from '@hapi/boom';
function validate() {
    return false;
}
function validationHandler(schema, check = 'body') {
    return (request, response, next) => {
        const error = validate(request[check], schema);
        error ? next(boom.badRequest(error)) : next();
    }
}

export default validationHandler;
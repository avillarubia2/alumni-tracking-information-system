const validatePieces = require('joi-piece-validator')
const joiAccountSchema = require('atis-commons')
let _accountSchema = addConfirmPasswordValidation()

export default (obj, setter, name, value) => {
    const { error: validationError } = validatePieces(_accountSchema, { [name]: value })
    if (validationError)
        setter({ ...obj, [name]: validationError.toString() })
    else {
        const _obj = { ...obj }
        delete _obj[name]
        setter(_obj)
    }
}

function addConfirmPasswordValidation() {
    let _accountSchema = joiAccountSchema()
    _accountSchema['confirm_password'] = _accountSchema.password
    return _accountSchema
}

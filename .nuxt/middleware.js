const middleware = {}

middleware['clearValidationErrors'] = require('..\\middleware\\clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['setLevelForNewLoan'] = require('..\\middleware\\setLevelForNewLoan.js')
middleware['setLevelForNewLoan'] = middleware['setLevelForNewLoan'].default || middleware['setLevelForNewLoan']

export default middleware

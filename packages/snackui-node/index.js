process.env.SNACKUI_COMPILE_PROCESS = 1
process.env.IS_STATIC = 'true'
const all = require('./dist')
process.env.IS_STATIC = undefined
Object.assign(exports, all)

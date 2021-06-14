const { join, resolve } = require('path')
module.exports = path => {
  let stbr = path || './'
  let defAliases = '.'
  const main = { '.': resolve(path || './') }
  while (!(resolve(main[defAliases]) === '/')) main[defAliases += '.'] = resolve(stbr = join(stbr, '../'))
  return main
}

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

/**Owner number**/
global.owner = [
  ['6287719424487', '️<Owner>'],
  ['6281368176386', '<Admin>'],
  ['6282226078871', '<Moderator>'],
  ['6283189579654', '<>', true ]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.girlfren = [] // Your gf/pacar

//Api website
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zenz: 'https://zenzapis.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zenzapis.xyz': 'BagasPrdn'
}

// Sticker WM
global.packname = '𝖲𝖺𝖼𝗁𝗂-𝖡𝗈𝗍𝗓𝗓 ไำ'
global.author = '𝙰𝚐𝚞𝚗𝚐𝚡 𝚃𝚣𝚢𝚢 ไำ'
global.wm = "Adventure pitur"
global.multiplier = 69 // The higher, The harder levelup

//
global.eror = 'eror bodo😆'
global.wait = 'Process...'
global.render = 'wait render'
global.webs = 'blm punya web awkawk'//Your Website
global.logo = "https://telegra.ph/file/3f876a993a94f0c6e4ced.jpg"//Your logo
global.gcwangsaf = "https://chat.whatsapp.com/ITjd9jsIfBAK5byfdb2cxj"//Link Group whatsapp

//Donasi
global.saweria = "–"// website saweria.co
global.dana = ["–"]
global.pulsa = ["087719424487"]//pulsa here
global.trakteer = "–"//Link url https://
global.paypal = "–"//paypal email
global.gopay = "–"//Numver for Payment digital Gopay Gojek


//Rpg
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      strength: '🦹‍♀️',
      mana: '🪄',
      stamina: '⚡',
      agility: '🤸‍♂️',
      intelligence: '🧠',
      exp: '✉️',
      pointxp: '📧',
      money: '💵',
      potion: '🥤',
      gems: '🍀',
      crystal: '🔮',
      diamond: '💎',
      darkcrystal: '♠️',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '🗡️',
      arc: '🏹',
      bow: '🏹',
      magicwand: '⚕️',
      keyiron: '🗝️',
      keygold: '🔑',
      knife: '🔪',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      cow: '🐄',
      bull: '🐃',
      tiger: '🐅',
      lion: '🦁',
      giraffe: '🦒',
      elephant: '🐘',
      snake: '🐍',
      dragon: '🐉',
      chicken: '🐓',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

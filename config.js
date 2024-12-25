const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VV2Y6rOBT8F7+Svglhj9TSEEgCIR2yb6PRyIABh7Wx2dLKv4/o9FX3w9w7PW+WseuUq+oc3kCaYYIs1ILRG8gLXEGKuiVtcwRGYFz6PipAD3iQQjACosG0xvFsIX16GRtVgydcOdc5sg1n5jzcGQuxOcTscEcHL8/g3gN56cTY/Q0gvI6VYH89XUV/DTXGpwH7Wq/lBSvGjrqfKoW6V6hq5+No/wzuHSLEBU6DSR6iBBUwtlC7grj4Hv16qufKK+co9XVFhF1fkU+Hxof0MFdu6eIUV0EjGdPb+DoIvkf/ykJJ3h9f9WnqCZU0uVgvIdrPpAgjsqhLtXCEbCHl/Wu4ftAnOEiRZ3oopZi239bdVodDRE+z1yNezK9ZqV0wUlayeFiOx1W+S8MNMkwHwfogf4+4IZJTIitnFDHl/na1oRU1lXkuOH6xfqnmSQ6JsWzNsR6YX4mvip9Zif6P7snEaqRFRdZTiFvRxeYJzdubq/W3t2HMibJf56x3mcvG/pux6Yt7jaGXBBZH7bTrmzW8Ok6o2lBcaCHmq9cGNU7c+uo2+qQPaVn8jqV3tqSZvs9Oi3xAa7QQzUu0TXw9fjmHRu3o/Ww7LTxYD1/7Wy9YFDKM5wMhacrNrW+F2WU3hIpGZqXVMKYhztG8NRZa8Pz+ogi1pgdG7L0HChRgQgtIcZZ2e7LQA9CrtsgtEH1XF4g7qNTittlPrIMreKkntZDdHLcC3vhbK+Vb07wOsbg5XIJn0AN5kbmIEOQZmNCsaF8QITBABIz+/KsHUtTQh29dNY7tAR8XhO7TMo8z6P009edH6LpZmdJtm7pat0AFGA0+txGlOA1IJ2OZwsINcYW0EFICRj6MCbr3gIcq7KIOD/iac3axpK0DGIt/N/WEcDq/7iiHWfo4ogyHosRJ/JMsyoMnXuGkJ0dmh0/Q4RTZlTl5KEigB/BHy3R3fungJqT24Jxu4Z4y9UG/zdpDczjHvL+fvLvwkB4VyAMjWpSoBxzoRmW+yyKU/gY3i5tZaVj8bUUPWc4sRH6nq0qeZcH5C+7DUjB6+xxTWuZ1eOpmdTa46Rn0QPKeQNy9fMjxMjtgRUXh+MFIEP8gP+pOSZjnP1JEO+AP1bsrHqIQxwSMgGbalJhEn8zLMXHIbKZGgaoFKvh06WfaH3EiKWHRkJHPeJXw13lDVreamSLpqOe8YpCQYfr2ph/oY05+/heQbnAemFPTilPTs1Mkc5F1NeJLwthZlFR8Ns19i2DLEsTqZLeiakgkETR3vLQL7cBL0S5153u7te3thmGObrxsdGcnaOvnrtojLV+LTRhF3BSzYZHYR1LaZkplvLyxaHJLl9n6NuWDw5Lf8OdwvjEcR6eoFOL1y2Qtx9VYkCbMAF+nyuU1zl2zfNG2ubuOeHX96MP3ORB/zF/83iJvH9nyMXofZynsPPpPd77mfHDvfQH5mJC/yNLYmUvLE62qmXkVSrN1HV2WV+GpZAMRrTaS6VfVLfJ5tfb64H7/qwfyGFI/K5Lud5l6RYY90AMxJFT9bNUdThChMMnBiJU4geUlUVbu/wA3YXAl3wcAAA==",
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


# TKJ-MULTI-DEVICE-BOT


This Script is for everyone, original base by
 [`AzamiBot`](https://github.com/clicknetcafe/azamibot-md-multi)
 [`BochilGaming`](https://github.com/BochilGaming/games-wabot-md)

This is Script of WhatsApp multi device, working with [`@whiskeysockets/baileys`](https://github.com/whiskeysockets/baileys)

#### SUPORT THIS
| **TERMUX** | ✅ |
| **VPS/RDP** | ✅ |
| **PANEL** | ✅ |
| **OKTETO** | ⌛ |

### HOW TO INSTALL IN TERMUX?
```bash
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ pkg install libwebp -y
$ git clone https://github.com/clicknetcafe/azamibot-md-multi
$ cd azamibot-md-multi
$ npm i 
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```sh
$ node .
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Click on `link a device`)
   NOTE : use node `node . --pairing` if you want to link device with phone number
4. Now your bot is ready to rock n roll.

#### If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```
---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & GAMES-WABOT ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/clicknetcafe/azamibot-md-multi
cd azamibot-md-multi
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/clicknetcafe/azamibot-md-multi
cd azamibot-md-multi
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--pairing`

Link a device with phone number

### `--mobile`

Link a device with mobile captcha (prons to ban)

### `--self`

Activate self mode (Ignores other except bot and rowner)

### `--pconly`

If that chat not from private bot, bot will ignore (except premium user)

### `--gconly`

If that chat not from group, bot will ignore (except premium user)

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--autocleartmp`

If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--db`

pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

---------

## FAQ
### Why my plugins not working in this multi-device?
      
> Please cek syntax error on your plugins. and maybe your script still using CJS
> This multi-device script use ESM and CJS [(legacy code)](https://github.com/clicknetcafe/azamibot-md-multi/tree/main) not support yet. Learn more about [ESM](https://nodejs.org/api/esm.html)

### How to delete session?

> You can delete folder `sessions` or run command ```rm -rf sessions```

### Why i can't scan qr code?

> if your error like this ```(node:7016) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_ARG_TYPE]: The "key" argument must be of type string or an instance of Buffer, TypedArray, DataView, or KeyObject. Received undefined``` you can use [multi-device branch](https://github.com/clicknetcafe/azamibot-md-multi/tree/multi-device)

### How to change owner number?

> You can set in `config.js`, on global.mods. and use command .addrealowner when bot running.
```js
global.mods = ['6282337245566']
```
> First argument on array is number like `6282337245566`, you can fill second argument onward with other numbers


### How to read folder in folder plugins as plugin file?
> change option `'recursiveRead'` to `'true'` in file main.js in `loadPluginFiles` function


---------

### want to contribute?
1. fork this repository
2. Change/edit/create what you want. for example you can add features, fix bug, etc
3. **test** before making a pull req!!
4. make a pull req!
5. if your pull req is already in **acc/merge**, you can delete your branch or you can create pull req again :)

---------


### Thanks To 
**Allah SWT**,

**Orang Tua**,

**Semua yang selalu mendukung**


#### Special Thanks to
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)
[![DikaArdnt](https://github.com/DikaArdnt.png?size=100)](https://github.com/DikaArdnt)
[![AzamiBot](https://github.com/clicknetcafe.png?size=100)](https://github.com/clicknetcafe)

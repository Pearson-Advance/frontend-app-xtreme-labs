# Fronend App Xtreme Labs

## Introduction

This MFE application for Xtreme Labs Project offers an extensive range of features and a user-friendly interface for any given course with the Xtreme Labs feature enabled.

## Cloning and Startup

### Node setup

It's important to note that this MFE is build with Node v16, so we shall ensure that that's the proper and only version instaled in our workspace.
To do so please execute the following commands in your Ubuntu's terminal

``` bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 16

# verifies the right Node.js version is in the environment
node -v # should print 'v16.20.2'

# verifies the right NPM version is in the environment
npm -v # should print '8.19.4'
```

Once this was done, please excute `nvm ls` it shall show an output like this (please be aware of the version pointed by an arrow)

``` bash
xps-9315 ~/home $ nvm ls
->     v16.20.2
default -> 16 (-> v16.20.2)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.20.2) (default)
stable -> 16.20 (-> v16.20.2) (default)
lts/* -> lts/iron (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.3 (-> N/A)
lts/gallium -> v16.20.2
lts/hydrogen -> v18.20.3 (-> N/A)
lts/iron -> v20.15.0 (-> N/A)
```

If there's any other prior or further version installed, please remove it with `nvm uninstall vXX.XX.X`

### Project setup

Clone this repo into the `/src` folder of your devstack installation, once it has been cloned, follow the next command:

`cd frontend-app-xtreme-labs && npm install`

It would place you onto the repository folder and install de dependencies nedeed for the project to run. With that just execute
`npm start`. There shall be a frontend running in http://localhost:2004/

## Testing

- Jest test: `npm test`
- Lint test: `npm run lint`

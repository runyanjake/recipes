# Recipes

A recipe site for things I make.

Built with docusaurus (https://docusaurus.io/).

### First Time Setup

1. Install nvm, node>=18

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

`nvm list-remote`

`nvm install 18.12.0`

2. Create Project using classic theme

`npx create-docusaurus@latest recipes classic`

### Running the Project

1. Clone, then run `npm install` from the recipes directory.

2. Run locally with nvm

`cd recipes && npm run start`

3. Or, run as a container with docker-compose

`docker compose down && docker system prune -af && docker-compose build && docker-compose up -d && docker logs -f recipes`


### Resources

`nvm install 18.12.0`

`https://medium.com/geekculture/how-to-install-node-js-by-nvm-61addf4ab1ba`


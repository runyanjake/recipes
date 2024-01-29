FROM node:latest

WORKDIR /srv/

# Copy folder structure.
COPY ./recipes/. /srv/recipes/

EXPOSE 3000

WORKDIR /srv/recipes

# Run Docusaurus with npx.
CMD [ "npx", "docusaurus", "start", "-h0.0.0.0" ]


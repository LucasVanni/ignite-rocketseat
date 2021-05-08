# Informado a imagem que será utilizada para a aplicação.
FROM node:latest

# # Definimos o diretório que nossas informações estejam contidas.
WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
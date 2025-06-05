#imagem base
FROM node:24-alpine3.21

#diretorio do container
WORKDIR /usr/src/app

#copia arquivos das dependencias
COPY package*.json ./

#instala as dependencias
RUN npm install

#COPIA O PROJETO
COPY . .

#build do projeto
RUN npm run build

#expõe a porta q ta usando 
EXPOSE 3000

#comando de execucao
CMD ["npm", "run", "start:prod"]
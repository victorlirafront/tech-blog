FROM node:20

WORKDIR /src

RUN echo "Iniciando o build do projeto Next.js no Docker - Etapa de instalação das dependências"

COPY ./.npmrc ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]

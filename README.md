# Desenvolvimento WEB Backend com Node.js, NestJS e Prisma

## Projeto da UNIVALE - Universidade Vale do Rio Doce

**Aluno:** Jeiel Jedson Leão Alves

---

## Etapa 2: Criando um Projeto Backend com Node.js, NestJS e Prisma

### Parte 1: Configuração Inicial do Projeto

1. **Criando o Diretório do Projeto**
   - Crie um diretório para o projeto chamado `api_etapa_02` e abra-o no VSCode.

2. **Configurações do VSCode**
   - Instale as seguintes extensões no VSCode:
     - Dracula Official (tema)
     - Material Icon Theme (ícones)
     - ENV (manipulação de arquivos .env)
     - Prisma e Prisma Insider (extensões para o Prisma)
     - Prettier (formatação de código)

3. **Instalação do NestJS**
   - Abra o terminal no VSCode e instale o NestJS globalmente com o comando:
     ```
     npm i -g @nestjs/cli
     ```
   - Crie um novo projeto NestJS com o comando:
     ```
     nest new crud-nest-prisma
     ```
   - Escolha `NPM` como o gerenciador de pacotes.

4. **Configuração do Projeto**
   - Delete os arquivos desnecessários gerados na pasta `src`:
     - `app.controller.spec.ts`
     - `app.controller.ts`
     - `app.service.ts`

### Parte 2: Integrando Prisma no Projeto

1. **Instalação do Prisma**
   - Instale o Prisma como uma dependência de desenvolvimento:
     ```
     npm install prisma --save-dev
     ```
   - Inicialize o Prisma no projeto:
     ```
     npx prisma init
     ```

2. **Configuração do Prisma**
   - Altere o arquivo `schema.prisma` para usar o SQLite como o provedor:
     ```prisma
     datasource db {
       provider = "sqlite"
       url      = "file:./dev.db"
     }
     ```
   - Atualize o arquivo `.env` com a URL do banco de dados SQLite:
     ```
     DATABASE_URL="file:./dev.db"
     ```

3. **Criação do Modelo e Migração**
   - Adicione um modelo `Usuario` no `schema.prisma` e execute a migração:
     ```
     npx prisma migrate dev
     ```
   - Após a migração, uma pasta `migrations` será criada contendo o arquivo `migration.sql`.

4. **Gerando Recursos no NestJS**
   - Crie os recursos (Module, Service e Controller) para o módulo `usuário`:
     ```
     nest g resource modules/usuário
     ```
   - Escolha `REST API` e selecione `Não` para os testes.

5. **Implementação do CRUD**
   - Implemente as funções de CRUD no `usuario.service.ts` e `usuario.controller.ts` para realizar as operações de `CREATE`, `READ`, `UPDATE`, e `DELETE` utilizando as funções do Prisma (`create`, `findMany`, `findUnique`, `update`, `delete`).

6. **Testando o Projeto**
   - Teste as rotas usando o Insomnia ou outra ferramenta de sua escolha.
   - Verifique os registros diretamente no banco de dados SQLite usando o explorador integrado do VSCode.

## Compilar e rodar o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rodar testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Conclusão

O projeto está configurado e implementado com sucesso, utilizando Node.js, NestJS e Prisma para um CRUD completo. Siga as instruções acima para garantir que todas as etapas sejam replicadas corretamente.

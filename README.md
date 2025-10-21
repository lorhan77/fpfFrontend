# Frontend

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:
- Node.js (versão 22 ou superior)
- npm ou yarn
- Angular CLI (opcional, mas recomendado)

Para instalar o Angular CLI globalmente:
```bash
npm install -g @angular/cli
```

## Passo a passo para rodar a aplicação

### 1. Instalar as dependências

Abra o terminal na pasta do frontend e execute:

```bash
npm install
```

ou, se estiver usando yarn:

```bash
yarn install
```


### 2. Executar a aplicação em modo de desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

ou:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:4200`.

## Problemas comuns

- **Porta já em uso**: Use `ng serve --port 4300` para usar outra porta.
- **Erros de dependências**: Tente deletar a pasta `node_modules` e o arquivo `package-lock.json`, depois execute `npm install` novamente.
- **Erro no Angular CLI**: Certifique-se de que o Angular CLI está instalado globalmente.

## Suporte

Para mais informações, consulte a documentação do projeto ou entre em contato comigo :).



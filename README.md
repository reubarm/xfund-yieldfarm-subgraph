# unix-yieldfarm-subgraph

Requires graph-cli v0.18.0, using node v12.16.2 via nvm

```bash
npm install -g @graphprotocol/graph-cli@0.18.0
graph auth https://api.thegraph.com/deploy/ [GRAPH_API_KEY]
```

```bash
yarn run prepare:rinkeby
yarn run codegen
yarn run build
yarn run deploy
```

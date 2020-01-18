# Project: coffee-cup
## Setup guide
``` bash
# install all modules
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g @vue/cli
cnpm install
# build only
npm run build
# run unit test
npm run test:unit
# build and start server at 8102 
npm run dev
# Lints and fixes files
npm run lint
```

## Runbook
> http://localhost:8102/#/login

## Pitfall & Learning
### 1. Axios
Import axios & vue-axios
``` js
<!-- in main.ts -->
<!-- to registry axios in Vue prototype -->
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
```
Disable the property checking against "this"
``` properties
<!-- tsconfig.json -->
"noImplicitThis": false,
```
Example of fetch local Json  
Be aware that all static file should be moved to /public folder in Vue 2+  
They can access without "public/" prefix in URL.
``` ts
this.axios({
    method: 'get',
    url: 'http://localhost:8102/left_menu.json',
    })
    .then((resp) => {
        this.menuGrp = resp.data;
    })
    .catch((err) => {
        console.log(err);
    });
```

### 2. Git
* add colorful log alias
``` bash
git config --global alias.ll "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

# Reference
See [Configuration Reference](https://cli.vuejs.org/config/).

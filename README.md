# nvmrc-check

1) Add [.nvmrc](https://github.com/creationix/nvm#nvmrc) file to project root with version number:
```
8.0
```

2) Add to package.json as script
```
scripts {
  "postinstall": "nvmrc-check --node $(cat .nvmrc)"
}
```

3) If current node version doesn't match, script fails.

Note: Use [nvm trick](https://github.com/creationix/nvm#zsh) with [zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH) to call nvm use automatically whenever you enter a directory that contains an .nvmrc file. 

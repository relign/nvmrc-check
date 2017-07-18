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

Note: Automatically switch node version based on `.nvmrc` with your `.bash_profile` (adapted from [Node Version Manager README](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)):

```
cd () { builtin cd "$@" && chpwd; }
pushd () { builtin pushd "$@" && chpwd; }
popd () { builtin popd "$@" && chpwd; }
chpwd () {

  NODE_VERSION="$(nvm version)"
  NVMRC_PATH="$(nvm_find_nvmrc)"

  if [ -f "$NVMRC_PATH" ]; then
    NVMRC_NODE_VERSION="$(nvm version $(cat "$NVMRC_PATH"))"

    if [ "$NVMRC_NODE_VERSION" = "N/A" ]; then
      nvm install
    elif [ "$NVMRC_NODE_VERSION" != "$NODE_VERSION" ]; then
      nvm use 
    fi  
  elif [ "$NODE_VERSION" != $(nvm version default) ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi  
}
chpwd;
```

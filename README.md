# Webpack TypeScript Issue

Two issues produce similar problems with the presented setup:

- https://github.com/babel/babel/issues/9763
- https://github.com/webpack/webpack/issues/8656

Adding resolutions as proposed in both threads does not solve the problem.

## Reproducing The Problem

```sh
yarn
yarn build

# you should see an output like this:
# ERROR in ./src/person.ts 8:9
# Module parse failed: Export 'Person' is not defined (8:9)
# You may need an appropriate loader to handle this file type.
# | }
# |
# > export { Person, createPerson };
#  @ ./src/index.ts 1:0-40 2:12-24
# error Command failed with exit code 2.
```

The issue is not present in version `"4.28.0"` of webpack.

```sh
yarn webpack-downgrade
yarn build
# This will successfully complete the build
```

You can use `yarn webpack-upgrade` to go back to the initial version.

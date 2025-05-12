# Learn it yourself

Learn it yourself is a website that teaches you how to code in the python programming language. This website is built using [Docusaurus](https://docusaurus.io/). If you want to learn more about Docusaurus, check out their [website](https://docusaurus.io/).

## Contributing

If you would like to contribute to this website, the primary area that needs to be updated is the section on data structures. Please reach out to us on [Discord](https://discord.gg/gbFTKGhPA8) if you have any questions.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

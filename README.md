# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Production install

- Add the following to `cicipu.stuartmcgill.conf`:
```
ProxyPass / http://localhost:3000/
ProxyPassReverse / http://localhost:3000/
```

Installation using [pm2](https://pm2.keymetrics.io/):

```bash
# Install pm2 globally
npm install pm2 -g

# Install and build website
npm install
npm run build

# This should start the app and also handle restarts
pm2 start
```

See also https://nuxt.com/docs/getting-started/deployment#pm2.

## Development

Install the dependencies:

```bash
# npm
npm ci && npm run build
```

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

To deploy a release to production, do the following on a development machine:

```bash
# Build
npm ci && npm run build

# Copy the files to the server
rsync -avz --delete -e "ssh -p <PORT>" .output/ <USERNAME>@stuartmcgill.org:~/domains/cicipu.stuartmcgill.org/cicipu-main/.output
```

Now on the production server:

```bash
# NPM build
npm ci

# Reload the app
pm2 reload cicipu-main
````

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

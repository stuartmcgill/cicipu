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
```

### Option 1 - build on the server

This could run out of memory though.

```bash
# Install and build website in-situ
npm ci
npm run build
npm install --omit=dev
```

### Option 2 - build locally (preferred)

```bash
# Install and build website locally
npm ci
npm run build

# Copy the files to the server
rsync -avz --delete -e "ssh -p <PORT>" .output/ <USERNAME>@stuartmcgill.org:~/domains/cicipu.stuartmcgill.org/cicipu-main/.output
```

Then on the server:

```bash
npm install --omit=dev
```

### Restart the app

```bash
# This should start the app and also handle restarts
pm2 reload cicipu-main
```

See also https://nuxt.com/docs/getting-started/deployment#pm2.

## Development

Start the database:

```shell
docker-compose up -d
```

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

## Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

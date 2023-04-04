# Cloudflare-Email-Worker
Source code for Meower's Cloudflare email worker using mailchannels.

## Deploying to Cloudflare Workers
To deploy to Cloudflare Workers you'll need to create a new worker within your Cloudflare account using the code inside of `index.ts`, add a DKIM key to your domain, and setup a few environment variables on the worker.

Using Cloudflare Workers to send emails will allow you to send up to 100k emails per day for free!


Required environment variables:

`AUTH_TOKEN` - Used for authenticating HTTP requests

`DOMAIN` - The domain you want to send emails from

`DKIM_SELECTOR` - Your domain's DKIM selector

`DKIM_KEY` - Your domain's private DKIM key to be able to sign emails
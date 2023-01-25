# Cloudflare-Email-Worker
Source code for Meower's Cloudflare email worker using mailchannels.

## Deploying to Cloudflare Workers
To deploy to Cloudflare Workers you'll need to create a new worker within your Cloudflare account using the code inside of `index.ts`, add a DKIM key to your domain, and setup a few environment variables on the worker.

Using Cloudflare Workers to send emails will allow you to send up to 100k emails per day for free!


Required environment variables:

`AUTH_TOKEN` - Used for authenticating email requests

`DKIM_KEY` - Your domain's private DKIM key to be able to sign emails

`SENDER_EMAIL` - Which email to send emails from (e.g. "no-reply@meower.org")

`SENDER_NAME` - Which name to send emails from (e.g. "Meower")

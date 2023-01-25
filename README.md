# Cloudflare-Email-Worker
Source code for Meower's Cloudflare email worker using mailchannels.

# Deploying to Cloudflare Workers
To deploy to Cloudflare workers you'll need to create a new worker within your Cloudflare account, add a DKIM key to your domain, and setup a few environment variables on the worker.

Required environment variables:
`AUTH_TOKEN` - Used for authenticating email requests
`DKIM_KEY` - Your domain's private DKIM key to be able to sign emails
`SENDER_EMAIL` - Which email to send emails from (e.g. "no-reply@meower.org")
`SENDER_NAME` - Which name to send emails from (e.g. "Meower")

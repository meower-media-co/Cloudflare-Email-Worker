// index.ts
var send_default = {
    async fetch(request, env) {
      // check token
      if (!request.headers.get("X-Auth-Token") || request.headers.get("X-Auth-Token") !== env.AUTH_TOKEN) {
        return new Response(JSON.stringify({
          error: "Token invalid"
        }), {
          status: 403,
          statusText: "Unauthorized"
        });
      }
  
      // extract request body
      var body = await request.json()
  
      // make request to mailchannels API
      return fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: body.email, name: body.name }],
              dkim_domain: "meower.org",
              dkim_selector: "mailchannels",
              dkim_private_key: env.DKIM_KEY
            },
          ],
          from: {
            email: env.SENDER_EMAIL,
            name: env.SENDER_NAME
          },
          subject: body.subject,
          content: [
            {
              type: "text/html",
              value: body.body
            },
          ],
        }),
      });
    }
  };
  export {
    send_default as default
  };
  //# sourceMappingURL=index.js.map
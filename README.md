# API Server

The API server is a rest api that allows users to send API requests to routes to act as a mock API server.

The data held by the server is held in memory.

## Setup

- Clone the repo
- Run `npm i` to install the dependencies
- Create an env file by running: `cp .env.example .env`
- Open the newly created `.env` file and fill in the fields

## Env variables

- `GITHUB_ORG`
  - The name of the organisation to check users against. For example, `boolean-uk`
- `GITHUB_TOKEN`
  - The personal access token for the server to use when sending requests.
  - The token requires the "Organization: Read access to members" permission to successful work

## Development

Run the server in development mode with the following command:

```bash
npm run dev
```

## Debugging

1. Set a breakpoint anywhere
2. Either compile the app or watch (`npm run build` or `npm run watch`)
3. Start the server in debug mode (launch `Debug API server`)

## Deploy

Make sure you have logged in to `fly` via cli (`fly auth login`) and then run `npm run deploy`.

You can verify the status of the online app at `https://boolean-api-server.fly.dev/` and `https://fly.io/dashboard/boolean-uk`.

1. Make sure you are authenticated against this app; run `fly auth login` if needed.
2. If needed, add or update the environment variables by running `fly secrets set VAR_NAME=xxx`
3. Deploy with `npm run deploy`

## Teacher Routes

Teachers can reset all data at any time by making a DELETE request to `https://boolean-api-server.fly.dev/GITHUB_USERNAME/admin/teacher`, replacing GITHUB_USERNAME with your actual github username.

The list of teachers with access is stored in the teacher middleware.

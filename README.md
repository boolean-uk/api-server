# API Server

The API server is a rest api that allows users to send API requests to routes to act as a mock API server.

The data held by the server is held in memory

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

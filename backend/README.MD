# Backend

## Environment Variables
The following environment variables must be defined to run the backend server. A `.env` file can be placed in the `backend` directory for developer environments. See the `env.sample` file to see the expected format
- `DB_URL` - The URL to the MongoDB database
- `PORT` - The port where the server will be listening from
- `JWT_SECRET` - The secret to be used to create JWT tokens
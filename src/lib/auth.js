import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_MONGO_DB_CONNECTION_URL);
const db = client.db('Fitlog-User-Data');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
     socialProviders: {
        google: { 
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID, 
            clientSecret: process.env.AUTH_GOOGLE_SECRET_ID, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID , 
            clientSecret: process.env.GITHUB_CLIENT_SECRET , 
        }, 
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});
import dotenv from 'dotenv';
import pathModule from 'path';

//add path
dotenv.config({ path: pathModule.join(process.cwd(), '.env') });

//export port and database url
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_token_expires_in: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  DO_SPACES_ENDPOINT: process.env.DO_SPACES_ENDPOINT,
  DO_SPACES_ACCESS_KEY: process.env.DO_SPACES_ACCESS_KEY,
  DO_SPACES_SECRET_KEY: process.env.DO_SPACES_SECRET_KEY,
  DO_SPACES_BUCKET: process.env.DO_SPACES_BUCKET,
  NODE_ENV: process.env.NODE_ENV,
};

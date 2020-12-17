// Extend NodeJS ProcessEnv to include custom .env variables
declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string | undefined;
    PORT: number | undefined;
  }
}

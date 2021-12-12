namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    EMAIL_SERVER: string
    EMAIL_FROM: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    DB_USER: string
    DB_PASSWORD: string
    DATABASE_URL: string
    SECRET: string
    EMAIL_SERVER_USER: string
    EMAIL_SERVER_HOST: string
    EMAIL_SERVER_PORT: string
    EMAIL_SERVER_PASSWORD: string
    EMAIL_FROM: string
  }
}

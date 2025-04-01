// Define the type of the environment variables.
declare interface Env {
  readonly NG_APP_CART: boolean;
  readonly NODE_ENV: string;
  // Custom variables
  readonly NG_APP_ENV: string;
  readonly NG_APP_API_URL: string;
}

// 1. Use import.meta.env.YOUR_ENV_VAR in your code. (conventional)
declare interface ImportMeta {
  readonly env: Env;
}
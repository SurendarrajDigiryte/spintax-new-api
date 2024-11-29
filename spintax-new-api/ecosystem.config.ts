// import { App } from 'pm2';

// const ecosystem: { apps: Array<App> } = {
//   apps: [
//     {
//       name: "my-app",              // Application name
//       script: "./dist/app.js",     // The entry point of your application (update to compiled JS)
//       instances: "max",             // Number of instances to run (use 'max' for all CPU cores)
//       exec_mode: "cluster",         // Cluster mode for load balancing
//       watch: true,                  // Enable watch & restart on file changes
//       env: {
//         NODE_ENV: "development",    // Default environment variables
//         PORT: 3000,
//         SECRET_KEY: "devSecretKey"
//       },
//       env_production: {
//         NODE_ENV: "production",     // Environment variables for production
//         PORT: 8080,
//         SECRET_KEY: "prodSecretKey"
//       },
//       log_file: "./logs/combined.log",  // Log file location
//       error_file: "./logs/err.log",     // Error log file
//       out_file: "./logs/out.log",       // Standard output log file
//       time: true                        // Append time to log entries
//     }
//   ]
// };

// export default ecosystem;

// Not required for now, so commented it out
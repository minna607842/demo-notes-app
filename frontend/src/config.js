const config = {
  SENTRY_DSN: "https://5d49876ff81f4a22802a5fefb55804c8@o991634.ingest.sentry.io/5948668",
  STRIPE_KEY: "pk_test_51JUmVkHbbIo0AU1SG01f9M9EYnYPnFrGrYyKtunQXhF3RaapOn2qFJVFTBvipJnGmO7t2iCrJQv6Eq87SmYIBvmP00yjaavRFw",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
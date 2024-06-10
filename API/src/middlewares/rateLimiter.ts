import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: "Too many requests from this token, please try again later"
});

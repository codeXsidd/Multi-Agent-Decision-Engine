import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { requestLogger } from '@middleware/logger';
import { errorHandler } from '@middleware/errorHandler';

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Request logging
app.use(requestLogger);

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error Handling (Must be last)
app.use(errorHandler);

export default app;

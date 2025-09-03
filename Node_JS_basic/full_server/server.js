import express from 'express';
import routes from './routes/index.js';

const app = express();

// Use our defined routes
app.use('/', routes);

// Start server on port 1245
app.listen(1245);

export default app;

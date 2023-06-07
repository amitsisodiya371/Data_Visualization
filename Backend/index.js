const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(cors());

// Include routes
app.use('/api/data', dataRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

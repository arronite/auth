const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse application/json
app.use(express.json());
require("./routes/api/userRoutes")(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const activitiesRoutes = require("./routes/activities");
const bookingsRoutes = require("./routes/bookings");
const searchRoutes = require("./routes/search");

const app = express();
app.use(cors());
app.use(express.json());

const openapiSpec = YAML.load("./src/openapi.yaml");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));

app.use("/activities", activitiesRoutes);
app.use("/bookings", bookingsRoutes);
app.use("/search", searchRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

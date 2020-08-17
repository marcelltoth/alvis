import "./LoadEnv"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";

// Start the server
const port = Number(process.env.PORT || 8000);
app.listen(port, () => {
  if (process.env.NODE_ENV === "development") {
    logger.info("Express server started on port: http://localhost:" + port);
  }

  if (process.env.NODE_ENV === "production") {
    logger.info("Express server started on port: " + port);
  }
});

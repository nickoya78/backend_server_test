import app from './app';
import "dotenv/config"

// const PORT = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Server running on http://localhost:8080`));

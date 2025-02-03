import app from "./app";
import 'dotenv'

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`Server rodando na porta ${PORT}`))
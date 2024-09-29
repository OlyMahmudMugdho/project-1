import app from './app';
import { Server } from 'http';

const PORT =  8000;

let server: Server;

async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`);
    });
}

bootstrap();



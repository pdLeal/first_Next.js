import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Conectou lekau');
        })

        connection.on('error', (err) => {
            console.log('Conectou não: ' + err);
            process.exit();
        })

    } catch (error) {
        console.warn('Deu ruim!');
        console.log(error)
    }
}
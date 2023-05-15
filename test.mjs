export async function processRequest(event) {
    console.log(`Received an event! ${JSON.stringify(event)}`);

    return {
        env: process.env,
    };
}

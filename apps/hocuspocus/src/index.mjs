import { Hocuspocus } from "@hocuspocus/server";

// Configure the server …
const server = new Hocuspocus({
    port: 1234,
    async onAuthenticate(data) {
        const { token } = data;

        // Example test if a user is authenticated with a token passed from the client
        if (token !== "caedman_token") {
            throw new Error("Not authorized!");
        }

        // You can set contextual data to use it in other hooks
        return {
            user: {
                id: 1234,
                name: "John",
            },
        };
    },
});

// … and run it!
server.listen();

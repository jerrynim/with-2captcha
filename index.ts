import express from "express";
import Client from "@infosimples/node_two_captcha";

const app = express();

app.get("/captcha", (req, res) => {
    const client = new Client("your_key", {
        timeout: 60000,
        polling: 5000,
        throwErrors: false,
    });

    client
        .decodeRecaptchaV2({
            googlekey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
            pageurl: "https://www.google.com/recaptcha/api2/demo",
        })
        .then((response) => {
            console.log("catcha solved");
            console.log(response?.text);
        })
        .catch((e) => {
            console.log(e.message);
        });

    return;
});

app.listen(4000, () => {
    console.log("server started at http://localhost:4000🚀");
});

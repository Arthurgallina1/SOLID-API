const userService = require("../services/userService");
const constants = require("../constants");

module.exports = {
    async signup(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await userService.createUser(req.body);

            response.status = 201;
            response.message = constants.userMessage.SIGNEUP_SUCCESS;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller", error);
        }
        return res.json(response);
    },

    async login(req, res) {
        let response = { ...constants.defaultServerResponse };
        try {
            const resFromService = await userService.authUser(req.body);

            response.status = 201;
            response.message = constants.userMessage.SIGNEUP_SUCCESS;
            response.body = resFromService;
        } catch (error) {
            response.message = error.message;
            console.log("Error on Product Controller", error);
        }
        return res.json(response);
    },
};

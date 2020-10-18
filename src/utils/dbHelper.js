const mongoose = require("mongoose");
const constants = require("../constants");

module.exports.formatMongoData = (data) => {
    if (Array.isArray(data)) {
        let newData = [];
        for (let value of data) {
            newData.push(value.toObject());
        }
        return newData;
    }
    return data;
};

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID);
    }
};

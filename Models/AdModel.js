const mongoose = require("mongoose");
mongoose.pluralize(null);

const AdSchema = mongoose.Schema({
    AdId: String,
    PublisherId: String,
    Title: String,
    Description: String,
    Budget: Number,
    Date: { type: Date, default: Date.now() },
    Status: { type: String, default: "Active" },
    UsersIds: [{ type: String }]
});

const AdModel = mongoose.model("AdDetail", AdSchema);

module.exports = AdModel;
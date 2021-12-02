const mongoose = require("mongoose");
mongoose.pluralize(null);

const PublisherSchema = mongoose.Schema({
    PublisherId: String,
    Name: String,
    WalletAmount: Number,
    EmailId: String,
    MobileNo: String,
    PANNO: String
});

const PublisherModel = mongoose.model("Publisher", PublisherSchema);

module.exports = PublisherModel;
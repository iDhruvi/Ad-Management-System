const PublisherModel = require("../Models/PublisherModel");

exports.Default = (req, res) => {
    res.json({ data: "Publisher Page" });
};

exports.AddPublisher = (req, res) => {
    const { publisher } = req.body;
    PublisherModel.create(publisher);
    res.json({ data: "Publisher Added.." });
};

exports.DisplayPublisher = async (req, res) => {
    const PublisherList = await PublisherModel.find();

    if (PublisherList.length === 0) {
        return res.json({ data: "No Records Found!!" });
    }

    return res.json({ data: PublisherList });
};

exports.UpdatePublisher = async (req, res) => {
    const id = req.params.id;
    var amt = req.body.WalletAmount;
    amt = Number(amt);
    const updatePublisher = await PublisherModel.findOneAndUpdate(
        { PublisherId: id },
        { WalletAmount: amt },
        { new: true }
    );

    console.log(JSON.stringify(updatePublisher));
    return res.json({ data: "Publisher Updated.." });
};

exports.DeletePublisher = async (req, res) => {
    const id = req.params.id;
    const deletePublisher = await PublisherModel.findOneAndDelete({ PublisherId: id });

    if (deletePublisher) {
        return res.json({ data: "Publisher Deleted.." });
    } else {
        return res.json({ data: "Publisher Not Found!!" });
    }
};
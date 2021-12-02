const AdModel = require("../Models/AdModel");

exports.Default = (req, res) => {
    return res.json({ data: "Ad Page.." });
};

exports.AddAD = (req, res) => {
    const { ad } = req.body;
    AdModel.create(ad);
    return res.json({ data: "Ad Added.." });
};

exports.DisplayAd = async (req, res) => {
    const AdList = await AdModel.find();

    if (AdList.length === 0) {
        return res.json({ data: "No Record Found!!" });
    }

    return res.json({ data: AdList });
};

exports.UpdateAd = async (req, res) => {
    const id = req.params.id;
    const status = req.body.Status;

    const updateAd = await AdModel.findOneAndUpdate(
        { AdId: id },
        { Status: status },
        { new: true }
    );

    console.log(JSON.stringify(updateAd));
    return res.json({ data: "Ad Updated.." });
};

exports.DeleteAd = async (req, res) => {
    const id = req.params.id;
    const deleteAd = await AdModel.findOneAndDelete({ AdId: id });

    if (deleteAd) {
        return res.json({ data: "Ad Deleted.." });
    } else {
        return res.json({ data: "No AD Found!!" });
    }
};

exports.PublisherWiseAd = async (req, res) => {
    const name = req.params.name;
    const PublisherModel = require("../Models/PublisherModel");
    const publisher = await PublisherModel.findOne({ Title: name });

    if (publisher.length < 0) {
        return res.json({ data: "No Publisher Found!!" });
    } else {
        const ad = await AdModel.find({ PublisherId: publisher["PublisherId"] });
        if (ad.length === 0) {
            return res.json({ data: "No Ad Found!!" });
        }

        return res.json({ data: ad });
    }
};
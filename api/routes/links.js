const express = require("express");
const router = express.Router();
const Link = require("../models/Link");

//Get all the links
router.get("/", async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get the link by linkUrl field
router.get("/:linkUrl", async (req, res) => {
  try {
    const link = await Link.findOne({ linkUrl: req.params.linkUrl });
    res.json(link);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a link
router.post("/", async (req, res) => {
  const link = new Link({
    linkUrl: req.body.linkUrl,
    title: req.body.title,
    links: req.body.links,
  });

  try {
    const savedLink = await link.save();
    res.json(savedLink);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a specific link
router.patch("/:linkId", async (req, res) => {
  try {
    const link = await Link.findById(req.params.linkId).exec();
    let query = { $set: {} };
    for (let key in req.body) {
      if (link[key] && link[key] !== req.body[key])
        // if the field we have in req.body exists, we're gonna update it
        query.$set[key] = req.body[key];
    }

    const updateLink = await Link.updateOne({ _id: req.params.linkId }, query);
    res.json(updateLink);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a specific link
router.delete("/:linkId", async (req, res) => {
  try {
    const deletedLink = await Link.deleteOne({ _id: req.params.linkId });
    res.json(deletedLink);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

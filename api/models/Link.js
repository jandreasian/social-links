const mongoose = require("mongoose");

const LinkSchema = mongoose.Schema({
  linkUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  links: [
    {
      orderNumber: Number,
      title: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model("Link", LinkSchema);

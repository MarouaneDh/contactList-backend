exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    if (!req.body.name) {
      res.status(400).send({ message: "name is required" });
      return;
    }
    if (!req.body.age) {
      res
        .status(400)
        .send({ message: "age is required (example: 01/01/1999)" });
      return;
    }
    if (!req.body.phone) {
      res.status(400).send({ message: "phone is required" });
      return;
    }
    const response = await newContact.save();
    res.send({ response: response, message: "contact was saved" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "not able to save contact" });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "got contact with success" });
  } catch (error) {
    res.status(400).send({ message: "can't get contact" });
  }
};

exports.getContact = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "got contact with success" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "contact deleted" })
      : res.send("there is no user with this id");
    res.send("deleted");
  } catch (error) {
    res.send("contact wasn't deleted");
  }
};

exports.putContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "contact updated successfully" })
      : res.send({ message: "the contact has already been given this update" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "there is no contact with this id to be updated" });
  }
};

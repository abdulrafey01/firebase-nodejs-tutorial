const db = require("../config/db");

exports.createUser = async (req, res) => {
  try {
    const userJson = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };

    console.log("Creating user with data:", userJson);
    console.log(userJson);
    const doc = await db.collection("users").add(userJson);
    res.send(doc);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.collection("users").get();
    const usersArray = [];
    users.forEach((doc) => {
      usersArray.push(doc.data());
    });
    res.send(usersArray);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await db.collection("users").doc(req.params.id).get();
    res.send(user.data());
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const newFirstName = "Osman";
    const user = await db.collection("users").doc(req.params.id).update({
      firstName: newFirstName,
    });

    const updatedUser = await db.collection("users").doc(req.params.id).get();
    res.send(updatedUser.data());
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const response = await db
      .collection("users")
      .doc("6tST7tfxmgk54C8efc5f")
      .delete();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

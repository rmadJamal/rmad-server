const USER_MODEL = require("../modules/user.module");

const createUser = (req, res) => {
  const { firstName, lastName, image, userName, pass } = req.body;

  USER_MODEL.create({
    firstName,
    lastName,
    image,
    userName,
    pass
  })
    .then((createRes) => {
      res.status(200).json(createRes);
    })
    .catch((e) =>
      res.status(500).json({
        error: true,
        message: e.message,
        errorMessage: e,
      })
    );
};

const login = async (req, res) => {
  try {
    const { userName, pass } = req.body

    const user = await USER_MODEL.findOne({ userName });
    console.log(user);

    if (!user) {
      res.status(400).json({
        success: false,
        message: "user not found"
      })
      return;
    }
    if (user.pass === pass) {
      res.status(200).json({
        user,
        success: true,
        message: "welcom " + user.userName
      })
    }
    else {
      res.status(400).json({
        success: false,
        message: "wrong pass"
      })
    }
  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const UpdateUser = async (req, res) => {
  try {
    const { _id, UserUpdate } = req.body;
    const newUser = await USER_MODEL.findOneAndUpdate(
      { _id },
      UserUpdate,
      { new: true, runValidators:true, lean:true }
    )
    res.status(200).json({
      success: !!newUser,
      message: newUser?"user Updated🤣":"faild 😒",
      newUser
    })
    return;
  }
  catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      message: "Update Field"
    })
  }

}

module.exports = {
  createUser,
  login,
  UpdateUser,
};

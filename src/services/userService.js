let users = [];
let userIdCounter = 1;

const resetUsers = () => {
  users = [];
  userIdCounter = 1;
};

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((person) => person.id === +id) || null;
};

const createUser = (name) => {
  const user = {
    id: userIdCounter++,
    name,
  };

  users.push(user);

  return user;
};

const updateUser = ({ id, name }) => {
  const user = getUserById(+id);

  if (!user) {
    return null;
  }

  Object.assign(user, { name });

  return user;
};

const deleteUser = (id) => {
  users = users.filter((person) => person.id !== +id);
};

module.exports = {
  resetUsers,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

const register = (req, res) => {
  const { name, email, password } = req.body;

  const user = { id: Date.now(), name, email, password };
  global.users.push(user);
  global.user_id = user;

  res.status(201).json({ name: user.name, email: user.email });
};

const logon = (req, res) => {
  const { email, password } = req.body;

  const user = global.users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  global.user_id = user;
  res.status(200).json({ name: user.name, email: user.email });
};

const logoff = (req, res) => {
  global.user_id = null;
  res.status(200).json({ message: "Logged off" });
};

module.exports = { register, logon, logoff };
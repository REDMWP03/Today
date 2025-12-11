import { registerUser } from "../models/users.js"

export default async function registerUserController(req, res) {
  const { user_name, password, date } = req.body;

  try {
    const user = await registerUser(user_name, password, date);

    if (user.status === 'success') {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: 'Something went wrong', error: user });
    }
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

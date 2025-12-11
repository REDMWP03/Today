import { checkForUser } from '../models/users.js'
import bcrypt from 'bcryptjs';
export default async function userLoginController(req, res) {
  const { user_name, password } = req.body;

  // Basic validation
  if (!user_name || !password) {
    return res.status(400).json({ msg: 'Username and password are required' });
  }

  try {
    const user = await checkForUser(user_name);

    if (user && user.user_name) {
      const isPass = await bcrypt.compare(password, user.password);

      if (isPass) {
        //  generate JWT token here to maket it real apps
        return res.status(200).json({ msg: 'Logged in successfully' });
      } else {
        return res.status(401).json({ msg: 'Incorrect password' });
      }
    } else {
      return res.status(404).json({ msg: 'User not found' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
}

import { getUserById } from '../models/users.js'

export default async function getUserController(req, res) {
  try {
    const { id } = req.params; // Fixed: req.params (not req.param)

    if (!id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const user = await getUserById(id);

    // If no user found (assuming getUserById returns null/undefined or empty object)
    if (!user || !user.user_name) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Success: send user data
    res.status(200).json(user);
  } catch (error) {
    console.error('Error in getUserController:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

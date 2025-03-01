import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find() // Don't hide a password
        

        res.status(200).json(filteredUsers)


    } catch (error) {
        console.log("Failed to get users", error.message);
        res.status(500).json({message: error.message})
    }
}
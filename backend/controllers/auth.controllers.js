import User from "../models/userModel.js"

export const signup = async(req, res) =>{
    try {
        console.log(req.body)
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }

        const user = await User.findOne({username})

        if(user) 
        {
            return res.status(400).json({error: "Username already exists"})
        }

        // HASH PASSWORD HERE
        
        const boyPictProf = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlPictProf = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "Male"? boyPictProf : girlPictProf
        })

        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })

    } catch (error) {
        console.log("Error in signup controller", error.message)
                    
        res.status(500).json({error: "Server Error"})
        
    }
}

export const login = (req, res) =>{
    console.log("loginUser")
}

export const logout = (req, res) =>{
    console.log("logoutUser")
}


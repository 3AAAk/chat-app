import Conversation from "../models/conversation_model.js"
import Message from "../models/message_model.js"

export const sendMessage = async (req, res) =>{
    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId, 
            message,
        })

        if(newMessage){
            conversation.message.push(newMessage._id)
            
        }

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in message controller",error.message);
        res.status(500).json({error: "Server Error"})
    }
}

export const getMessage = async (req, res) => {
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("message");

        if (!conversation) {
            return res.status(404).json({ error: "No conversation found" });
        }

        res.status(200).json(conversation.message)


    } catch (error) {
        console.log("Error in message controller",error.message)
        res.status(500).json({error: "Server Error"})
    }
}
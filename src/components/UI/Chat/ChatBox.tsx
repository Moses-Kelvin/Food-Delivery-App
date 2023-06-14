import React from "react";
import { BsFillChatFill } from "react-icons/bs";

const ChatBox = () => {
    return (
        <div className="grid items center bg-deepRed shadow-lg p-2 rounded-full w-20 h-20 bottom-[5%] right-[4%] z-[100] fixed">
            <BsFillChatFill style={{margin: 'auto'}} size={50} fill="white" />
        </div>
    )
}

export default ChatBox;
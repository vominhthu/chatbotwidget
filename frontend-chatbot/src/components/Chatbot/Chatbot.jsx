import { useState } from "react";
import { FiMessageSquare, FiSend, FiX } from "react-icons/fi";
// import ChatAPIs from  '../../apis/ChatAPIs';
import "./styles.scss";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");


    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (input.trim() === "") return;
        // sendMessage
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot">
            {/* Floating Chat Button */}
            <div className="chatbot__toggle" onClick={toggleChat}>
                <FiMessageSquare size={24} />
            </div>

            {/* Chat Window */}
            <div className={`chatbot__window ${isOpen ? "" : "hidden"}`}>
                <div className="chatbot__header">
                    <h4>Chatbot</h4>
                    <FiX size={20} className="chatbot__close-button" onClick={toggleChat} />
                </div>

                <div className="chatbot__messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`chatbot__message ${msg.role === "user" ? "user" : "model"
                                }`}
                        >
                            {msg.parts[0].text}
                        </div>
                    ))}
                </div>

                <div className="chatbot__input">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <FiSend className="chatbot__send-button" size={20} onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;

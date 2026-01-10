import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import "../../assets/css/chatbot.css";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Đóng chatbot khi đăng xuất
    useEffect(() => {
        const handleAuthChange = () => {
            setIsOpen(false);
        };

        window.addEventListener("cart:updated", handleAuthChange);

        return () => {
            window.removeEventListener("cart:updated", handleAuthChange);
        };
    }, []);

    return (
        <div className="chatbot-container">
            {/* Chat Window */}
            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}

            {/* Floating Button */}
            <button
                className={`chatbot-button ${!isOpen ? "bounce" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chatbot"
            >
                {isOpen ? (
                    // Close icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    // Chat icon
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ChatWidget;

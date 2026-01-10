import React, { useState, useEffect, useRef } from "react";
import chatbotService from "../../services/chatbotService";
import "../../assets/css/chatbot.css";

const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickQuestions, setShowQuickQuestions] = useState(false);
    const messagesEndRef = useRef(null);
    const greetingSentRef = useRef(false);

    const quickQuestions = chatbotService.getQuickQuestions();

    // Scroll to bottom when messages change
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Send initial greeting (only once)
    useEffect(() => {
        if (!greetingSentRef.current) {
            greetingSentRef.current = true;
            setTimeout(() => {
                addBotMessage(chatbotService.getGreeting());
            }, 500);
        }
    }, []);

    // Reset chatbot khi đăng xuất
    useEffect(() => {
        const handleAuthChange = () => {
            // Clear tất cả messages
            setMessages([]);
            setInputValue("");
            setIsTyping(false);
            greetingSentRef.current = false;
            
            // Gửi lại greeting message
            setTimeout(() => {
                greetingSentRef.current = true;
                addBotMessage(chatbotService.getGreeting());
            }, 500);
        };

        // Lắng nghe sự kiện cart:updated (được trigger khi logout)
        window.addEventListener("cart:updated", handleAuthChange);

        return () => {
            window.removeEventListener("cart:updated", handleAuthChange);
        };
    }, []);

    const addBotMessage = (text) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                sender: "bot",
                timestamp: new Date(),
            },
        ]);
    };

    const addUserMessage = (text) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now(),
                text,
                sender: "user",
                timestamp: new Date(),
            },
        ]);
    };

    const handleQuickQuestion = (question) => {
        // Add user message
        addUserMessage(question.question);

        // Show typing indicator
        setIsTyping(true);

        // Simulate bot thinking time
        setTimeout(() => {
            setIsTyping(false);
            const answer = chatbotService.findAnswer(question.id);
            addBotMessage(answer);
        }, 800 + Math.random() * 1000); // Random delay 800-1800ms for realism
    };

    const handleSendMessage = () => {
        const trimmedInput = inputValue.trim();
        if (!trimmedInput) return;

        // Add user message
        addUserMessage(trimmedInput);
        setInputValue("");

        // Show typing indicator
        setIsTyping(true);

        // Simulate bot thinking time
        setTimeout(() => {
            setIsTyping(false);
            const answer = chatbotService.searchAnswer(trimmedInput);
            addBotMessage(answer);
        }, 1000 + Math.random() * 1500); // Random delay for realism
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="chat-window">
            {/* Header */}
            <div className="chat-header">
                <div className="chat-header-info">
                    <div className="chat-header-avatar">🤖</div>
                    <div className="chat-header-text">
                        <h3>{chatbotService.getBotName()}</h3>
                        <p>Trợ lý ảo</p>
                    </div>
                </div>
                <button className="chat-close-btn" onClick={onClose}>
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
                </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <div className="message-avatar">
                            {msg.sender === "bot" ? "🤖" : "👤"}
                        </div>
                        <div className="message-bubble">{msg.text}</div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="message bot">
                        <div className="message-avatar">🤖</div>
                        <div className="message-bubble">
                            <div className="typing-indicator">
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions - Collapsible */}
            <div className="quick-questions-section">
                <button
                    className="quick-questions-toggle"
                    onClick={() => setShowQuickQuestions(!showQuickQuestions)}
                >
                    <span>💡 Câu hỏi gợi ý</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            transform: showQuickQuestions ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }}
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>

                {showQuickQuestions && (
                    <div className="quick-questions">
                        {quickQuestions.map((question) => (
                            <button
                                key={question.id}
                                className="quick-question-btn"
                                onClick={() => handleQuickQuestion(question)}
                            >
                                {question.question}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="chat-input-container">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Nhập câu hỏi của bạn..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="chat-send-btn"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;

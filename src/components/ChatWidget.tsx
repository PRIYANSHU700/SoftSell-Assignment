import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

const predefinedQuestions = [
  "How do I sell my software license?",
  "What types of licenses do you accept?",
  "How long does the process take?",
  "Is the process secure?"
];

const responses: Record<string, string> = {
  "How do I sell my software license?": "The process is simple:\n1. Fill out our contact form with your license details\n2. Receive an instant valuation\n3. Accept the offer\n4. Get paid within 48 hours",
  "What types of licenses do you accept?": "We accept licenses from major software providers including:\n- Microsoft Office\n- Adobe Creative Cloud\n- AutoCAD\n- SAP\n- Oracle\n- Salesforce\nAnd many more! Contact us for specific inquiries.",
  "How long does the process take?": "Our process is designed for speed:\n- Instant valuation upon submission\n- 24-hour review period\n- Payment within 48 hours of acceptance\nMost transactions complete within 3-5 business days.",
  "Is the process secure?": "Absolutely! We prioritize security:\n- End-to-end encryption\n- Secure payment processing\n- Compliance with software licensing terms\n- Data protection standards\n- Regular security audits",
  "default": "I can help you with questions about selling software licenses, our process, accepted license types, and security measures. Feel free to ask anything specific!"
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const response = responses[inputValue] || responses.default;
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
    handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[32rem]">
          {/* Header */}
          <div className="p-4 bg-blue-600 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center text-white">
              <Bot className="h-6 w-6 mr-2" />
              <span className="font-semibold">SoftSell Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700">
                👋 Hi! I'm here to help you sell your software licenses. 
                You can ask me anything about our process, or choose from the common questions below.
              </p>
            </div>

            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <ReactMarkdown className="prose prose-sm">
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 0 && (
            <div className="p-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-2">Common questions:</p>
              <div className="space-y-2">
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="block w-full text-left text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded p-2 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
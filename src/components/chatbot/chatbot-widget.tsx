
'use client';

import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquarePlus, Send, Loader2, X } from 'lucide-react';
import { getChatbotResponse } from '@/lib/actions';
import type { ChatMessage } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

interface DisplayMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [messages, setMessages] = React.useState<DisplayMessage[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollAreaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const newUserMessage: DisplayMessage = { id: Date.now().toString(), sender: 'user', text: inputValue.trim() };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    const chatHistory: ChatMessage[] = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      content: msg.text,
    }));
    chatHistory.push({ role: 'user', content: newUserMessage.text});


    try {
      const botResponseText = await getChatbotResponse(newUserMessage.text, chatHistory);
      const newBotMessage: DisplayMessage = { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponseText };
      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      const errorBotMessage: DisplayMessage = { id: (Date.now() + 1).toString(), sender: 'bot', text: "Sorry, I couldn't process that. Please try again." };
      setMessages((prev) => [...prev, errorBotMessage]);
      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
       // Send an initial greeting from the bot when the chat opens for the first time
      const initialBotMessage: DisplayMessage = { 
        id: Date.now().toString(), 
        sender: 'bot', 
        text: "Hello! I'm Certitude Professional's AI assistant. How can I help you today?" 
      };
      setMessages([initialBotMessage]);
    }
  }, [isOpen]);


  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }} // Delay slightly after page load
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            variant="default"
            size="icon"
            className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
            aria-label="Open Chatbot"
          >
            {isOpen ? <X className="h-7 w-7" /> : <MessageSquarePlus className="h-7 w-7" />}
          </Button>
        </motion.div>
      </PopoverTrigger>
      <PopoverContent 
        side="top" 
        align="end" 
        className="w-[350px] h-[500px] mr-2 mb-1 p-0 flex flex-col bg-card border-border shadow-2xl rounded-lg overflow-hidden"
        sideOffset={10}
      >
        <div className="p-4 border-b border-border/50 bg-background/50">
          <h3 className="font-semibold text-center text-foreground">Certitude AI Assistant</h3>
        </div>
        <ScrollArea className="flex-grow p-4 space-y-3" ref={scrollAreaRef}>
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-lg text-sm shadow ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted text-muted-foreground rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div 
              layout 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="p-3 rounded-lg bg-muted text-muted-foreground rounded-bl-none shadow">
                <Loader2 className="h-5 w-5 animate-spin text-accent" />
              </div>
            </motion.div>
          )}
        </ScrollArea>
        <div className="p-3 border-t border-border/50 bg-background/50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask something..."
              className="flex-grow bg-input text-foreground placeholder:text-muted-foreground/70"
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || inputValue.trim() === ''} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}

ChatbotWidget.displayName = "ChatbotWidget";

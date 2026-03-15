"use client";

import { useState, useRef, useEffect } from "react";
import { Message } from "@/types";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm your AI builder. Describe the app you want to build and I'll create it for you — clean code, your GitHub, deployable anywhere.",
      createdAt: new Date(),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Placeholder response — we'll replace this with Claude on Day 3
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Got it! I'm working on that... (AI coming Day 3 🚀)",
        createdAt: new Date(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto h-full py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-zinc-100">OwnAI</h1>
        <p className="text-sm text-zinc-500">Build it with AI. Own it forever.</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="mt-4">
        <ChatInput onSend={handleSend} />
        <p className="text-center text-xs text-zinc-600 mt-2">
          Your code. Your GitHub. No lock-in.
        </p>
      </div>
    </div>
  );
}

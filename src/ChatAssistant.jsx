import React, { useState } from 'react';

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: 'asisten', text: 'Hai Aldo! Ada yang bisa aku bantu hari ini?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'aldo', text: input };
    const assistantReply = {
      sender: 'asisten',
      text: 'Terima kasih! Aku belum terhubung ke ChatGPT, tapi aku tetap siap bantu!'
    };
    setMessages([...messages, userMessage, assistantReply]);
    setInput('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Asisten Aldo</h2>
      <div style={{ height: 200, overflowY: 'auto', border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'aldo' ? 'right' : 'left' }}>
            <span style={{ background: msg.sender === 'aldo' ? '#dbeafe' : '#eee', padding: 5, borderRadius: 5, display: 'inline-block', marginBottom: 4 }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          type="text"
          value={input}
          placeholder="Tulis pesan..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleSend}>Kirim</button>
      </div>
    </div>
  );
};

export default ChatAssistant;
  

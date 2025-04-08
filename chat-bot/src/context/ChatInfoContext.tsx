// ChatInfoContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import GlobalApi from "../../service/GlobalApi";

const ChatInfoContext = createContext(null);

export const ChatInfoProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [ChatContent, setChatContent] = useState();
  const [chatName, setChatName] = useState("New Chat");
  useEffect(() => {

    getChatContent();
  }, [selectedChat])

  const getChatContent = () => {
    if (!selectedChat) return;
    try {
      GlobalApi.GetChatById(selectedChat).then(resp => {
        console.log(resp.data.data.chatContent);
        setChatContent(resp.data.data.chatContent);
        resp.data.data.chatName ? setChatName(resp.data.data.chatName) : setChatName("New Chat");
      })
    } catch (error) {
      console.error('Error fetching chat content:', error);
    }
  };

  return (
    <ChatInfoContext.Provider value={{ selectedChat, setSelectedChat, ChatContent, setChatContent, chatName }}>
      {children}
    </ChatInfoContext.Provider>
  );
};

export const useChatInfo = () => useContext(ChatInfoContext);

import { useChatInfo } from '@/context/ChatInfoContext';
import { UserButton, useUser } from "@clerk/clerk-react";
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from "react";
import { FaCog, FaCommentDots, FaPlus, FaSearch } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from '../../../../service/GlobalApi';

export default function Sidebar() {
  const { selectedChat, setSelectedChat } = useChatInfo();
  const { user } = useUser();
  const [loadingNewChat, setLoadingNewChat] = useState(false);
  const [loadingChatList, setLoadingChatList] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [selectChat, setSelectChat] = useState(null);

  // Fetch chat list when user is available
  useEffect(() => {
    if (user) fetchChatList();
  }, [user]);

  // Fetch user's chats from API
  const fetchChatList = async () => {
    setLoadingChatList(true);
    try {
      const resp = await GlobalApi.GetUserChats(user?.primaryEmailAddress?.emailAddress);
      setChatList(resp.data.data || []);
      if (resp.data.data.length > 0) {
        setSelectedChat(resp.data.data[0].documentId);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
      toast.error('Failed to load chats');
    } finally {
      setLoadingChatList(false);
    }
  };

  // Create a new chat
  const handleCreateChat = async () => {
    setLoadingNewChat(true);

    const newChat = {
      data: {
        chatName: "Your Conversation",
        chatId: uuidv4(),
        email: user?.primaryEmailAddress?.emailAddress,
        name: user?.fullName,
        date: new Date(),
      },
    };

    try {
      await GlobalApi.CreateNewChat(newChat);
      toast.success('New chat created');
      fetchChatList();
    } catch (error) {
      console.error('Error creating chat:', error);
      toast.error('Failed to create chat');
    } finally {
      setLoadingNewChat(false);
    }
  };

  // Delete a chat
  const handleDeleteChat = async (chatId: string) => {
    try {
      await GlobalApi.DeleteChatById(chatId);
      // toast.success('Chat deleted');
      alert('Chat deleted');
      fetchChatList();
    } catch (error) {
      console.error('Error deleting chat:', error);
      toast.error('Failed to delete chat');
    }
  };

  return (
    <div className="w-80 bg-white rounded-2xl p-4 shadow-md flex flex-col h-[98vh] mt-[1vh] ml-[1vh]">

      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">CHAT A.I+</h2>
        <div className="flex items-center gap-2 mt-6">
          <button
            className="flex items-center justify-center w-full px-3 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-800"
            onClick={handleCreateChat}
            disabled={loadingNewChat}
          >
            {loadingNewChat ? (
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <FaPlus className="mr-2" />
            )}
            New Chat
          </button>
          <button className="bg-black text-white p-2 rounded-full">
            <FaSearch size={16} />
          </button>
        </div>
      </div>

      {/* Chat List Section */}
      <div className="flex-1 overflow-y-auto">
        <span className="text-sm text-gray-500 mb-2 block">Your conversations</span>
        <ul className="space-y-2">
          {loadingChatList ? (
            <li className="flex items-center justify-center">
              <Loader2 className="animate-spin" />
            </li>
          ) : chatList.length === 0 ? (
            <li className="text-gray-600 text-sm">No Chats Found</li>
          ) : (
            chatList.map((chat) => (
              <li
                key={chat.id}
                className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer ${selectedChat === chat.documentId ? 'bg-blue-200' : 'hover:bg-blue-200'
                  }`}
                onClick={() => {
                  setSelectedChat(chat.documentId);
                  console.log('Chatid', chat.documentId);
                }}
              >

                <FaCommentDots className="text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-800 truncate w-full">
                  {chat.chatName}
                </span>
                <button
                  className="text-white hover:text-black flex-shrink-0 text-base cursor-pointer hover:bg-blue-300 p-1 rounded-full"
                  onClick={() => handleDeleteChat(chat.documentId)}
                >
                  <MdDelete />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-4 space-y-2">
        <button className="flex items-center w-full p-2 rounded-lg hover:bg-blue-200 text-base text-gray-700">
          <FaCog className="mr-2" /> Settings
        </button>
        <UserButton showName />
      </div>
    </div>
  );
}
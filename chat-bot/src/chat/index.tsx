// Chat.tsx
import ChatInterface from '@/components/ui/custom/chatMain';
import { ChatInfoProvider } from '@/context/ChatInfoContext';
import Sidebar from '../components/ui/custom/sidebar';

function Chat() {

  return (
    <ChatInfoProvider>
      <div className="flex h-screen bg-sky-50">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-center bg-sky-50">
          <ChatInterface />
        </div>
      </div>
    </ChatInfoProvider>
  );
}

export default Chat;

import './App.css';
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {


  function chatFeedRenderer(chatAppProps){
    return <ChatFeed {...chatAppProps}/>
  }

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID="18b5c922-f5c8-4ede-94cb-1f071cec8eb0"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={chatFeedRenderer}
     />
  );
}

export default App;

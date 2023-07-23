import './App.css';
import Navbar from './component/Navbar';
import HistoryTab from './component/HistoryTab';
import ChatGPTContent from './component/ChatGPTContent';

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <HistoryTab />
        <ChatGPTContent />
      </div>
    </div>
  );
}

export default App;

import { useState, useRef, useEffect } from 'react';
import { appOne } from '../firebase';
import { getDatabase, ref, get, push, onValue } from 'firebase/database';

const databaseOne = getDatabase(appOne);
const messagesRefOne = ref(databaseOne, 'messages');

function ChatRoomOne() {
  const dummy = useRef();
  
  // Use messagesRefOne directly without orderByChild
  const query = messagesRefOne;

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const snapshot = await get(query);
  //       const data = snapshot.val();
  //       if (data) {
  //         const messageList = Object.values(data);
  //         setMessages(messageList.reverse());
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use onValue to listen for real-time updates
        onValue(query, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const messageList = Object.values(data);
            setMessages(messageList.reverse());
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  const sendMessage = async (e) => {
    e.preventDefault();

    await push(messagesRefOne, {
      text: formValue,
      createdAt: { '.sv': 'timestamp' }, // Use ServerValue.TIMESTAMP equivalent
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.text}</p>
          </div>
        ))}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

export default ChatRoomOne;
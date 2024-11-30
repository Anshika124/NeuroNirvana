import React, { useState } from "react";
import "./Chatbot.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import ReactMarkdown from "react-markdown";

let msg = "";
let summary = "";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const navigate = useNavigate();

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    if (input === "bye") {
      const newMessage = { text: input, id: messages.length, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");
      setGeneratingAnswer(true);
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAS04iZ2BcleJiewIdLaEkiGKzglpCh6wg`,
          method: "post",
          data: {
            contents: [
              {
                parts: [
                  {
                    text:
                      "summarize the text given and give results about the mental health status of the user. Give the final result about the problem you think the child is suffering from. At the end Show results in a positive way . Also categorize the result into one or more of these categories which is best according to the conversation for the following categories: 1) Eating Disorder 2) Psychotic Disorder 3) Academic Problem 4) Romantic Relationship Problems 5) Family Problems 6) Tic Disorder 7) Substance abuse disorder 8) Post-traumatic disorder 9) Obsessive-compulsion disorder 10) Behaviour or conduct Problem 11) Anxiety disorder 12) Mood disorder After that use one or more word to describe the whole report(that word should be written in a seperate form and that word should be one of the above category) the text is= " +
                      msg,
                  },
                ],
              },
            ],
          },
        });

        const botResponse = response.data.candidates[0].content.parts[0].text;
        summary = botResponse;
        localStorage.setItem('summary', summary);
        setMessages((msgs) => [
          ...msgs,
          { text: botResponse, id: msgs.length, sender: "bot" },
        ]);
        navigate('/Home')
      } catch (error) {
        console.error("Error in fetching response: ", error);
        setMessages((msgs) => [
          ...msgs,
          {
            text: "Sorry - Something went wrong. Please try again!",
            id: msgs.length,
            sender: "bot",
          },
        ]);
      }
      return;
    }
    msg += " " + input;
    const newMessage = { text: input, id: messages.length, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    setGeneratingAnswer(true);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAS04iZ2BcleJiewIdLaEkiGKzglpCh6wg`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text:
                    "Your name is Neuro Nirvana. You are a child psychologist, an automated service that assesses the mental health of students. You assess their mental health by asking them questions related to their personal life every day. You first greet the user in a friendly manner, then ask them about how their daily life is going. You can ask them questions about their day, school life, academics, friends, parents, relationships, any hardships they face lately, etc. You acknowledge their answers with a proper reply and ask them follow-up questions to know more about their mental health. The conversation should be humanized as if the user is talking to a real human. You ask and reply to the user until the user says goodbye, bye, etc. In the initial conversation you should ask questions which will be beneficial to know more about user mental health status like are you eating fine? , tell me about your family? , tell me about your friends? , etc. Now answer on the basis of given message:  " +
                    input,
                },
              ],
            },
          ],
        },
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setMessages((msgs) => [
        ...msgs,
        { text: botResponse, id: msgs.length, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error in fetching response: ", error);
      setMessages((msgs) => [
        ...msgs,
        {
          text: "Sorry - Something went wrong. Please try again!",
          id: msgs.length,
          sender: "bot",
        },
      ]);
    }

    setGeneratingAnswer(false);
  };

  return (
    <section className="rightSection">
      <div className="mainContainer">
        <div className="header-mainContainer">
          <h4>CHATBOT</h4>
        </div>
        <div className="chat-container">
          <div className="message-container">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
          </div>
          <form className="input-container" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your message..."
              disabled={generatingAnswer}
            />
            <button type="submit" disabled={generatingAnswer}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;

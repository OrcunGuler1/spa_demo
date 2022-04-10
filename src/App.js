import React from "react";
import "./scss/styles.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Thread from "./components/Thread/Thread";
import Suggestions from "./components/Suggestions/Suggestions";
import FeedProvider from "./Providers/FeedProvider";
import ThreadProvider from "./Providers/ThreadProvider";
import SuggestionsProvider from "./Providers/SuggestionsProvider";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="grid">
        <ThreadProvider>
          <FeedProvider>
            <Feed />
          </FeedProvider>
          <Thread />
        </ThreadProvider>
        <SuggestionsProvider>
          <Suggestions />
        </SuggestionsProvider>
      </div>
    </Router>
  );
}

export default App;

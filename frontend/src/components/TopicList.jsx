import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

//Component to display a list of topics
const TopicList = (props) => {
  const { topics, selectedTopic } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} selectedTopic={selectedTopic} />
      ))}
    </div>
  );
};

export default TopicList;

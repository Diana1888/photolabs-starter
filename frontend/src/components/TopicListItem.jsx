import React from "react";

import "../styles/TopicListItem.scss";

// Component to display topic in the list
const TopicListItem = (props) => {

  const { topic, selectedTopic } = props;

  return (
    <div className="topic-list__item" onClick={() => selectedTopic(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

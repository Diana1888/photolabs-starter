import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const { topic, selectedTopic } = props;

  return (
    
    <div className="topic-list__item" onClick={() => selectedTopic(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

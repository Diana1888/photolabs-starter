import React from "react";
import { useState } from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic}/> 
      ))}
    </div>
  );
};

export default TopicList;

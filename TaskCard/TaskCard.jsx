import React from "react";
import "./TaskCard.css";
import Tag from "../TaskForm/Tag/Tag";
import delete_icon from "../../assets/delete_icon.png";
const TaskCard = ({
  title,
  tags,
  handleDelete,
  selectedTag,
  index,
  setActiveCard,
}) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => {
        setActiveCard(index);
      }}
      onDragEnd={() => {
        setActiveCard(null);
      }}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selectedTag={selectedTag} selected />
          ))}
        </div>
        <div
          className="task_delete"
          onClick={() => {
            handleDelete(index);
          }}
        >
          <img src={delete_icon} className="delete_icon" alt="error" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

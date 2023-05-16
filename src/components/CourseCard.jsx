import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, name, logo, total } = course;

  return (
    <div className="card w-72 bg-base-100 shadow-xl ">
      <figure>
        <img src={logo} alt="course" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p></p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">Total Quiz: {total}</div>
          <Link to={`/quiz/${id}`}>
            <button className="btn btn-primary">---{">"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

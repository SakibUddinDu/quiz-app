/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";

const Quiz = () => {
  const quizes = useLoaderData([]);
  const quizData = quizes.data.questions;

  // State to store the selected option for each question
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleOptionChange = (questionIndex, optionIndex, ca) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionIndex]: optionIndex,
    }));

    const selectedOption = quizData[questionIndex].options[optionIndex];
    const correctAnswer = quizData[questionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      toast.success(`Correct Answer: ${correctAnswer}`);
    } else {
      toast.error("Wrong answer!");
    }
    // return correctAnswer;
  };

  return (
    <>
      <section className="py-6 bg-accent p-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          {/* ... */}
          <div className="space-y-8 p-4">
            <div className="quiz mt-8 p-8">
              {quizData.map((quiz, index) => (
                <>
                  <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">
                      {" "}
                      {index + 1}) {quiz.question} {quiz.correctAnswer}
                    </h1>
                    <label
                      htmlFor="my-modal-3"
                      className="btn"
                      onClick={() => setCorrectAnswer(quiz.correctAnswer)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </label>
                  </div>

                  <form className="quizOptions">
                    {quiz.options.map((option, optionIndex) => (
                      // eslint-disable-next-line react/jsx-key
                      <div className="border border-slate-950 p-6 rounded-md mt-3">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            id={optionIndex}
                            name={`question_${index}`}
                            className="mr-2 form-checkbox"
                            checked={selectedOptions[index] === optionIndex}
                            onChange={() =>
                              handleOptionChange(index, optionIndex)
                            }
                          />
                          <span className="text-xl">{option}</span>
                        </label>
                      </div>
                    ))}
                  </form>
                </>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />

        {/*==========modal =======*/}
        <Modal correctAnswer={correctAnswer}></Modal>
      </section>
    </>
  );
};

export default Quiz;

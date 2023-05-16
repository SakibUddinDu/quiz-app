// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quizes = useLoaderData([]);
  const quizData = quizes.data.questions;

  console.log(quizes.data);
  return (
    <section className="py-6 bg-accent">
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <div className="mb-8">
          <p className="text-sm text-slate-200">
            Each question contains 5 Mark
          </p>
        </div>
        <div className="space-y-8 ">
          <div className="quiz">
            {quizData.map((quiz) => (
             <>
              <h1 className="text-2xl font-bold">{quiz.question}</h1>
              <form className="quizOptions">
              {quiz.options.map((OPTION) => <><label className="flex items-center">
                  <input
                    type="checkbox"
                    id="option1_q1"
                    className="mr-2 form-checkbox"
                  />
                  <span className="text-xl">
                   {OPTION}
                  </span>
                </label></>
              )}
            </form>
             </>
            ))}
           
          </div>
        </div>

        <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Quiz;

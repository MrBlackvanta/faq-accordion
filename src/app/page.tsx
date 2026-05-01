import { MinusSVG, PlusSVG, StarSVG } from "@/assets/icons";
import { data } from "@/data/data";
import React from "react";

export default function Home() {
  const { title, questions } = data;

  return (
    <main className="text-dark-purple z-1 grid flex-1 place-items-center px-6">
      <article className="shadow-card border-light-gray w-full max-w-150 space-y-6 rounded-lg border bg-white p-6">
        <div className="flex items-center gap-6">
          <StarSVG className="size-6" />
          <h1 className="display">{title}</h1>
        </div>
        <div className="space-y-5">
          {questions.map((question, index) => (
            <React.Fragment key={question.question}>
              <details className="group overflow-hidden marker:content-none details-content:h-0 open:details-content:h-auto">
                <summary className="flex items-center justify-between gap-6">
                  <span className="title">{question.question}</span>
                  <MinusSVG className="hidden size-7.5 shrink-0 group-open:block" />
                  <PlusSVG className="size-7.5 shrink-0 group-open:hidden" />
                </summary>
                <p className="body text-pale-purple mt-6">{question.answer}</p>
              </details>
              {index < questions.length - 1 && (
                <hr className="border-light-pink" />
              )}
            </React.Fragment>
          ))}
        </div>
      </article>
    </main>
  );
}

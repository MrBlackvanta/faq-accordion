export type FAQData = {
  title: string;
  questions: Question[];
};

type Question = {
  id: number;
  question: string;
  answer: string;
};

import { Record } from '@awarns/core/entities';

export const QuestionnaireAnswersType = 'questionnaire-answers';

export class QuestionnaireAnswers extends Record {
  constructor(
    public questionnaireId: string,
    public answers: Array<QuestionnaireAnswer>,
    public notificationId?: number,
    answeredAt = new Date()
  ) {
    super(QuestionnaireAnswersType, answeredAt);
  }
}

export interface QuestionnaireAnswer {
  title: string;
  answer: number | string | boolean;
  millisecondsToAnswer?: number;
}

import { Record, KnownTypes } from '../../providers';

export class QuestionnaireAnswers extends Record {
  constructor(public questionnaireId: string, public answers: Array<QuestionnaireAnswer>, public notificationId?: number, answeredAt = new Date()) {
    super(KnownTypes.QuestionnaireAnswers, answeredAt);
  }
}

export interface QuestionnaireAnswer {
  title: string;
  millisecondsToAnswer: number;
  answer: number | string | boolean;
}

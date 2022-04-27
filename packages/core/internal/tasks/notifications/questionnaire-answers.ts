import { Record, RecordType } from '../../providers';

export class QuestionnaireAnswers extends Record {
  constructor(public questionnaireId: string, public answers: Array<QuestionnaireAnswer>, public notificationId?: number, answeredAt = new Date()) {
    super(RecordType.QuestionnaireAnswers, answeredAt);
  }
}

export interface QuestionnaireAnswer {
  title: string;
  millisecondsToAnswer: number;
  answer: number | string | boolean;
}

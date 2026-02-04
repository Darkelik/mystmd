type LearningObjectId = string;
type Time = Date;
type Skill = string;
type Proficiency = number;
type Probability = number;
type LearningObject = string;

/**
 * MOCK learner model for testing purposes
 */
export class LearnerModelMock {

  learning_object_status(
    learning_object_id: LearningObjectId,
    time?: Time,
  ): { [key: string]: string } {
    return {
      prerequisites: 'prérequis:\n- foo: ★★★☆☆',
      objectives: 'objectifs:\n- bar: ★☆☆☆☆',
      progress: '⬜⬜⬜⬜',
      predicted_success: '⚪⚪🟢',
    };
  }

  learning_object_title(learning_object_id: LearningObjectId): string {
    return 'apply bar';
  }
}

export class LearnerModelMock {
  learning_object_status(learning_object_id, time) {
    return {
      prerequisites: 'prérequis:\n- foo: ★★★☆☆',
      objectives: 'objectifs:\n- bar: ★☆☆☆☆',
      progress: '⬜⬜⬜⬜',
      predicted_success: '⚪⚪🟢',
    };
  }
  learning_object_title(learning_object_id) {
    return 'apply bar';
  }
}

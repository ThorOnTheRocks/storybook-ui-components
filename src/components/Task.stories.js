import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task'
};

const Template = args => <Task {...args} />;

const Default = Template({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

const Pinned = Template({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

const Archived = Template({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};


// export const getNextTaskId = (tasks) => {
//   if (tasks.length > 0) {
//     const tasksIds = tasks.map((task) => task.id);
//     const maxId = Math.max(...tasksIds);
//     return maxId + 1;
//   }
//   return 1;
// };

// OU

export const getNextTaskId = (tasks) => {
  const maxId = tasks.reduce((maxId, task) => Math.max(maxId, task.id), 0);
  return maxId + 1;
};

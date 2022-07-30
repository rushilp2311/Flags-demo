const projectId = "a1dec559-3221-45e9-9e31-c73a491a9dda";
export const sse = new EventSource(
  `http://localhost:4300/sse/subscribeToFlagUpdates?projectId=${projectId}`
);

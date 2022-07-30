let reconnectFunc = function (
  onMessageHandler: (e: MessageEvent<any>) => void
) {
  setTimeout(() => {
    setupEventSource(onMessageHandler);
  }, 6000);
};

export function setupEventSource(
  onMessageHandler: (e: MessageEvent<any>) => void
) {
  try {
    const projectId = "a1dec559-3221-45e9-9e31-c73a491a9dda";
    const sse = new EventSource(
      `http://localhost:4300/sse/subscribeToFlagUpdates?projectId=${projectId}`
    );

    sse.onmessage = onMessageHandler;

    sse.onerror = () => {
      sse.close();
      reconnectFunc(onMessageHandler);
    };
  } catch (err) {
    console.log(err);
  }
}

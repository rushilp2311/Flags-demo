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
    const sse = new EventSource(`${import.meta.env.VITE_API_URL}`);

    sse.onmessage = onMessageHandler;

    sse.onerror = () => {
      sse.close();
      reconnectFunc(onMessageHandler);
    };
  } catch (err) {
    console.log(err);
  }
}

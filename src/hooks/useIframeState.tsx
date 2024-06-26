import { useState, useEffect } from 'react';

function useIframeState() {
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  return isInIframe;
}

export default useIframeState;

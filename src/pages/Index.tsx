import { useEffect, useRef } from "react";

const Index = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set iframe to full viewport height
    const setIframeHeight = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    setIframeHeight();
    window.addEventListener("resize", setIframeHeight);

    return () => window.removeEventListener("resize", setIframeHeight);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        ref={iframeRef}
        src="/dhyanam_app.html"
        className="w-full border-0"
        title="Dhyanam Wellness App"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
};

export default Index;

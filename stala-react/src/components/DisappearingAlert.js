import { useState, useEffect } from "react";

function DisappearingAlert({ countdown = 3000 }) {
  const [activeStatus, setActiveStatus] = useState(true);

  useEffect(() => {
    setInterval(() => setActiveStatus(false), countdown);
  }, [countdown]);

  return (
    <div className="alert border-0 alert-primary">
      {activeStatus && "Hello"}
    </div>
  );
}

export default DisappearingAlert;

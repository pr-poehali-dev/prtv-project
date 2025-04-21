import { useState, useEffect } from "react";

type FanProps = {
  isWorking: boolean;
}

const Fan = ({ isWorking }: FanProps) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (isWorking) {
        setRotation(prev => (prev + 5) % 360);
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isWorking]);

  return (
    <div className="mb-6 flex flex-col items-center">
      <div 
        className="w-16 h-16 transition-transform"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5C12 5 14 9 14 12C14 15 12 19 12 19" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 5C12 5 10 9 10 12C10 15 12 19 12 19" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 12C19 12 15 10 12 10C9 10 5 12 5 12" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 12C19 12 15 14 12 14C9 14 5 12 5 12" stroke="#6E59A5" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="#6E59A5"/>
        </svg>
      </div>
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-sm text-gray-600">Вентилятор</span>
        <div className={`w-2 h-2 rounded-full ${isWorking ? 'bg-green-500' : 'bg-red-500'}`}></div>
      </div>
    </div>
  );
};

export default Fan;

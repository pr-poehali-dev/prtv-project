import { useState } from "react";
import { Button } from "@/components/ui/button";
import Fan from "@/components/Fan";

const Index = () => {
  const [buttons, setButtons] = useState<number[]>([]);
  const [fanOn, setFanOn] = useState(false);

  const handleAddButton = () => {
    setButtons((prev) => [...prev, prev.length]);
  };

  const toggleFan = () => {
    setFanOn(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Генератор кнопок</h1>
        
        <Fan isWorking={fanOn} />
        
        <Button 
          className="w-full mb-4 bg-purple-500 hover:bg-purple-600 text-white"
          onClick={toggleFan}
        >
          {fanOn ? "Выключить вентилятор" : "Включить вентилятор"}
        </Button>
        
        <div className="space-y-4">
          <Button 
            className={`w-full bg-primary hover:bg-primary/90 text-white ${!fanOn && 'opacity-50 cursor-not-allowed'}`}
            onClick={handleAddButton}
            disabled={!fanOn}
          >
            Кнопка для удаления канала
          </Button>
          
          {buttons.map((id) => (
            <Button 
              key={id} 
              className={`w-full bg-secondary hover:bg-secondary/90 ${!fanOn && 'opacity-50 cursor-not-allowed'}`}
              variant="secondary"
              onClick={handleAddButton}
              disabled={!fanOn}
            >
              Кнопка #{id + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

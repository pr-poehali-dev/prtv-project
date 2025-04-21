import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [buttons, setButtons] = useState<number[]>([]);

  const handleAddButton = () => {
    setButtons((prev) => [...prev, prev.length]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Генератор кнопок</h1>
        
        <div className="space-y-4">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={handleAddButton}
          >
            Нажми, чтобы добавить кнопку
          </Button>
          
          {buttons.map((id) => (
            <Button 
              key={id} 
              className="w-full bg-secondary hover:bg-secondary/90"
              variant="secondary"
              onClick={handleAddButton}
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

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function TaniaApp() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const next = () => setStep(step + 1);

  const steps = [
    <div className="text-xl">👋 Hello! I’m <strong>Tania</strong>, your English teacher. Ready to learn?</div>,
    <div>
      <p className="text-lg">🗣️ Today’s phrase is:</p>
      <p className="text-2xl font-bold mt-2">“Nice to meet you.”</p>
      <p className="mt-1 text-sm">Significa: Encantado(a) de conocerte.</p>
    </div>,
    <div>
      <p className="text-lg mb-2">📚 Vocabulary of the day:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>Hello</strong> – Hola</li>
        <li><strong>Name</strong> – Nombre</li>
        <li><strong>Teacher</strong> – Profesor(a)</li>
        <li><strong>Student</strong> – Estudiante</li>
        <li><strong>Learn</strong> – Aprender</li>
      </ul>
    </div>,
    <div>
      <p className="mb-2">✍️ Let’s practice! What is your name?</p>
      <Input placeholder="My name is..." value={name} onChange={e => setName(e.target.value)} />
    </div>,
    <div className="text-center">
      <p className="text-lg">🎉 Great job, {name || 'student'}!</p>
      <p className="mt-2">Tomorrow we’ll learn more. Don’t give up!</p>
    </div>
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <Card className="max-w-xl w-full p-6 shadow-xl rounded-2xl">
        <CardContent>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {steps[step]}
          </motion.div>
          {step < steps.length - 1 && (
            <div className="mt-6 text-right">
              <Button onClick={next}>Next</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

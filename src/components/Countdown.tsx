import { useState, useEffect, useMemo } from 'react';
import { differenceInSeconds } from 'date-fns';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { FlipUnit } from './FlipUnit';

export const Countdown = () => {
  const targetDate = useMemo(() => new Date('2025-04-05T00:00:00-06:00'), []);
  const [timeLeft, setTimeLeft] = useState(
    differenceInSeconds(targetDate, new Date())
  );
  const [prevValues, setPrevValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = differenceInSeconds(targetDate, new Date());
      setTimeLeft(diff);
      if (diff <= 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (3_600 * 24));
  const hours = Math.floor((timeLeft % (3_600 * 24)) / 3_600);
  const minutes = Math.floor((timeLeft % 3_600) / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    setPrevValues({ days, hours, minutes, seconds });
  }, [days, hours, minutes, seconds]);

  if (timeLeft <= 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-20 my-2 w-full">
        <Confetti
          numberOfPieces={100}
          gravity={0.15}
          colors={[
            '#56705e',
            '#b8860b',
            '#fbf7f0',
            '#e6dfd3',
            '#3d5746',
            '#c99c1d',
            '#8c8472',
            '#d3e671',
            '#b8d576',
          ]}
          width={window.innerWidth}
          height={window.innerHeight + 40}
        />
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl text-secondary"
        >
          ¡Es hoy, es hoy!
        </motion.h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center h-20 my-2 bg-warm w-full rounded-xl text-neutral">
      <div className="flex gap-4 items-center justify-center">
        <FlipUnit value={days} prevValue={prevValues.days} label="Días" />
        <span>:</span>
        <FlipUnit value={hours} prevValue={prevValues.hours} label="Horas" />
        <span>:</span>
        <FlipUnit
          value={minutes}
          prevValue={prevValues.minutes}
          label="Minutos"
        />
        <span>:</span>
        <FlipUnit
          value={seconds}
          prevValue={prevValues.seconds}
          label="Segundos"
        />
      </div>
    </div>
  );
};

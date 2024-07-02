'use client';

import { useActions, useUIState } from 'ai/rsc';
import { ReactNode } from 'react';
import { Button } from './ui/button';
interface FlightsProps {
  flights: { id: string; flightNumber: string }[];
}

export const Flights = ({ results }: FlightsProps) => {
  const { submitUserMessage } = useActions();
  const [_, setMessages] = useUIState();
  return (
    <div>
      {results.map(result => (
        <div key={result.id}>
          <Button
            onClick={async () => {
              console.log('lookupFlight ', result.flightNumber)
              const message = await submitUserMessage(
                `lookupFlight ${result.flightNumber}`,
              );

              setMessages((messages: ReactNode[]) => [...messages, message]);
            }}
          >
            {result.flightNumber}
          </Button>
        </div>
      ))
      }
    </div >
  );
};
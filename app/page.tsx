'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

import { useUIState, useActions } from 'ai/rsc';

import { type AI } from './action';
import { ChatScrollAnchor } from '@/lib/hooks/chat-scroll-anchor';
import Textarea from 'react-textarea-autosize';
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit';
import { ChatList } from '@/components/chat-list';

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Page() {
  const [messages, setMessages] = useUIState<typeof AI>();
  //  const { submitUserMessage } = useActions<typeof AI>();
  const [inputValue, setInputValue] = useState('');
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        if (
          e.target &&
          ['INPUT', 'TEXTAREA'].includes((e.target as any).nodeName)
        ) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (inputRef?.current) {
          inputRef.current.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputRef]);

  return (
    <div>
      <div className="pb-[200px] pt-4 md:pt-10">
        {messages && (
          <ChatList messages={messages} />
        )}
        <ChatScrollAnchor trackVisibility={true} />
      </div>
      <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
        <div className="mx-auto sm:max-w-2xl sm:px-4">
          <div className="px-4 py-2 space-y-4 border-t shadow-lg bg-background sm:rounded-t-xl sm:border md:py-4">
            <form
              ref={formRef}
              onSubmit={async (e: any) => {
                e.preventDefault();

                // Blur focus on mobile
                if (window.innerWidth < 600) {
                  e.target['message']?.blur();
                }

                const value = inputValue.trim();
                setInputValue('');
                if (!value) return;

                // Add user message UI
                setMessages(currentMessages => [
                  ...currentMessages,
                  {
                    id: Date.now(),
                    display: value //'' //<UserMessage>{value}</UserMessage>,
                  },
                ]);

                try {
                  // Submit and get response message
                  const responseMessage = () => ([
                  ])//await submitUserMessage(value);
                  setMessages(currentMessages => [
                  ]);
                } catch (error) {
                  // You may want to show a toast or trigger an error state.
                  console.error(error);
                }
              }}
            >
              <div className="relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-12">
                <Textarea
                  ref={inputRef}
                  tabIndex={0}
                  onKeyDown={onKeyDown}
                  placeholder="Send a message."
                  className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  name="message"
                  rows={1}
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                />
                <div className="absolute right-0 top-4 sm:right-4">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

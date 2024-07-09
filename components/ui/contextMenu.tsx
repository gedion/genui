import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';

import { useEffect, useRef, useState } from 'react';
import Textarea from 'react-textarea-autosize';
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit';
import { useActions } from 'ai/rsc';
import './context-menu.css';

const ContextMenuDemo = ({ message, setMessages, children }) => {
  const [inputValue, setInputValue] = useState('');
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { submitUserMessage } = useActions();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    debugger
    e.preventDefault();
    setInputValue('');
    setMessages(messages => [
      ...messages,
      <div>{inputValue}</div>,
    ]);

    const message = await submitUserMessage(inputValue, position);
    setMessages(messages => [...messages, message]);
  };
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
    <div onContextMenu={handleContextMenu}>
      <ContextMenu.Root>
        <ContextMenu.Trigger className="ContextMenuTrigger">{children}</ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content className="ContextMenuContent" sideOffset={5} align="end">

            <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
              <div className="mx-auto sm:max-w-2xl sm:px-4">
                <div className="px-4 py-2 space-y-4 border-t shadow-lg bg-background sm:rounded-t-xl sm:border md:py-4">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
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

          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </div>
  );
};

export default ContextMenuDemo;
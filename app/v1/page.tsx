'use client'
import { useUIState } from 'ai/rsc';
import { AI } from './action';
import componentsMapping from './componentsMapping';
import { mapPosition } from './componentPositionMapping';

import { ChatScrollAnchor } from '@/lib/hooks/chat-scroll-anchor';
import ContextMenu from '@/components/ui/contextMenu';
import GridLayout from '@/components/ui/GridLayout'
// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;
const getGridPositionFromCoordinates = (x, y) => {
  const columns = 12; // 12-column grid
  const columnWidth = window.innerWidth / columns;
  const rowHeight = 50; // Arbitrary row height

  const columnStart = Math.min(Math.floor(x / columnWidth) + 1, columns);
  const columnSpan = 2; // Allow each component to span across 2 columns
  const columnEnd = Math.min(columnStart + columnSpan - 1, columns);

  const maxHeight = Math.floor(window.innerHeight / rowHeight);
  const row = Math.min(Math.floor(y / rowHeight) + 1, maxHeight);

  return { gridColumnStart: columnStart, gridColumnEnd: columnEnd, gridRowStart: row };
};


export default function Page() {
  const [components, setComponents] = useUIState<typeof AI>();
  const keys = Object.keys(componentsMapping)
  console.log('components', keys)
  return (
    <div>
      <ContextMenu message={components} setMessages={setComponents}>
        <GridLayout />
      </ContextMenu>
    </div>
  );
}

/*
        <div className="grid grid-cols-12 gap-2">
          {keys.map((key, index) => {
            const DynamicComponent = componentsMapping[key];
            if (!DynamicComponent) return null; // handle missing compoknent
            const { x, y } = mapPosition[key] ?? { x: 0, y: 0 }
            const { gridColumnStart, gridRowStart } = getGridPositionFromCoordinates(x, y);

            return (
              <div key={index} style={{ gridColumnStart, gridRowStart }}>
                <DynamicComponent key={index} />
              </div>
            )
          })}
          <ChatScrollAnchor trackVisibility={true} />
        </div>
*/
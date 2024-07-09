import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export const mapPosition = {
  HelloCard: { x: 0, y: 0, w: 2, h: 2 },
  MetaverseCard: { x: 2, y: 0, w: 2, h: 3 },
  Footer: { x: 4, y: 0, w: 4, h: 1 },
  LikeDislikeButton: { x: 6, y: 0, w: 1, h: 1 },
  WeddingInvitationCard: { x: 7, y: 0, w: 2, h: 2 },
};

const componentsMapping = {
  HelloCard: () => <div className="bg-blue-500 p-4">Hello</div>,
  MetaverseCard: () => <div className="bg-green-500 p-4">Metaverse</div>,
  Footer: () => <div className="bg-red-500 p-4">Footer</div>,
  LikeDislikeButton: () => <div className="bg-yellow-500 p-4">Like/Dislike</div>,
  WeddingInvitationCard: () => <div className="bg-purple-500 p-4">Wedding Invitation</div>,
};

const CustomGridLayout = () => {
  const layout = Object.keys(mapPosition).map((key, index) => ({
    i: key,
    x: mapPosition[key].x,
    y: mapPosition[key].y,
    w: mapPosition[key].w,
    h: mapPosition[key].h,
  }));

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      {Object.keys(mapPosition).map((key) => {
        const DynamicComponent = componentsMapping[key];
        return (
          <div key={key} className="relative">
            <DynamicComponent />
            <button
              className="absolute top-1 right-1 bg-gray-200 text-black p-1 rounded hover:bg-gray-400"
              onClick={() => console.log(`Remove ${key}`)}
              style={{ display: 'none' }}
            >
              X
            </button>
          </div>
        );
      })}
    </GridLayout>
  );
};

export default CustomGridLayout;

import React from 'react';

import CollectionItem from './Collection-preview.component.jsx';

import './collection-preview.styles.scss';

const CollectionPreview = ({
  title,
  items
}) => (
  <div>
      <h1>{title.toUpperCase()}</h1>
      <div>
      {items
        .filter((item,index) => index < 4)
        .map(({id,...otherItemProps})=>(
          <CollectionItem key={id}/>
        ))}
    </div>
  </div>
);


export default CollectionPreview;
import React from 'react';
import ShopData from './Shop.data.jsx';
import CollectionPreview from '../../Components/Collection-preview/collection-preview';
import './shopPage.styles.scss';
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
    const {
      collections
    } = this.state;
    return (
      <div className='shop-page'>
      {
        collections.map(
          ({id,...otherCollectionProps})=>(
          <CollectionPreview key={id} {...otherCollectionProps}/>
        )
        )
      }
      </div>
    );
  }
}
export default ShopPage;
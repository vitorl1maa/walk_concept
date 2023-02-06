import { useContext } from 'react';

import { DataContext } from '../context/DataContext'
import ProductItemComponent from './ProductItemComponent';
import CalendarRealease from '../pages/Calendar/CalendarRealease';

const GridCardsComponents = () => {

  const value = useContext(DataContext);
  const [products] = value.products

  return (
    <div id="content-produtcs">
      {products.map((products) => (
        <ProductItemComponent
          key={products.id}
          id={products.id}
          title={products.title}
          subtitle={products.subtitle}
          price={products.price}
          image={products.image}
          promotion={products.promotion}
          sizes={products.sizes}
        />
      ))}
    </div>
  );
}

export default GridCardsComponents

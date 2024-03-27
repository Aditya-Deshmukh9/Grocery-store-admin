import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderedItemOrderedItems extends Schema.Component {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'Ordered-Items';
    description: '';
  };
  attributes: {
    amount: Attribute.Integer;
    product: Attribute.Relation<
      'ordered-item.ordered-items',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordered-items': OrderedItemOrderedItems;
    }
  }
}

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    autopopulate: {
      maxDepth: 1
    }
  },
  address: {
    type: String,
    required: true,
  },
  items: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product',
      autopopulate: {
        maxDepth: 1
      }
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

orderSchema.plugin(require('mongoose-autopopulate'))

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;

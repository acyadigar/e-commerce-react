import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  adress: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      autopopulate: {
        maxDepth: 1
      }
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.plugin(require('mongoose-autopopulate'))

const Order = mongoose.model('order', orderSchema);

export default Order;

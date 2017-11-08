
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/stocks" || "mongodb://admin:admin@ds161194.mlab.com:61194/heroku_p9xxsj90",
  {
    useMongoClient: true
  }
);

const StockSchema = new Schema({
  stock: { 
        type: String, 
        required: true 
      },
  quarter: { 
        type: String, 
        required: true 
      },
  date: { 
        type: String, 
        required: true, 
      },
  priceBeforeEarnings: { 
        type: Integer, 
        required: true 
      },
  openPriceAfterEarnings: { 
        type: Integer,
        required: true 
      },
  expectedMove: {
        type: Integer, 
        required: true 
      },
  actualMove: { 
        type: Integer,
        required: true 
      },
  absValActualMove: { 
        type: Integer,
        required: true 
      },
  actualPercentOfExpectedMove: { 
        type: Integer, 
        required: true 
      },
  inside_outside: { 
        type: Integer, 
        required: true 
      },
  expectedPercentMove: { 
        type: Integer, 
        required: true 
      },
  actualPercentMove: { 
        type: Integer, 
        required: true 
      }
});

const Stocks = mongoose.model("Stocks", StockSchema);

module.exports = Stocks;

const banco = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const banco = mongoose.connect("mongodb+srv://Aquillae777:CUiNYrL0NhozTEMV@cluster7.78qhnom.mongodb.net/test", options);


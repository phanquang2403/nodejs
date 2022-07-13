const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/f8_education_dev');
    console.log('connect success');
  } catch (err) {
    console.log('connect fail');
  }
}

module.exports = { connect };

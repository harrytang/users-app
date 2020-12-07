const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const addUserController = require('./controllers/addUserController');
const getTokenController = require('./controllers/getTokenController');
const myAccountController = require('./controllers/myAccountController');
const listPostController = require('./controllers/listPostsController');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {});

app.post('/users', async (req, res) => {
  const data = await addUserController.invoke(req);
  sendResponse(res, data);
});

app.post('/tokens', async (req, res) => {
  const data = await getTokenController.invoke(req);
  sendResponse(res, data);
});

app.get('/myaccount', async (req, res) => {
  const data = await myAccountController.invoke(req);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

app.get('/posts', async (req, res) => {
  const data = await listPostController.invoke(req);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const sendErrorResponse = (res, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(data.code);
  res.end(JSON.stringify(data));
};

const sendSuccessResponse = (res, data) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
};

const sendResponse = (res, data) => {
  if (data.success === true) {
    sendSuccessResponse(res, data);
  } else {
    sendErrorResponse(res, data);
  }
};

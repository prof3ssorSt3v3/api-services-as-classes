import { Router } from 'express';
import ItemController from '../controllers/items.js';
//routers talk to controllers and pass along the request and response objects
//routers have endpoints and decide on the sequence of controllers

const itemRouter = Router();

itemRouter.get('/', ItemController.getAllItems, (req, res) => {
  //return the error or data for all items
  //if itemController returns the data this does not run
});

itemRouter.get('/:id', (req, res) => {
  //return the one item
  //if itemController returns the data this does not run
});

itemRouter.post('/', ItemController.validateItem, (req, res) => {
  //add one item to the datasource
  //return the added item
});

itemRouter.put('/:id', ItemController.validateItem, (req, res) => {
  //edit one item in the datasource
  //return the edited item
});

itemRouter.patch('/:id', ItemController.validateItem, (req, res) => {
  //edit one item in the datasource
  //return the edited item
});

itemRouter.delete('/:id', (req, res) => {
  //delete one item in the datasource
  //return nothing but a status and message
});

export default itemRouter;

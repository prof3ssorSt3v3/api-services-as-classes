import ItemService from '../services/items.js';
//controllers call services and can return error responses
//often use async functions to await service responses

class ItemController {
  constructor() {
    this.controllerName = 'ItemController';
  }

  static async getAllItems(req, res, next) {
    try {
      const results = await ItemService.getAllItems();
      //can return the result or add it to the req object for use in next step
      res.status(200).json({ results });
    } catch (err) {
      //might be an error coming back from controller
      res.status(418).json({ error: 418, message: err.message });
    }
  }

  //lots of other static methods for the other router required methods and endpoints

  static validateItem(req, res, next) {
    //make sure all the required props are in body for the method
    //or return an error response
    const requiredFields = ['thingOne', 'thingTwo'];
    switch (req.method) {
      case 'PUT':
      case 'PATCH':
        requiredFields.push('alsoNeededOne', 'email', 'id');
        break;
      case 'POST':
        requiredFields.push('alsoNeededOne', 'email', 'password');
        break;
      default:
        requiredFields.length = 0; //delete them all
    }
    const { id, ...fields } = req.body;
    let valid = true;
    for (let needed in requiredFields) {
      if ((!needed) in fields) {
        valid = false;
        break;
      }
    }
    if (!valid) {
      //missing fields
      res.status(400).json({ error: 400, message: `Missing required fields for ${req.method} request` });
    } else {
      //all good
      //we can do other validation if we want
      //we can loop through the required fields to add them
      req.validatedBody = {};
      for (let needed in requiredFields) {
        //add each of the required fields to validatedBody
        req.validatedBody[needed] = req.body[needed];
      }
      //ready to proceed
      next();
    }
  }
}

export default ItemController;

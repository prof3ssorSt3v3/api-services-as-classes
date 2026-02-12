import DataService from './data.access.js';
//services can stand alone or talk to other services

class ItemService {
  constructor() {
    this.serviceName = 'ItemService';
  }

  static getAllItems() {
    //get all the items from the data source
    try {
      return DataService.getAll();
    } catch (err) {
      //failed to get the data...
      //pass an error up to whoever called this service method
      throw new Error(err.message);
    }
  }
  static getOneItem(id) {
    //get one item based on id from the data source
  }
  static addItem(itemBody) {
    //add a new item to the data source
  }
  static updateItem(id, itemBody) {
    //update one item in the data source
  }
  static deleteItem(id) {
    //delete one item from the data source
  }
}

export default ItemService;

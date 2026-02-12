import items from '../models/items.js';
//import caching mechanism
//import database access mechanism

class DataService {
  constructor() {
    this.serviceName = 'dataAccessService';
  }

  static connectDB() {
    //connect to your database
  }
  static connectCache() {
    //connect to your cache
  }

  static getAll() {
    //read data from cache or DB as desired
    if (!items) {
      throw new Error('Data Access Error');
      //make a custom class for failing to connect to a data source
    } else {
      return [...items];
    }
  }
}

export default DataService;

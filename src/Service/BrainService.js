import brain from "brain.js";

class BrainService {
  network = new brain.recurrent.LSTM();

  train(data = []) {
    console.log("train data", data);
    this.network.train(this.data, {
      // Defaults values --> expected validation
      iterations: 20000, // the maximum times to iterate the training data --> number greater than 0
      errorThresh: 0.005, // the acceptable error percentage from training data --> number between 0 and 1
      log: true, // true to use console.log, when a function is supplied it is used --> Either true or a function
      logPeriod: 10, // iterations between logging out --> number greater than 0
      learningRate: 0.3, // scales with delta to effect training rate --> number between 0 and 1
      momentum: 0.1, // scales with next layer's change value --> number between 0 and 1
      callback: null, // a periodic call back that can be triggered while training --> null or function
      callbackPeriod: 10, // the number of iterations through the training data between callback calls --> number greater than 0
      timeout: 5000 // the max number of milliseconds to train for --> number greater than 0
    });
  }

  exec(sentence) {
    return this.network.run(sentence);
  }
}

let instance = null;
BrainService.getInstance = () => {
  if (instance === null) {
    instance = new BrainService();
  }
  return instance;
};

export default BrainService;

var _ = require('underscore');
exports.version = '0.0.1';
exports.clusterize = function(vector, options, callback) {
  return new clusterize(vector, options, callback);
};



function clusterize(vector, options, callback) {
  if (!callback || !options || !vector) throw new Error('Provide 3 arguments: vector, options, callback');
  if (typeof callback != 'function') throw new Error('Provide a callback function');
  if (!options || !options.k || options.k<1) return callback(new Error('Provide a correct number k of clusters'));
  if (!_.isArray(vector)) return callback(new Error('Provide an array of data'));
  this.options = options;
  this.v = this.checkV(vector);
  this.k = this.options.k;
  if (this.v.length < this.k) return callback(new Error('The number of points must be greater than the number k of clusters'));
  
  this.initialize();

  var self  = this
    , moved = -1;

  (function iterate() {
    if (moved === 0) return callback(null,self.output());
    moved = 0;
    for (var i=0, max = self.groups.length; i<max; ++i) {
      self.groups[i].defineCentroid(self);
      self.groups[i].distanceObjects(self);
    }
    self.clustering();
    for (var i=0, max = self.groups.length; i<max; ++i)
      if (self.groups[i].centroidMoved) moved++;
    process.nextTick(iterate);
  })();
};


clusterize.prototype.checkV = function(v) {
  var dim = 1;
  if (_.isArray(v[0])) dim = v[0].length;
  for (var i=0, max=v.length; i<max; ++i) {
    if (!_.isArray(v[i])) {
      if (dim!=1) throw new Error('All the elements must have the same dimension');
      v[i] = Number(v[i]);
      if (isNaN(v[i])) throw new Error('All the elements must be float type');
    }
    else {
      if (v[i].length != dim) throw new Error('All the elements must have the same dimension');
      for (var j=0, max=v[i].length; j<max; ++j) {
        v[i][j] = Number(v[i][j]);
        if (isNaN(v[i][j])) throw new Error('All the elements must be float type');
      }
    }
  }
  return v;
};



clusterize.prototype.initialize = function() {
  this.groups   = [];
  for (var i=0, max=this.k; i<max; ++i) {
    this.groups[i]   = new Group(this);
  }
  this.indexes = []; 
  for (var i=0, max=this.v.length; i<max; ++i) {
    this.indexes[i] = i;
  }
  return this;
};


clusterize.prototype.clustering = function() {  
  for (var j=0, max=this.groups.length; j<max; ++j) this.groups[j].initCluster();
  for (var i=0, max=this.v.length; i<max; ++i) {
    var min = this.groups[0].distances[i];
    var indexGroup = 0;
    for (var j=1, max=this.groups.length; j<max; ++j) {
      if (this.groups[j].distances[i] < min) {
        min = this.groups[j].distances[i]
        indexGroup = j;
      }
    }
    this.groups[indexGroup].cluster.push(this.v[i]); 
    this.groups[indexGroup].clusterInd.push(i); 
  }  
  return this;
};



clusterize.prototype.output = function() {
  var out = [];
  for (var j=0, max=this.groups.length; j<max; ++j) {
    out[j] = _.pick(this.groups[j],'centroid','cluster','clusterInd');
  }
  return out;
};



function distance(a,b){
  if (a.length != b.length) return (new Error('The vectors must have the same length'));
  var d = 0.0;
  for (var i=0, max=a.length; i<max; ++i) d += Math.pow((a[i]-b[i]),2);
  return Math.sqrt(d);
};


function Group() {
  this.centroidMoved = true;
}


Group.prototype.initCluster = function() {
  this.cluster = []; // dimensions
  this.clusterInd = []; // index
}



Group.prototype.defineCentroid = function(self){
  this.centroidOld = (this.centroid) ? this.centroid : [];
  if (this.centroid && this.cluster.length>0) {
    this.calculateCentroid();
  }
  else { // random selection
    var i = Math.floor(Math.random() * self.indexes.length);
    this.centroidIndex = self.indexes[i];
    self.indexes.splice(i,1);
    this.centroid = [];
    if (!_.isArray(self.v[this.centroidIndex])) { 
      this.centroid[0] = self.v[this.centroidIndex];
    }
    else {
      for (var i=0, max=self.v[this.centroidIndex].length; i<max; ++i) {
        this.centroid[i] = self.v[this.centroidIndex][i];
      }
    }
  }
  this.centroidMoved = (_.isEqual(this.centroid,this.centroidOld)) ? false : true;
  if (this.centroid.length == 0) console.log('1. was passiert hier??');
  return this;
};


Group.prototype.calculateCentroid = function() {
  this.centroid = [];
  for (var i=0; i<this.cluster.length; ++i) { // loop through the cluster elements
    for (var j=0, max=this.cluster[i].length; j<max; ++j) { // loop through the dimensions
      this.centroid[j] = (this.centroid[j]) ? this.centroid[j]+this.cluster[i][j] : this.cluster[i][j];
    }
  }
  for (var i=0, max=this.centroid.length; i<max; ++i) {
    this.centroid[i] = this.centroid[i]/this.cluster.length; // average
  }
  return this
};


Group.prototype.distanceObjects = function(self) {
  if (!this.distances) this.distances = [];
  for (var i=0, max=self.v.length; i<max; ++i) {
    this.distances[i] = distance(this.centroid, self.v[i]);
  }
  return this;
};

exports._class = clusterize;



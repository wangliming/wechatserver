

/**
 * Load fans and append to req.
 */
function load(req, res, next, name) {
  
}
function loadbyid(req, res, next, id){
  
}
function loadbyname(req, res, next, name) {
  
}
/**
 * Get fans
 * @returns {Fans}
 */
function get(req, res) {
  
}

/**
 * Create new Fans
 * @property {string} req.body.Fansname - The Fansname of Fans.
 * @property {string} req.body.mobileNumber - The mobileNumber of Fans.
 * @returns {Fans}
 */
function create(req, res, next) {
  // const fans = new Fans({
  //   name: req.body.name,
  //   phone: req.body.phone,
  //   avtar: req.body.avtar,
  //   area: req.body.area
  // });

  
}

/**
 * Update existing user
 * @property {string} req.body.name - The username of user.
 * @property {string} req.body.phone - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
  // const fans = req.fans;
  // fans.name = req.body.name;
  // fans.phone = req.body.phone;

}

/**
 * Get Fans list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  
}


exports.default = { load: load, loadbyname: loadbyname, loadbyid: loadbyid, get: get, update: update, create: create, list: list };
module.exports = exports['default'];
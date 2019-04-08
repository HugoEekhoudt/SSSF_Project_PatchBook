var Schema = mongoose.Schema;
var userSchema = new Schema({
  name:  String,
  password: String,
});

function getUserModel() {
mongoose.model('User', userSchema);
}

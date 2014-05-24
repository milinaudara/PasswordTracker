module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Users', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        },
        username: { type: DataTypes.STRING,  allowNull: false },
        password: { type: DataTypes.DATE,    allowNull: false }
    }).complete(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('Users').complete(done);
  }
};
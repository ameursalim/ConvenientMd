// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Claims = sequelize.define('claims', {
    claimId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    claimType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    claimAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    claimStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateSubmitted: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dateResolved: {
      type: DataTypes.DATEONLY,
    },
  }, {
    tableName: 'claims',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Claims.associate = (models) => {
    Claims.belongsTo(models.policies, {
      foreignKey: {
        name: 'policyIdKey',
        field: 'policy_id',
      },
      targetKey: 'policyId',
      as: 'policy',
    });
  };

  return Claims;
};
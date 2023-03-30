// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Policies = sequelize.define('policies', {
    policyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    policyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverageAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    premiumAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    tableName: 'policies',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Policies.associate = (models) => {
    Policies.belongsTo(models.agents, {
      foreignKey: {
        name: 'agentIdKey',
        field: 'agent_id',
      },
      targetKey: 'agentId',
      as: 'agent',
    });
    Policies.belongsTo(models.customers, {
      foreignKey: {
        name: 'customerIdKey',
        field: 'customer_id',
      },
      targetKey: 'customerId',
      as: 'customer',
    });
    Policies.hasMany(models.claims, {
      foreignKey: {
        name: 'policyIdKey',
        field: 'policy_id',
      },
      sourceKey: 'policyId',
      as: 'claims',
    });
  };

  return Policies;
};
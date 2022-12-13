// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Prescriptions = sequelize.define('prescriptions', {
    createdAt: {
      type: DataTypes.DATEONLY,
    },
    status: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'prescriptions',
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Prescriptions.associate = (models) => {
    Prescriptions.belongsTo(models.doctors, {
      foreignKey: {
        name: 'doctorsIdKey',
        field: 'doctorsId',
      },
      as: 'doctors',
    });
    Prescriptions.belongsTo(models.patients, {
      foreignKey: {
        name: 'patientsIdKey',
        field: 'patientsId',
      },
      as: 'patients',
    });
    Prescriptions.belongsTo(models.services, {
      foreignKey: {
        name: 'servicesIdKey',
        field: 'servicesId',
      },
      as: 'services',
    });
  };

  return Prescriptions;
};
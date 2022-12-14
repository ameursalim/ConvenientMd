const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { doctors } = require('../models');
const { faker } = require('@faker-js/faker');
const {prescriptions} = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('doctors');

// This file contains the logic of every route in Forest Admin for the collection doctors:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions

// Create a Doctor
router.post('/doctors', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Doctor
router.put('/doctors/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Doctor
router.delete('/doctors/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Doctors
router.get('/doctors', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Doctors
router.get('/doctors/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#get-a-number-of-records
  // Improve performances disabling pagination: https://docs.forestadmin.com/documentation/reference-guide/performance#disable-pagination-count
  next();
});

// Get a Doctor
router.get('/doctors/\\b(?!count\\b):recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Doctors
router.get('/doctors.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

// Delete a list of Doctors
router.delete('/doctors', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/reference-guide/routes/default-routes#delete-a-list-of-records
  next();
});

router.post('/actions/add-fake-doctor',  permissionMiddlewareCreator.smartAction(), async(req, res) => {
  for ( let i = 0; i< 10< 10; i++) {
    const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const emailDomains = ["gmail.com", "yahoo.fr", "example.com", "hotmail.com"]
      const randomEmailDomain= emailDomains[Math.floor(Math.random() * emailDomains.length)];
      const startAt = new Date(faker.date.recent());
      const rand = Boolean(Math.round(Math.random()));
      // const randomPrescriptions =await getRandomInstance(prescriptions)

    doctors.create({
      firstName:firstName,
      lastName:lastName,
      createdAt:startAt,
      email: faker.internet.email(firstName.toLowerCase(), lastName.toLowerCase(), randomEmailDomain),
      isActive:rand,
      // doctorsIdKey:randomPrescriptions.id,
    })
    .then(() => {
      res.send({
        success:"well done the doctor have been created "
      })
    })
  }

}) 

module.exports = router;

var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid'); // UUID package to generate unique IDs

module.exports = function(db) {

    // Route to list all contacts
    router.get('/', function(req, res, next) {
      try {
          const stmt = db.prepare('SELECT * FROM contacts');
          const contacts = stmt.all();
          res.render('contacts', { title: 'Contacts Database', contacts: contacts });
      } catch (error) {
          next(error); // Pass the error to Express error handling middleware
      }
  });

    // Display the form to create a new contact
    router.get('/create', function(req, res, next) {
        res.render('create-contact', { title: 'Create Contact' });
    });

    // Process the form submission and create a new contact
    router.post('/create', function(req, res, next) {
        try {
            const insert = db.prepare('INSERT INTO contacts (id, firstName, lastName, email, notes) VALUES (?, ?, ?, ?, ?)');
            insert.run(uuidv4(), req.body.firstName.trim(), req.body.lastName.trim(), req.body.email.trim(), req.body.notes.trim());
            res.redirect('/contacts');
        } catch (error) {
            next(error);
        }
    });

    // GET single contact view
    router.get('/:id', function(req, res, next) {
      try {
          const stmt = db.prepare('SELECT * FROM contacts WHERE id = ?');
          const contact = stmt.get(req.params.id);
          if (contact) {
              res.render('contact-detail', { title: 'Contact Details', contact: contact });
          } else {
              res.status(404).send('Contact not found');
          }
      } catch (error) {
          next(error);
      }
  });

    // GET route to display the edit contact form
    router.get('/:id/edit', function(req, res, next) {
        const stmt = db.prepare('SELECT * FROM contacts WHERE id = ?');
        const contact = stmt.get(req.params.id);
        if (contact) {
            res.render('edit-contact', { title: 'Edit Contact', contact: contact });
        } else {
            res.status(404).send('Contact not found');
        }
    });

    // POST route to update a contact
    router.post('/:id/update', function(req, res, next) {
      try {
          const update = db.prepare('UPDATE contacts SET firstName = ?, lastName = ?, email = ?, notes = ? WHERE id = ?');
          update.run(req.body.firstName.trim(), req.body.lastName.trim(), req.body.email.trim(), req.body.notes.trim(), req.params.id);
          res.redirect('/contacts/' + req.params.id);
      } catch (error) {
          next(error);
      }
  });

    // POST route for deleting a contact
    router.post('/:id/delete', function(req, res, next) {
        try {
            const del = db.prepare('DELETE FROM contacts WHERE id = ?');
            del.run(req.params.id);
            res.redirect('/contacts');
        } catch (error) {
            next(error);
        }
    });
    return router;
};

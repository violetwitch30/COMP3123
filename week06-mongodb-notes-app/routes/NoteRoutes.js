const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
// POST: http://localhost:8081/api/notes
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.noteTitle || !req.body.noteDescription) {
        return res.status(400).send({
            message: "Note title and description are required"
        });
    }
    //TODO - Write your code here to save the note
    try {
        // create a new note
        const note = new noteModel({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority || 'MEDIUM'
        });

        // save note to database
        const data = await note.save();

        res.status(200).send({
            message: 'Note created successfully',
            note: data
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
// GET: http://localhost:8081/api/notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving the notes."
        })
    }
    /*
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content cannot be empty"
        });
    } */
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
// GET: http://localhost:8081/api/notes/:noteId
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);

        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        })
    }
    // // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content cannot be empty"
    //     });
    // }
    //TODO - Write your code here to return only one note using noteId
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
// PUT: http://localhost:8081/api/notes/:noteId
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.noteTitle && !req.body.noteDescription && !req.body.priority) {
        return res.status(400).send({
            message: "Please, provide at least one field to update"
        });
    }
    //TODO - Write your code here to update the note using noteId
    try {
        // update dateUpdated field
        req.body.dateUpdated = Date.now();
        // find note and update
        const note = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            req.body,
            {new: true, runValidators: true}
        );
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.status(200).send({
            message: "Note updated successfully",
            note: note
        })
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        })
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
// DELETE: http://localhost:8081/api/notes/:noteId
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId);
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send({
            message: "Note deleted successfully!",
            note: note
        });
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        })
    }
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content cannot be empty"
    //     });
    // }
    //TODO - Write your code here to delete the note using noteId
});

module.exports = noteRoutes;
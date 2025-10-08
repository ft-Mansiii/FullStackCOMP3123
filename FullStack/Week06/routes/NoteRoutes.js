const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

// Create a new Note
// http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if (!req.body.noteDescription) {
        return res.status(400).send({
            message: "Note description can not be empty"
        });
    }
    try {
        // Create and save the note
        const note = new noteModel({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority
        });
        await note.save();
        res.json({ message: "Note saved successfully" });
    } catch (err) {
        // Handle errors
        res.status(500).send({ message: err.message || "Some error occurred while creating the Note." });
    }
});

// Retrieve all Notes
// http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    try {
        // Find all notes
        const notes = await noteModel.find();
        res.json(notes);
    } catch (err) {
        // Handle errors
        res.status(500).send({ message: err.message || "Some error occurred while retrieving notes." });
    }
});

// Retrieve a single Note with noteId
// http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        // Find note by ID
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.json(note);
    } catch (err) {
        // Handle errors
        res.status(500).send({ message: err.message || "Some error occurred while retrieving the note." });
    }
});

// Update a Note with noteId
// http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body.noteDescription) {
        return res.status(400).send({
            message: "Note description can not be empty"
        });
    }
    try {
        // Update note by ID
        const note = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            {
                noteTitle: req.body.noteTitle,
                noteDescription: req.body.noteDescription,
                priority: req.body.priority,
                dateUpdated: Date.now()
            },
            { new: true }
        );
        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.json({ message: "Note updated successfully" });
    } catch (err) {
        // Handle errors
        res.status(500).send({ message: err.message || "Some error occurred while updating the Note." });
    }
});

// Delete a Note with noteId
// http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        // Delete note by ID
        const note = await noteModel.findByIdAndDelete(req.params.noteId);

        if (!note) {
            return res.status(404).send({ message: "Note not found" });
        }
        res.json({ message: "Note deleted successfully" });
    } catch (err) {
        // Handle errors
        res.status(500).send({ message: err.message || "Some error occurred while deleting the Note." });
    }
});

module.exports = noteRoutes;
// Async/Await Usage
// Checking for req.body.content in all routes, but only the POST and PUT routes should validate the body.
//Async/Await Usage
//Checking for req.body.content in all routes, but only the POST and PUT routes should validate the body.
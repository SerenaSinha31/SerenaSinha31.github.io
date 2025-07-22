import express from 'express';
const router = express.Router();

router.get('/show', (req, res) => {
    res.send("Show Product");
});
router.delete('/:id', (req, res) => {
    res.send("Delete Product");
});

export default router;
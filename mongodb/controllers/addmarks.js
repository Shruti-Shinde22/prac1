export const addstudentmarks = async (req, res) => {
    try {
        await StudentMarks.insertMany(req.body);
        res.status(201).json({
            msg: "Added!"
        });
    } catch (error) {
        console.error("Error adding student marks:", error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

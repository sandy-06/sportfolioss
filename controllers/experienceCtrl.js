const experienceSchema = require('../models/experienceModel');



//...........get experience user...........
exports.getExperience = async (req, res) => {

    const experience= await experienceSchema.find();

    try {
        res.json(experience);
    } catch (error) {
        res.status(500).json({ msg: 'sever problem' })
    }

}


//.........add experience user...........
exports.addExperience = async (req, res) => {
    const { experience } = req.body;

    try {

        const newExperience = new experienceSchema({
            experience
        })

        await newExperience.save();
        res.json(newExperience);

    } catch (error) {
        res.status(500).json({ msg: 'server problem' })
    }


}

//........get specific experience user by id.............
exports.getExperienceId = async (req, res) => {

    try {
        const experience = await experienceSchema.findById(req.params.id);
        res.json(experience);

    } catch (error) {
        res.status(500).json({ msg: 'server problem' })
    }


}

//..............update specific experience user by id...............
exports.updateExperience = async (req, res) => {
    const { experience} = req.body;

    try {
        const newExperience = await expeienceSchema.findByIdAndUpdate(req.params.id, {

            experience

        });

        let results = await newExperience.save();
        await results;
        res.json({msg:'Item updated'})

    }
    catch (error) {
        res.status(500).json({msg:'server problem'})
    }


}


//...............delete specific experience user by id.............
exports.delExperience = async (req, res)=> {
    const experience = await experienceSchema.findByIdAndDelete(req.params.id)

    experience;

    res.json({msg:'Item deleted'})
}

const skillSchema = require('../models/skillModel');



//...........get skill...........
exports.getSkill = async (req, res) => {

    const skill= await skillSchema.find();

    try {
        res.json(skill);
    } catch (error) {
        res.status(500).json({ msg: 'sever problem' })
    }

}


//.........add skill...........
exports.addSkill = async (req, res) => {
    const { skill } = req.body;

    try {

        const newSkill = new skillSchema({
            skill
        })

        await newSkill.save();
        res.json(newSkill);

    } catch (error) {
        res.status(500).json({ msg: 'server problem' })
    }


}

//........get specific skill by id.............
exports.getSkillId = async (req, res) => {

    try {
        const skill = await skillSchema.findById(req.params.id);
        res.json(skill);

    } catch (error) {
        res.status(500).json({ msg: 'server problem' })
    }


}

//..............update specific skill by id...............
exports.updateSkill = async (req, res) => {
    const { skill } = req.body;

    try {
        const newSkill = await experienceSchema.findByIdAndUpdate(req.params.id, {

            skill

        });

        let results = await newSkill.save();
        await results;
        res.json({msg:'Item updated'})

    }
    catch (error) {
        res.status(500).json({msg:'server problem'})
    }


}


//...............delete specific skill by id.............
exports.delSkill = async (req, res)=> {
    const experience = await skillSchema.findByIdAndDelete(req.params.id)

    skill;

    res.json({msg:'Item deleted'})
}

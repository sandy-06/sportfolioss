const certificationSchema = require('../models/certificationModel');



//...........get certification user...........
exports.getCertification = async (req, res) => {

    const certification = await certificationSchema.find();

    try {
        res.json(certification);
    } catch (error) {
        res.status(500).json({ msg: 'sever problem' })
    }

}


//.........add certification ...........
exports.addCertification = async (req, res) => {
    const { certification } = req.body;

    try {

        const newCertification = new certificationSchema({
            certification
        })

        await newCertification.save();
        res.json(newCertification);

    } catch (error) {
        res.status(500).json({ msg: 'server problem' })
    }


}

//........get specific certification  by id.............
exports.getCertificationId = async (req, res) => {

    try {
        const certification = await certificationSchema.findById(req.params.id);
        res.json(certification);

    } catch (error) {
        res.status(500).json({ msg: 'server problem' })
    }


}

//..............update specific certification by id...............
exports.updateCertification = async (req, res) => {
    const { certification } = req.body;

    try {
        const newCertification = await certificationSchema.findByIdAndUpdate(req.params.id, {

            certification

        });

        let results = await newCertification.save();
        await results;
        res.json({msg:'Item updated'})

    }
    catch (error) {
        res.status(500).json({msg:'server problem'})
    }


}


//...............delete specific certification by id.............
exports.delCertification = async (req, res)=> {
    const certification = await certificationSchema.findByIdAndDelete(req.params.id)

   certification;

    res.json({msg:'Item deleted'})
}

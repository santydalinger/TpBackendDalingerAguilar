const Estudiante = require('../models/estudiante');

exports.getAllEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.status(200).json({
            ok: true,
            estudiantes
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            //error al obtener datos
            message: 'Error: ', error,
        })
    }
}

exports.updateEstudiante = async (req, res) => {
    try {
        const id = req.params.id
        const estudiante = await Estudiante.findByPk(id);
        if (estudiante) {
            const estudianteActualizado = await estudiante.update(req.body)
            res.status(202).json({
                ok: true,

                msg: "Estudiante actualizado",
                estudianteActualizado
            })
        } else {
            res.status(404).json({
                ok: false,
                msg: "No existe el estudiante"
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error al modificar el estudiante" + error,
        })
    }
}

exports.createEstudiante = async (req, res) => {
    try {
        console.log(req.body);
        const { nombre, apellido, email, img } = req.body;
        const nuevoEstudiante = {
            nombre,
            apellido,
            email,
            img
        }
        const estudiante = await Estudiante.create(nuevoEstudiante);
        res.status(201).json({
            ok: true,
            estudiante
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error Server'
        })
    }
}

exports.deleteEstudiante = async (req, res) => {
    try {
        const id = req.params.id

        const estudiante = await Estudiante.findByPk(id);

        if (estudiante) {

            await estudiante.destroy(req.body)

            res.status(202).json({
                ok: true,
                msg: "Estudiante borrado",

            })
        } else {
            res.status(404).json({
                ok: false,
                msg: "No existe ese estudiante"
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error al borrar el estudiante" + error,
        })
    }
}






import { SeccionCotizar } from "../models/SeccionCotizar.js";

export const getCotizaciones = async (req, res) => {
  try {
    const cotizacion = await SeccionCotizar.findAll();
    res.json(cotizacion);
  } catch (error) {
    console.error("Error getting all:", error);
    res.status(500).json({ message: "Error getting all", error });
  }
};

export const getOneCotizacion = async (req, res) => {
  try {
    const { id } = req.params;
    const cotizacion = await SeccionCotizar.findByPk(id);
    if (cotizacion) {
      res.json(cotizacion);
    } else {
      res.status(404).json({ message: "Cotización no encontrada" });
    }
  } catch (error) {
    console.error("Error obteniendo la cotización:", error);
    res.status(500).json({ message: "Error obteniendo la cotización", error });
  }
};

export const createCotizacion = async (req, res) => {
  try {
    const {
      nombres,
      apellidos,
      numero_telefonico,
      correo_electronico,
      fifa,
      status,
      numero_usuarios,
      cp,
      tipo_de_plan,
    } = req.body;

    // Asegurarse de que los valores de cp y tipo_de_plan existan en sus tablas correspondientes
    const newSeccionCotizar = await SeccionCotizar.create({
      nombres,
      apellidos,
      numero_telefonico,
      correo_electronico,
      fifa,
      status,
      numero_usuarios,
      cp, // Debe existir en la tabla cps
      tipo_de_plan, // Debe existir en la tabla tipos_de_planes
    });

    res.json(newSeccionCotizar);
  } catch (error) {
    console.error("Error creating cotizacion:", error);
    res.status(500).json({ message: "Error creating cotizacion", error });
  }
};

export const updateCotizacion = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombres,
      apellidos,
      numero_telefonico,
      correo_electronico,
      fifa,
      status,
      numero_usuarios,
      cp,
      tipo_de_plan,
    } = req.body;

    const cotizacion = await SeccionCotizar.findByPk(id);
    if (!cotizacion) {
      return res.status(404).json({ message: "Cotización no encontrada" });
    }

    cotizacion.nombres = nombres || cotizacion.nombres;
    cotizacion.apellidos = apellidos || cotizacion.apellidos;
    cotizacion.numero_telefonico =
      numero_telefonico || cotizacion.numero_telefonico;
    cotizacion.correo_electronico =
      correo_electronico || cotizacion.correo_electronico;
    cotizacion.fifa = fifa || cotizacion.fifa;
    cotizacion.status = status || cotizacion.status;
    cotizacion.numero_usuarios = numero_usuarios || cotizacion.numero_usuarios;
    cotizacion.cp = cp || cotizacion.cp;
    cotizacion.tipo_de_plan = tipo_de_plan || cotizacion.tipo_de_plan;

    await cotizacion.save();

    res.json(cotizacion);
  } catch (error) {
    console.error("Error updating cotizacion:", error);
    res.status(500).json({ message: "Error updating cotizacion", error });
  }
};


export const deleteCotizacion = async (req, res) => {
  try {
    const { id } = req.params;

    const cotizacion = await SeccionCotizar.findByPk(id);
    if (!cotizacion) {
      return res.status(404).json({ message: "Cotización no encontrada" });
    }

    await cotizacion.destroy();

    res.json({ message: "Cotización eliminada exitosamente" });
  } catch (error) {
    console.error("Error deleting cotizacion:", error);
    res.status(500).json({ message: "Error deleting cotizacion", error });
  }
};



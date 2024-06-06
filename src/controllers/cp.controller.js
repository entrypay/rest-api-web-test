import { Cp } from "../models/Cp.js";

// Obtener todos los códigos postales
export const getCps = async (req, res) => {
  try {
    const cps = await Cp.findAll();
    res.json(cps);
  } catch (error) {
    console.error("Error getting all cps:", error);
    res.status(500).json({ message: "Error getting all cps", error });
  }
};

// Obtener un código postal por su d_codigo
export const getOneCp = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const cp = await Cp.findByPk(id);
    if (cp) {
      res.json(cp);
    } else {
      res.status(404).json({ message: "Código postal no encontrado" });
    }
  } catch (error) {
    console.error("Error obteniendo el código postal:", error);
    res
      .status(500)
      .json({ message: "Error obteniendo el código postal", error });
  }
};

// Crear un nuevo código postal
export const createCp = async (req, res) => {
  try {
    const {
      d_codigo,
      d_asenta,
      d_tipo_asenta,
      d_mnpio,
      d_estado,
      d_ciudad,
      d_cp,
      c_estado,
      c_oficina,
      c_cp,
      c_tipo_asenta,
      c_mnpio,
      id_asenta_cpcons,
      d_zona,
      c_cve_ciudad,
    } = req.body;

    const newCp = await Cp.create({
      d_codigo,
      d_asenta,
      d_tipo_asenta,
      d_mnpio,
      d_estado,
      d_ciudad,
      d_cp,
      c_estado,
      c_oficina,
      c_cp,
      c_tipo_asenta,
      c_mnpio,
      id_asenta_cpcons,
      d_zona,
      c_cve_ciudad,
    });

    res.json(newCp);
  } catch (error) {
    console.error("Error creating cp:", error);
    res.status(500).json({ message: "Error creating cp", error });
  }
};

// Actualizar un código postal existente
export const updateCp = async (req, res) => {
  try {
  const { id } = req.params;
    const {
      d_asenta,
      d_tipo_asenta,
      d_mnpio,
      d_estado,
      d_ciudad,
      d_cp,
      c_estado,
      c_oficina,
      c_cp,
      c_tipo_asenta,
      c_mnpio,
      id_asenta_cpcons,
      d_zona,
      c_cve_ciudad,
    } = req.body;

    const cp = await Cp.findByPk(id);
    if (!cp) {
      return res.status(404).json({ message: "Código postal no encontrado" });
    }

    cp.d_asenta = d_asenta || cp.d_asenta;
    cp.d_tipo_asenta = d_tipo_asenta || cp.d_tipo_asenta;
    cp.d_mnpio = d_mnpio || cp.d_mnpio;
    cp.d_estado = d_estado || cp.d_estado;
    cp.d_ciudad = d_ciudad || cp.d_ciudad;
    cp.d_cp = d_cp || cp.d_cp;
    cp.c_estado = c_estado || cp.c_estado;
    cp.c_oficina = c_oficina || cp.c_oficina;
    cp.c_cp = c_cp || cp.c_cp;
    cp.c_tipo_asenta = c_tipo_asenta || cp.c_tipo_asenta;
    cp.c_mnpio = c_mnpio || cp.c_mnpio;
    cp.id_asenta_cpcons = id_asenta_cpcons || cp.id_asenta_cpcons;
    cp.d_zona = d_zona || cp.d_zona;
    cp.c_cve_ciudad = c_cve_ciudad || cp.c_cve_ciudad;

    await cp.save();

    res.json(cp);
  } catch (error) {
    console.error("Error updating cp:", error);
    res.status(500).json({ message: "Error updating cp", error });
  }
};

// Eliminar un código postal
export const deleteCp = async (req, res) => {
  try {
    const { id } = req.params;

    const cp = await Cp.findByPk(id);
    if (!cp) {
      return res.status(404).json({ message: "Código postal no encontrado" });
    }

    await cp.destroy();

    res.json({ message: "Código postal eliminado exitosamente" });
  } catch (error) {
    console.error("Error deleting cp:", error);
    res.status(500).json({ message: "Error deleting cp", error });
  }
};

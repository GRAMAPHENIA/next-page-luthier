"use server";

export default async function submitAction(prevState, data) {
  console.log("data:", data);
  console.log("prevState:", prevState);
  return {
    message: "El formulario se a enviado con exito",
  };
}

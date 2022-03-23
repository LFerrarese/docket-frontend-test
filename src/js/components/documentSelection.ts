import { createMask } from "../utils/mask";

const documentTypeSelect = document.getElementById(
  "DocumentType"
) as HTMLSelectElement;
const documentNumber = document.getElementById(
  "DocumentNumber"
) as HTMLInputElement;

documentTypeSelect.addEventListener("change", () => {
  const label = documentNumber.parentElement
    ?.firstElementChild as HTMLLabelElement;

  if (documentTypeSelect.value === "FISICA") {
    label.textContent = "CPF:";
    documentNumber.setAttribute("data-type", "cpf");
    createMask(documentNumber, "cpf");
  } else {
    label.textContent = "CNPJ:";
    documentNumber.setAttribute("data-type", "cnpj");
    createMask(documentNumber, "cnpj");
  }
});

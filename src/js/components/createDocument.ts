import {
  createDocumentTemplate,
  DocumentTemplateProps,
} from "./documentTemplate";

const form = document.querySelector("form") as HTMLFormElement;
const documentName = document.getElementById(
  "DocumentName"
) as HTMLInputElement;
const documentType = document.getElementById(
  "DocumentType"
) as HTMLSelectElement;
const documentNumber = document.getElementById(
  "DocumentNumber"
) as HTMLInputElement;
const name = document.getElementById("Name") as HTMLInputElement;
const zipcode = document.getElementById("AddressZipcode") as HTMLInputElement;
const block = document.getElementById("AddressBlock") as HTMLInputElement;
const number = document.getElementById("AddressNumber") as HTMLInputElement;
const city = document.getElementById("AddressCity") as HTMLInputElement;
const state = document.getElementById("AddressState") as HTMLInputElement;

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const templateData: DocumentTemplateProps = {
    documentName: documentName.value,
    documentType: documentType.value,
    documentNumber: documentNumber.value,
    name: name.value,
    address: {
      zipcode: zipcode.value,
      street: block.value,
      number: number.value,
      city: city.value,
      state: state.value,
    },
  };

  console.log("documentName" in templateData);

  const documentTemplate = createDocumentTemplate(templateData);
});

type Address = {
  zipcode: string;
  street: string;
  number: string;
  city: string;
  state: string;
};

export type DocumentTemplateProps = {
  documentName: string;
  documentType: string;
  name: string;
  documentNumber: string;
  address: Address;
};

export const createDocumentTemplate = (
  props: DocumentTemplateProps
): string => {
  const { documentName, documentType, name, documentNumber, address } = props;

  const template = `
    <div class="box with-heading documents-document">
      <div class="heading">
        <div class="document-heading">
          <h2>${documentName}</h2>
          <img src="assets/images/delete.svg" />
        </div>
      </div>
      <div class="content"></div>
    </div>
  `;

  return template;
};

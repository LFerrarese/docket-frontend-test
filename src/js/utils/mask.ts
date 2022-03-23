type Mask = "cpf" | "cep" | "cnpj";

export const masks = {
  cpf: {
    length: 11,
    fn: (value: string) =>
      value
        .replace(/[^\d]/g, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
  },
  cep: {
    length: 8,
    fn: (value: string) =>
      value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/\.(\d{3})(\d)/, ".$1-$2"),
  },
  cnpj: {
    length: 14,
    fn: (value: string) =>
      value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2"),
  },
};

export const createMask = (inputElement: HTMLInputElement, mask: Mask) => {
  const selectedMask = masks[mask.toLowerCase() as Mask];

  const listener = () => {
    if (inputElement.value.length === selectedMask.length) {
      inputElement.value = selectedMask.fn(inputElement.value);
    }
  };

  const dataListener = inputElement.getAttribute("data-listener");
  if (dataListener && dataListener === "mask") {
    inputElement.removeEventListener("input", listener, true);
  }

  inputElement.setAttribute("data-listener", "mask");
  inputElement.value = "";

  inputElement.maxLength = masks[mask].length;
  inputElement.addEventListener("input", listener);
};

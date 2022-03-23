import { searchAddressByZipcode } from "../services/viaCep";
import { createMask } from "../utils/mask";
import { toast } from "../components/toast";

const zipcodeInput = document.getElementById(
  "AddressZipcode"
) as HTMLInputElement;
const addressBlockInput = document.getElementById(
  "AddressBlock"
) as HTMLInputElement;
const addressNumberInput = document.getElementById(
  "AddressNumber"
) as HTMLInputElement;
const addressCityInput = document.getElementById(
  "AddressCity"
) as HTMLInputElement;
const addressStateInput = document.getElementById(
  "AddressState"
) as HTMLInputElement;

createMask(zipcodeInput, "cep");

zipcodeInput.addEventListener("blur", async () => {
  const zipcode = zipcodeInput.value.replace(".", "").replace("-", "");

  if (!zipcode) return;

  const response = await searchAddressByZipcode(zipcode);

  if (!response.error) {
    addressBlockInput.value = response.logradouro ?? "";
    addressCityInput.value = response.localidade ?? "";
    addressStateInput.value = response.uf ?? "";

    addressBlockInput.disabled = true;
    addressCityInput.disabled = true;
    addressStateInput.disabled = true;

    addressNumberInput.disabled = false;
    addressNumberInput.focus();
  } else {
    toast("warning", response.error);

    addressBlockInput.disabled = false;
    addressNumberInput.disabled = false;
    addressCityInput.disabled = false;
    addressStateInput.disabled = false;

    addressBlockInput.focus();
  }
});

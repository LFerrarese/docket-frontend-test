import { loader } from "../components/loader";

type Response = {
  cep?: string;
  logradouro?: string;
  localidade?: string;
  uf?: string;
  error?: string;
};

export const searchAddressByZipcode = async (
  zipcode: string
): Promise<Response> => {
  const url = `https://viacep.com.br/ws/${zipcode}/json`;

  loader.isLoading = true;

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      loader.isLoading = false;
      return await response.json();
    }
  } catch {
    loader.isLoading = false;
    return {
      error: "Erro ao pesquisar o CEP. Preencha os campos manualmente.",
    };
  }

  loader.isLoading = false;

  return {
    error: "Erro ao pesquisar o CEP. Preencha os campos manualmente.",
  };
};

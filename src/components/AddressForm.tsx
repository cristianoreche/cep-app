import React, { useState, useEffect } from 'react';
import { Address } from '../types';
import axios from 'axios';

interface AddressFormProps {
  onSave: (address: Address) => void;
  initialData?: Address | null;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSave, initialData }) => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<Address>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });
  const [loading, setLoading] = useState(false);

  // Atualiza os campos ao editar um endereço
  useEffect(() => {
    if (initialData) {
      setCep(initialData.cep);
      setAddress(initialData);
    } else {
      setCep('');
      setAddress({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
      });
    }
  }, [initialData]);

  const fetchAddress = async () => {
    if (cep.length !== 8) return;

    try {
      setLoading(true);
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddress((prev) => ({
        ...prev!,
        ...response.data,
      }));
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = () => {
    fetchAddress();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress((prev) => ({
      ...prev!,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    if (address.cep) {
      onSave(address);
      // Limpar os campos após salvar
      setCep('');
      setAddress({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
      });
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">{initialData ? 'Editar Endereço' : 'Adicionar Endereço'}</h2>
      
      <div className="mb-4">
        <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
          CEP
        </label>
        <input
          id="cep"
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
          onBlur={handleBlur}
          placeholder="Digite o CEP"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {loading && <p>Carregando...</p>}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Logradouro</label>
        <input
          type="text"
          name="logradouro"
          value={address.logradouro}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Complemento</label>
        <input
          type="text"
          name="complemento"
          value={address.complemento}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bairro</label>
        <input
          type="text"
          name="bairro"
          value={address.bairro}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Cidade</label>
        <input
          type="text"
          name="localidade"
          value={address.localidade}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Estado</label>
        <input
          type="text"
          name="uf"
          value={address.uf}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        {initialData ? 'Atualizar' : 'Salvar'}
      </button>
    </div>
  );
};

export default AddressForm;

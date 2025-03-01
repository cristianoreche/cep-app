import React from 'react';
import { Address } from '../types';  

interface AddressListProps {
  addresses: Address[];
  onDelete: (cep: string) => void;
  onEdit: (address: Address) => void;
}

const AddressList: React.FC<AddressListProps> = ({ addresses, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Endereços Salvos</h2>
      {addresses.length === 0 ? (
        <p>Nenhum endereço salvo.</p>
      ) : (
        <ul>
          {addresses.map((address, index) => (
            <li key={index} className="border-b border-gray-200 py-2 flex justify-between items-center">
              <div>
                <p><strong>CEP:</strong> {address.cep}</p>
                <p><strong>Logradouro:</strong> {address.logradouro}</p>
                <p><strong>Complemento:</strong> {address.complemento || 'N/A'}</p> 
                <p><strong>Bairro:</strong> {address.bairro}</p>
                <p><strong>Cidade:</strong> {address.localidade}, {address.uf}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(address)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(address.cep)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressList;

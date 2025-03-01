import React, { useState } from 'react';
import { Address } from './types';
import AddressForm from './components/AddressForm';
import AddressList from './components/AddressList';

const App: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>(
    JSON.parse(localStorage.getItem('addresses') || '[]').map((addr: Partial<Address>) => ({
      cep: addr.cep || '',
      logradouro: addr.logradouro || '',
      complemento: addr.complemento || '',
      bairro: addr.bairro || '',
      localidade: addr.localidade || '',
      uf: addr.uf || '',
    }))
  );

  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleSave = (address: Address) => {
    const fullAddress = { ...address, complemento: address.complemento || '' };

    let updatedAddresses;
    if (editingAddress) {
      updatedAddresses = addresses.map((addr) =>
        addr.cep === editingAddress.cep ? fullAddress : addr
      );
    } else {
      updatedAddresses = [...addresses, fullAddress];
    }

    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    setEditingAddress(null);
  };

  const handleDelete = (cep: string) => {
    const updatedAddresses = addresses.filter((addr) => addr.cep !== cep);
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Endereços</h1>
      <div className="flex w-full max-w-4xl gap-6">
        <div className="w-1/2 bg-white p-6 shadow-md rounded-lg">
          <AddressForm onSave={handleSave} initialData={editingAddress} />
        </div>
        <div className="w-1/2 bg-white p-6 shadow-md rounded-lg">
          <AddressList addresses={addresses} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import ProductCard from '../../components/dashboard/ProductCard';
import ProductModal from '../../components/dashboard/ProductModal';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "評判コース 松",
      price: "15,000",
      originalPrice: "19,000",
      description: "おすすめ商品・サービスの参考です",
      image: "/path/to/image.jpg"
    }
    // Add more sample products as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const product = products.find(p => p.id === id);
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id ? { ...p, ...productData } : p
      ));
    } else {
      // Add new product
      const newProduct = {
        ...productData,
        id: Math.max(0, ...products.map(p => p.id)) + 1
      };
      setProducts([...products, newProduct]);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold">おすすめの商品・サービス</h2>
        <Button 
          onClick={handleAddProduct}
          className="bg-[#006BA6] hover:bg-[#005a8c]"
        >
          商品を追加
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={() => handleEdit(product.id)}
            onDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <ProductModal
          product={editingProduct}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveProduct}
        />
      )}
    </div>
  );
};

export default ProductsSection;
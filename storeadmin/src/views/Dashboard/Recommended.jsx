import React, { useState } from "react";
import ProductCard from "../../components/dashboard/ProductCard";
import ProductModal from "../../components/dashboard/ProductModal";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "評判コース 松",
      originalPrice: "価格 : ¥19,000 →(割引後) ¥15,000",
      description:
        "こちらはおすすめ商品・サービスの参考文章です。こちらには店舗が記載した文章が表示されます。こちらはおすすめ商品・サービスの参考文章です。こちらには店舗が記載した文章が表示されます。",
      image: "/public/demo.png",
    },
    {
      id: 2,
      title: "評判コース 松",
      originalPrice: "価格 : ¥19,000 →(割引後) ¥15,000",
      description:
        "こちらはおすすめ商品・サービスの参考文章です。こちらには店舗が記載した文章が表示されます。こちらはおすすめ商品・サービスの参考文章です。こちらには店舗が記載した文章が表示されます。",
      image: "/public/demo.png",
    },
    {
      id: 3,
      title: "評判コース 松",
      originalPrice: "価格 : ¥19,000 →(割引後) ¥15,000",
      description:
        "こちらはおすすめ商品・サービスの参考文章です。こちらには店舗が記載した文章が表示されます。こちらはおすすめ商品・サービスの参考文章です。こちらには店舗が記載した文章が表示されます。",
      image: "/public/demo.png",
    },
    // Add more sample products as needed
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      // Update existing product
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...p, ...productData } : p
        )
      );
    } else {
      // Add new product
      const newProduct = {
        ...productData,
        id: Math.max(0, ...products.map((p) => p.id)) + 1,
      };
      setProducts([...products, newProduct]);
    }
  };

  return (
    <>
      <div className="p-[20px] ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[28px] font-bold text-[#2C3237]">
            おすすめの商品・サービス
          </h2>
          <Button
            onClick={handleAddProduct}
            className="bg-[#006BA6] text-[16px] rounded-[4px] font-bold text-[#FFFFFF] w-[150px] h-[36px]"
          >
            商品を追加
          </Button>
        </div>
        <div className="flex flex-wrap gap-[30px]">
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
        )}{" "}
      </div>
      <div className="flex justify-start  my-[30px]">
        <Button
          type="button"
          onClick={() => console.log(schedule)}
          className="bg-[#006BA6] hover:bg-[#005a8c] text-white px-6 py-2 rounded w-[150px] !h-[50px]"
        >
          保存
        </Button>
      </div>
    </>
  );
};

export default ProductsSection;

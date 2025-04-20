"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, clearSelectedProduct } from "./store/productSlice";
import productsData from "../datas/productsDatas";

import ShippingFree from "../components/banners/smallTop/shippingFree/ShippingFree";
import BannerHome from "../components/banners/bannersIntros/BannerHome";
import Presentation from "../components/header/aboutus/Presentation";
import NewProducts from "../components/banners/productsSelection/SwiperNewProducts";
import BestSeller from "../components/banners/productsSelection/SwiperBestSeller";
import ProductDetails from "../components/products/ProductDetailsModal";
import SocialMedias from "../components/header/aboutus/SocialMedias_links";
import FAQ from "../components/header/aboutus/FAQ";
import Contacts from "../components/header/aboutus/Contacts";
import Livraison from "../components/header/aboutus/Livraison";

const App = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  const handleCloseModal = () => {
    dispatch(clearSelectedProduct());
  };

  return (
    <>
      <ShippingFree />
      <BannerHome />
      <Presentation />
      <NewProducts />
      <BestSeller />
      <Livraison />
      <FAQ />
      <Contacts />

      <SocialMedias />

      {/* ✅ Ajout de la modale ProductDetails */}
      {selectedProduct && <ProductDetails onClose={handleCloseModal} />}
    </>
  );
};

export default App;

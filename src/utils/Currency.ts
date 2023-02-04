const Currency: ICurrency = {
  formatPrice(price: number): string {
    const formater = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
    return formater.format(price).replace(/\s/g, "");
  },
};

interface ICurrency {
  formatPrice: (price: number) => string;
}

export default Currency;

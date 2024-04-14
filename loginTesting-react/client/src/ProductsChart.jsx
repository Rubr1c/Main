import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

function ProductChart() {
  const [products, setProducts] = useState([]);
  const [soldProducts, setSoldProducts] = useState([]);
  const [productSalesData, setProductSalesData] = useState([]);
  const [productRevenueData, setProductRevenueData] = useState([]);
  const chartRefSales = useRef(null);
  const chartRefRevenue = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get(
          "http://localhost:8081/Products"
        );
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }

      try {
        const soldProductsResponse = await axios.get(
          "http://localhost:8081/SoldProducts"
        );
        setSoldProducts(soldProductsResponse.data);
      } catch (error) {
        console.error("Error fetching sold products:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const productSales = {};
    const productRevenue = {};

    soldProducts.forEach((soldProduct) => {
      const { product_id, quantity } = soldProduct;
      productSales[product_id] = (productSales[product_id] || 0) + quantity;

      const product = products.find((item) => item.product_id === product_id);
      if (product) {
        const revenue = product.Price * quantity;
        productRevenue[product_id] =
          (productRevenue[product_id] || 0) + revenue;
      }
    });

    const formattedProductSales = products.map((product) => ({
      product_id: product.product_id,
      name: product.Name,
      quantity_sold: productSales[product.product_id] || 0,
    }));

    setProductSalesData(formattedProductSales);

    const formattedProductRevenue = Object.keys(productRevenue).map(
      (productId) => ({
        product_id: productId,
        name:
          products.find((item) => item.product_id === productId)?.Name ||
          "Unknown",
        revenue: productRevenue[productId],
      })
    );

    setProductRevenueData(formattedProductRevenue);
  }, [products, soldProducts]);

  useEffect(() => {
    if (productSalesData.length > 0) {
      if (chartRefSales.current) {
        chartRefSales.current.destroy();
      }

      const labelsSales = productSalesData.map((product) => product.name);
      const dataSales = productSalesData.map(
        (product) => product.quantity_sold
      );

      const ctxSales = document.getElementById("productChartSales");
      chartRefSales.current = new Chart(ctxSales, {
        type: "bar",
        data: {
          labels: labelsSales,
          datasets: [
            {
              label: "Quantity Sold",
              data: dataSales,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [productSalesData]);

  useEffect(() => {
    if (productRevenueData.length > 0) {
      if (chartRefRevenue.current) {
        chartRefRevenue.current.destroy();
      }

      const labelsRevenue = productRevenueData.map((product) => product.name);
      const dataRevenue = productRevenueData.map((product) => product.revenue);

      const ctxRevenue = document.getElementById("productChartRevenue");
      chartRefRevenue.current = new Chart(ctxRevenue, {
        type: "pie",
        data: {
          labels: labelsRevenue,
          datasets: [
            {
              label: "Revenue",
              data: dataRevenue,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
        },
      });
    }
  }, [productRevenueData]);

  return (
    <div className="container">
      <div className="row">
      <h1>Top Selling Products</h1>
        <div className="col-md-6" style={{ width: "600px", height: "600px" }}>
          <canvas id="productChartSales"></canvas>
        </div>

        <div className="col-md-6" style={{ width: "400px", height: "400px" }}>
          <h1>Revenue by Product</h1>
          <canvas id="productChartRevenue"></canvas>
        </div>
      </div>
    </div>
  );
}

export default ProductChart;

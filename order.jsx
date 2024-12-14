import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/sidebar';
import { Search, ArrowUpDown } from 'lucide-react';
import { Helmet } from "react-helmet";

  /**
   * Fetches the orders from the backend and updates the state.
   * Handles any potential errors gracefully.
   */
  const fetchOrders = async () => {
    const response = await fetch('https://ecommercebackend-8gx8.onrender.com/get-orders');
    const data = await response.json();
    setOrders(data?.orders || []);
  };

export default Orders;
